import Menu from './Menu';
import Produto from './Produto'
import './Body.css'

const Body = () => {
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
                        imagem="src/assets/images/cabo.jpg"
                        nome="Cabo Tipo-C/C 2,0m Cb838 Kimaster"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/adaptador.png"
                        nome="Adaptador Hdmi 90º Macho Femea Storm/Oem"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/ssd.png"
                        nome="Case HD 2.5`` SATA/SSDS USB3.0 BK P GA174"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/luminaria.png"
                        nome="Luminaria De Emergencia 30 Leds Lea30 Intelbras"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/leitor.png"
                        nome="Leitor Cartao Memoria 46 Em 1 Ac076 Multilaser"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/headset.png"
                        nome="Headset H151 Pt 981-000587 Logitech"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/webcam.png"
                        nome="Webcam C920S Pro Hd 1080p 960-001257 Logitech"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="src/assets/images/estabilizador.png"
                        nome="Estabilizador 500va Biv/115v 60698"
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