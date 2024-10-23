import React from 'react';
import './Body.css';
import { useTodoApi } from '../../Endpoints';

interface ProdutoProps {
    imagem: string;
    nome: string;
    descricao: string;
    status: string;
    esgotado?: boolean;
}

const Produto: React.FC<ProdutoProps> = ({ imagem, nome, descricao, status, esgotado }) => {
    const { getCartTarget, createTodo } = useTodoApi();

    const handleAddToCart = async () => {
        try {
          const currentCart = await getCartTarget();
          console.log('Carrinho atual:', currentCart);
          if (currentCart) {
            const newTodo = {
              title: nome,
              description: descricao,
              isComplete: false,
              targetId: currentCart.id,
            };
            await createTodo(newTodo);
            console.log('Produto adicionado ao carrinho:', newTodo);
          }
        } catch (error) {
          console.error('Erro ao adicionar produto ao carrinho:', error);
        }
      };

    return (
        <div className="produto-container">
            <div className='produto-image-container' onClick={handleAddToCart}>
                <img src={imagem} alt={nome} className="produto-image" />
                <div className='produto-hover-overlay'>
                    <span>ADICIONAR</span>
                </div>
                <h2>{nome}</h2>
                <span className={esgotado ? 'status esgotado' : 'status'}>{status}</span>
                <button className="comprar-button" disabled={esgotado}>
                    {esgotado ? 'ESGOTADO' : 'COMPRAR'}
                </button>
            </div>            
        </div>
    );
};

export default Produto;
