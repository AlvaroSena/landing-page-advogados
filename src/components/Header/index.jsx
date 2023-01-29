import './styles.scss'

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2>Logo</h2>

        <nav>
          <ul>
            <li>
              <a className="active" href="">HOME</a>
            </li>
            <li>
              <a href="#servicos">SERVIÇOS</a>
            </li>
            <li>
              <a href="">SOBRE</a>
            </li>
            <li>
              <a href="">CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}