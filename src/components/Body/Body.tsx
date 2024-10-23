import Menu from './Menu';
import Produto from './Produto'
import './Body.css'
import {Target} from '../../Endpoints'

interface BodyProps {
    fetchCart: () => void;
    setCart: React.Dispatch<React.SetStateAction<Target | null>>;
  }
  

  const Body: React.FC<BodyProps> = ({ fetchCart, setCart }) => {

  return (
    <body>
        <Menu />

        <div className='banner'></div>

        <div className="promocoes-container">

                <div className='title'>
                    <h2 className="promocoes-title">CONFIRA NOSSA LISTA DE</h2>
                    <h2 className="promocoes-title-2">PROMOÇÕES</h2>
                </div>

                <div className='linha-separadora-body   '></div>    

               
                
            <div className="promocoes-container">
                

                <div className="produtos-grid">
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart}                         
                        idproduto= "5326"
                        imagem="/assets/images/cabo.jpg"
                        nome="Cabo Tipo-C/C 2,0m Cb838 Kimaster"
                        descricao='Cabo'
                        status="Disponível"
                        esgotado={false}
                        
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart} 
                        idproduto= "6346"
                        imagem="/assets/images/adaptador.png"
                        nome="Adaptador Hdmi 90º Macho Femea Storm/Oem"
                        descricao='Adaptador'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart} 
                        idproduto= "8441"
                        imagem="/assets/images/ssd.png"
                        nome="Case HD 2.5`` SATA/SSDS USB3.0 BK P GA174"
                        descricao='ssd'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart} 
                        idproduto= "6261"
                        imagem="/assets/images/luminaria.png"
                        nome="Luminaria De Emergencia 30 Leds Lea30 Intelbras"
                        descricao='luminaria'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart} 
                        idproduto= "2131"
                        imagem="/assets/images/leitor.png"
                        nome="Leitor Cartao Memoria 46 Em 1 Ac076 Multilaser"
                        descricao='Adaptador'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart} 
                        idproduto= "8682"
                        imagem="/assets/images/headset.png"
                        nome="Headset H151 Pt 981-000587 Logitech"
                        descricao='Headset'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart}
                        idproduto= "5311"
                        imagem="/assets/images/webcam.png"
                        nome="Webcam C920S Pro Hd 1080p 960-001257 Logitech"
                        descricao='webcam'
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        fetchCart={fetchCart}
                        setCart={setCart}
                        idproduto= "1574"
                        imagem="/assets/images/estabilizador.png"
                        nome="Estabilizador 500va Biv/115v 60698"
                        descricao='estabilizador'
                        status="Disponível"
                        esgotado={false}
                    />
                </div>              

            </div>

            <div className='palavras-container'>
                <h2 className="palavras-title">AS PALAVRAS</h2>
                <h2 className="palavras-title-2">PALAVRAS MAIS BUSCADAS</h2>
            </div>

        </div>

        <div className='body-lower-container'>
            <div className='lower-text-container'>
                <h2>GOSTOU DA LOJA?</h2>
                <h3>ENTÃO CADASTRE-SE!</h3>
            </div>
            <div className='lower-containet-icon'></div>
            <div className='lower-text-container'><h2>NEWSLETTER</h2></div>            
            <input 
                type="text" 
                minLength={2}
                placeholder="Seu e-mail" 
                className="barra-cadastro" 
            />
            <button className='cadastro-button'>CADASTRAR</button>
        </div>

    </body>

  );
}

export default Body;
