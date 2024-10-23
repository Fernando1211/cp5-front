import { useState } from 'react';
import Carrinho from '../modal/Carrinho';
import './Header.css'
import carrinhoImage from '../../../public/assets/images/carrinho.png';
import {Target} from '../../Endpoints'

interface HeaderProps {
    cart: Target | null;
    fetchCart: () => void;
  }

const Header: React.FC<HeaderProps> = ({ cart, fetchCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);


const toggleCart =  async () => {
    setIsCartOpen(!isCartOpen);
    await fetchCart();
};


    return (
        <header>

            <div className='header-top-container'>

                <div className="left-section">
                    <span>BEM-VINDO, FAÇA SEU </span>
                    <a>LOGIN</a>
                    <span> OU </span>
                    <a>CADASTRE-SE</a>
                </div>

                <div className="right-section">
                    <a>MEUS PEDIDOS</a>
                    <span className="divider">|</span>
                    <a>MINHA CONTA</a>
                </div>

            </div>

            <div className='header-bottom-container'>

                <div className='logo'></div>

                <input 
                    type="text" 
                    minLength={2}
                    placeholder="Busca" 
                    className="barra-pesquisa" 
                />

                <div className="carrinho-container">

                    <div className="carrinho-icon" onClick={toggleCart}>
                        <img src={carrinhoImage} alt="Carrinho" />
                        
                    </div>

                    <div className="carrinho-info">

                        <div className="carrinho-title">
                            <span>meu carrinho</span>                            
                        </div>

                        <div className="carrinho-line"></div>

                        <div className="carrinho-details">
                            <span>{cart?.todo?.length || 0} itens</span>
                            <span>R$ 0,00</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='linha-separadora'></div>      
                 

            <Carrinho isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} fetchCart={fetchCart} />
        </header>
      );
}

export default Header;
