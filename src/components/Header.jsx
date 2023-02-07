export function Header() {
  return (
    <header>
    <div className="header">
      <div className="header-title">
        <h1>Codelândia</h1>
        <h1>blog</h1>
      </div>

      <div className="header-search">
        <form className="search" action="">
          <input type="image" className="lupa" src="../assets/images/search.png" alt="Submit" />
          <input className="input" type="text" placeholder="Pesquisar no blog" />
        </form>
      </div>
    </div>
  </header>
  )
}