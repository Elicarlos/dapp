
export default function Header(){
    return (
        <header className="navbar bg-dark">
          <div className="container">
              
              <a href="/" className="justify-content-start" style={{ textDecoration: "none"}}>
                <h1 className="fw-bold text-light">Flood Help</h1>
              </a>
                <div className="text-end ">
                    <button className="btn btn-outline-light me-2 mr-4">
                      <img src="/metamask.svg" width="24" className="me-3" />
                      Entrar
                    </button>
                    <a href="/create" className="btn btn-warning">Pedir ajuda</a>
                </div>
             
          </div>
      </header>
    );
}