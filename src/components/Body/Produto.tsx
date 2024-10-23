import React from 'react';
import './Body.css';
import { useTodoApi } from '../../Endpoints';
import {Target} from '../../Endpoints'

interface ProdutoProps {
    idproduto: string;
    imagem: string;
    nome: string;
    descricao: string;
    status: string;
    esgotado?: boolean;
    fetchCart: () => void;
    setCart: React.Dispatch<React.SetStateAction<Target | null>>;
}

const Produto: React.FC<ProdutoProps> = ({ imagem, nome, status, esgotado, fetchCart }) => {
    const { getCartTarget, createTodo, createTarget, todos, updateTodo } = useTodoApi();

    const handleAddToCart = async () => {
        try {
          let cart = await getCartTarget();
          if (!cart) {
            cart = await createTarget();
          }
      
          const existingTodo = todos.find(
            (todo) => todo.title === nome && todo.targetId === cart.id
          );
      
          if (existingTodo) {
            const newQuantity = existingTodo.quantity + 1;
            await updateTodo(existingTodo.id, newQuantity);
          } else {
            const newTodo = {
              title: nome,
              isComplete: false,
              targetId: cart.id,
            };
            await createTodo(newTodo, 1);
          }
      
          await fetchCart();
        } catch (error) {
          console.error('Erro ao adicionar produto ao carrinho:', error);
        }
      };

    return (
        <div className="produto-container">
            <div className="produto-image-container" onClick={handleAddToCart}>
                <img src={imagem} alt={nome} className="produto-image" />
                <div className="produto-hover-overlay">
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
