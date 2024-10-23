import { useState } from 'react';
import './Body.css'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    return (
        <nav className="navbar">
            <ul className="menu">
                <li
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter('adaptadores')}
                    onMouseLeave={handleMouseLeave}
                >
                    Adaptadores
                    {openMenu === 'adaptadores' && (
                        <ul className="submenu">
                            <li>Adaptador USB</li>
                            <li>Adaptador HDMI</li>
                            <div className='menu-separadora'></div>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter('cabos')}
                    onMouseLeave={handleMouseLeave}
                >
                    Cabos
                    {openMenu === 'cabos' && (
                        <ul className="submenu">
                            <li>Cabo HDMI</li>
                            <li>Cabo USB</li>
                            <div className='menu-separadora'></div>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter('energia')}
                    onMouseLeave={handleMouseLeave}
                >
                    Energia
                    {openMenu === 'energia' && (
                        <ul className="submenu">
                            <li>Carregador</li>
                            <li>Baterias</li>
                            <div className='menu-separadora'></div>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter('acessorios')}
                    onMouseLeave={handleMouseLeave}
                >
                    Acessórios & Periféricos
                    {openMenu === 'acessorios' && (
                        <ul className="submenu">
                            <li>Hub USB</li>
                            <li>Leitor de Cartão</li>
                            <li>Teclado</li>
                            <div className='menu-separadora'></div>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter('ferramentas')}
                    onMouseLeave={handleMouseLeave}
                >
                    Ferramentas
                    {openMenu === 'ferramentas' && (
                        <ul className="submenu">
                            <li>Chave de Fenda</li>
                            <li>Alicate</li>
                            <div className='menu-separadora'></div>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
