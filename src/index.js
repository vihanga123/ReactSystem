import ReactDOM from 'react-dom';

// const hi = document.createElement("hi")
// hi.textContent="Hello World"
// hi.className="header"
// console.log(hi)

const nav = (
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contacts</li>
    </ul>
  </nav>
)
ReactDOM.render(nav,document.getElementById("root"))
