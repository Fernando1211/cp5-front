import React from 'react';
import './Body.css';

interface ProdutoProps {
    imagem: string;
    nome: string;
    status: string;
    esgotado?: boolean;
}

const Produto: React.FC<ProdutoProps> = ({ imagem, nome, status, esgotado }) => {
    return (
        <div className="produto-container">
            <div className='produto-image-container'>
                <img src={imagem} alt={nome} className="produto-image" />
                <div className='produto-hover-overlay'>
                    <span>DETALHES</span>
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
