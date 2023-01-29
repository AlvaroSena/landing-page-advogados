import './styles.scss'
import logo from '../../assets/logo.png'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="content">
          <div className="text-box">
            <h1>Atendimento Júrido Digital e Personalizado para você</h1>
            <p>
              Donec vitae sapien ut libero venenatis faucibus. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Pellentesque posuere. Etiam feugiat lorem non metus.
              <br />
              <br />
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            </p>
            <a className="a-services" href="#servicos">
              Ver serviços
            </a>
          </div>
        </div>
      </div>

      <div id="servicos" className="services-container">
        <div className="services-content">
          <h1 className="h1-services">Nossos Serviços</h1>

          <div className="cards-row">
            <div className="card-item">
              <img src={logo} alt="" />
              <h3>Direito Civil</h3>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="card-item">
              <img src={logo} alt="" />
              <h3>Direito Empresarial</h3>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="card-item">
              <img src={logo} alt="" />
              <h3>Direito Trabalhista</h3>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}