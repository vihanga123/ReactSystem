
import ReactDOM from 'react-dom';

function Set(){
  return(
      <header>
        <nav className='nav'>
          <img src='./React.png' className='logo'></img>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function Body(){
  return(
    <div>
      <h1>This is the Header</h1>
      <p>This is a paragraph of the website</p>
    </div>
  )
}

function Footer(){
  return(
      <footer className='footer'>
        Copyright By your mama KEKW
      </footer>
  )
}

function Page(){
  return(
    <div className='font'>
      <Set/>
      <Body/>
      <Footer/>
    </div>

  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))

