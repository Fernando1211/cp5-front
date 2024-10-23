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
            <img src={imagem} alt={nome} className="produto-image" />
            <h3>{nome}</h3>
            <span className={esgotado ? 'status esgotado' : 'status'}>{status}</span>
            <button className="comprar-button" disabled={esgotado}>
                {esgotado ? 'ESGOTADO' : 'COMPRAR'}
            </button>
        </div>
    );
};

export default Produto;
