import './Footer.css'
import Atendimento from '../../assets/images/atendimento.png'
import Telefone from '../../assets/images/telefone.png'
import Email from '../../assets/images/email.png'
import Zap from '../../assets/images/zap.png'
import Boleto from '../../assets/images/boleto.png'
import Pix from '../../assets/images/pix.png'
import Visa from '../../assets/images/visa.png'
import Master from '../../assets/images/mastercard.png'
import AE from '../../assets/images/americanexpress.png'
import Elo from '../../assets/images/elo.png'
import Seguranca from '../../assets/images/seg.png'
import Insta from '../../assets/images/Insta.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>

        <div className='footer-top-container'>

          <div className='footer-item'>
            <h2>INSTITUCIONAL</h2>
            <h3>Sobre a empresa</h3>
            <h3>Como comprar</h3>
            <h3>Segurança</h3>
            <h3>Envio</h3>
            <h3>Pagamento</h3>
            <h3>Tempo de Garantia</h3>
            <h3>Contato</h3>
          </div>

          <div className='footer-item'>    

            <h2>CONTATO</h2>

            <div className='contato-container'>
              <img src={Atendimento} alt="Atendimento" className="footer-item-icon" />
              <h3>Atendimento de Terça a Domingo - 9h às 18h</h3>            
            </div>

            <div className='contato-container'>
              <img src={Telefone} alt="Telefone" className="footer-item-icon" />
              <h3>(XX)XXXX-XXXX</h3>            
            </div>
            
            <div className='contato-container'>
              <img src={Email} alt="Email" className="footer-item-icon" />
              <h3>XXXXX@XXXXXXX.com.br</h3>            
            </div>
            
            <div className='contato-container'>
              <img src={Zap} alt="Zap" className="footer-item-icon" />
              <h3>XXXXXXXXX</h3>            
            </div>

          </div>


          <div className='footer-item'>    

            <h2>PAGAMENTO</h2>

            <div className='pagamento-container'>
              <h3>À VISTA</h3>
              <div className='pagamento-items'>
                <img src={Boleto} alt="Boleto" className="footer-item-icon" />
                <img src={Pix} alt="Pix" className="footer-item-icon" />
              </div>           
            </div>

            <div className='pagamento-container'>
              <h3>À PRAZO</h3>
              <div className='pagamento-items'>
                <img src={Visa} alt="Visa" className="footer-item-icon" />
                <img src={Master} alt="Master" className="footer-item-icon" />
                <img src={AE} alt="AE" className="footer-item-icon" />
                <img src={Elo} alt="Elo" className="footer-item-icon" />
              </div>           
            </div>           

          </div>   

          <div className='footer-item'>    

            <h2>SEGURANÇA</h2>
            
            <img src={Seguranca} alt="Seguranca" className="seguranca-icon" />     

          </div>         

        </div>

        <img src={Insta} alt="Instagram" className="insta-icon" />    

      </div>

      <div className='footer-lower-container'>
        Copyright © 2024 | Fernando Henrique Vilela Aguiar | RM : 557525 | Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
