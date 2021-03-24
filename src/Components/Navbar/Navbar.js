function Navbar() {
  const itensNavbar = ["Inicio", "Servicos", "Contato"];

  return (
    <section className="navbar">
      <nav className="navbar-container">
        <h3>
          Codar<span>.</span>
        </h3>
        <ul>
          {itensNavbar.map((item) => (
            <li>{item}</li>
          ))}
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
