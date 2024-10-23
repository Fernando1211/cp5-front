import React, { useEffect, useState } from 'react';
import './Carrinho.css';
import { useTodoApi } from '../../Endpoints';


interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
  fetchCart: () => void;
}

const Carrinho: React.FC<CarrinhoProps> = ({ isOpen, onClose }) => {
    const { currentCart, setCurrentCart, getCartTarget, todos, deleteTarget, updateTarget, getAllTargets, targets } = useTodoApi();
    const [localQuantities, setLocalQuantities] = useState<{ [todoId: number]: number }>({});
    const [showPreviousPurchases, setShowPreviousPurchases] = useState(false);
    const [selectedEnvio, setSelectedEnvio] = useState<string>('SEDEX'); 

    useEffect(() => {
        if (isOpen) {
            const fetchCart = async () => {
                try {
                    const cart = await getCartTarget();
                    console.log('Fetch:', cart)
            
                    if (cart) {
                        const cart = await getCartTarget();
                        console.log('Fetch:', cart)
                        console.log('Fetch ID:', cart.id)
                        setCurrentCart(cart);
                    }
                } catch (error) {
                    console.error("Erro ao buscar carrinho:", error);
                }
            };
            fetchCart();
        }
    }, [isOpen]);


    useEffect(() => {
        if (Array.isArray(todos) && todos.length > 0) {
            const initialQuantities = todos.reduce((acc, todo) => {
                acc[todo.id] = 1;
                return acc;
            }, {} as { [todoId: number]: number });
            setLocalQuantities(initialQuantities);
        }
    }, [todos]);


    const handleQuantityChange = (todoId: number, change: number) => {
        setLocalQuantities((prev) => {
            const newQuantity = Math.max(1, (prev[todoId] || 1) + change);
            return { ...prev, [todoId]: newQuantity };
        });
    };


    const handleShowPreviousPurchases = async () => {
        if (!showPreviousPurchases) {
            await getAllTargets();                
        }
        setShowPreviousPurchases((prevState) => !prevState);            
    };    

    if (!isOpen) return null;  


    return (
        <div className="modal-overlay">
            <div className="modal-content">        
                <h2>Carrinho de Compras</h2>
                {currentCart?.todo?.length > 0 ? (
                    currentCart.todo.map((todo) => (
                    <div key={todo.id} className="cart-item">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(todo.id, -1)}>-</button>
                            <input type="number" value={localQuantities[todo.id] || 1} readOnly />
                            <button onClick={() => handleQuantityChange(todo.id, 1)}>+</button>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className="carrinho-text">Carrinho vazio</p>
                )}

                <div className='carrinho-container'>

                    <div className='carrinho-container-right'>
                        <div className='frete-container'>
                            <input 
                                type="text" 
                                minLength={2}
                                placeholder="CEP" 
                                className="barra-cep" 
                            />
                            <button className='frete-button'>Calcular frete</button>
                        </div>

                        <div className="envio-container">
                            <table className="envio-tabela">
                                <thead>
                                    <tr>
                                        <th>Envio</th>
                                        <th>Frete</th>
                                        <th>Prazo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"
                                                id="pac"
                                                name="envio"
                                                value="PAC"
                                                checked={selectedEnvio === 'PAC'}
                                                onChange={() => setSelectedEnvio('PAC')}
                                            />
                                            <label htmlFor="pac">PAC</label>
                                        </td>
                                        <td>GRÁTIS</td>
                                        <td>8 dias</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"
                                                id="retirar"
                                                name="envio"
                                                value="Retirar"
                                                checked={selectedEnvio === 'Retirar'}
                                                onChange={() => setSelectedEnvio('Retirar')}
                                            />
                                            <label htmlFor="retirar">Retirar na loja</label>
                                        </td>
                                        <td>GRÁTIS</td>
                                        <td>0 dias</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"
                                                id="sedex"
                                                name="envio"
                                                value="SEDEX"
                                                checked={selectedEnvio === 'SEDEX'}
                                                onChange={() => setSelectedEnvio('SEDEX')}
                                            />
                                            <label htmlFor="sedex">SEDEX</label>
                                        </td>
                                        <td>R$ 10,00</td>
                                        <td>4 dias</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    
                    </div>

                    <div className='carrinho-container-left'>
                        <div>

                            <div className='preco'>
                                <h1>Subtotal</h1>
                                <h2>R$ 00,00</h2>
                            </div>
                            <div className='preco'>
                                <h1>Frete</h1>
                                <h2>R$ 00,00</h2>
                            </div>
                            <div className='preco'>
                                <h1>Total</h1>
                                <h2>R$ 00,00</h2>
                            </div>         

                        </div>

                        <div className='cupom'>
                            <h1>Se possuir cupons de desconto utilize na página seguinte</h1>
                            <button onClick={() => currentCart?.id && deleteTarget(currentCart.id)} className='limpar-carrinho-button'>
                                <h2>Limpar carrinho</h2>
                            </button>
                        </div>
                    </div>

                </div>

                <div className='carrinho-buttons'>
                    <button onClick={onClose} className="close-modal">Escolher mais produtos</button>
                    <button onClick={handleShowPreviousPurchases} className="close-modal">
                        Ver Compras Anteriores
                    </button>
                    <button onClick={() => currentCart?.id && updateTarget(currentCart?.id, { isComplete: true })} className="finalizar-button">
                        Finalizar compra
                    </button>                    
                </div>
                {showPreviousPurchases && (
                        <div className='compras-anteriores-container'>
                            <h3>Compras anteriores</h3>
                            {targets.map((target) => (
                                <div key={target.id}>
                                    <p>{target.title}</p>
                                    <p>{target.description}</p>
                                </div>
                            ))}
                        </div>
                    )}               
            </div>            
        </div>
    );
};

export default Carrinho;
