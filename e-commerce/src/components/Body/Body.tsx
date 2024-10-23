import Menu from './Menu';
import Produto from './Produto'

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
                        imagem="/path/to/product1.png"
                        nome="Cabo Tipo-C/C 2,0m Cb838 Kimaster"
                        status="Esgotado!"
                        esgotado={true}
                    />
                    <Produto
                        imagem="/path/to/product2.png"
                        nome="Teclado Gamer XYZ"
                        status="Disponível"
                        esgotado={false}
                    />
                    <Produto
                        imagem="/path/to/product3.png"
                        nome="Mouse Óptico USB"
                        status="Disponível"
                        esgotado={false}
                    />
                </div>
            </div>
        </div>
    </body>

  );
}

export default Body;
