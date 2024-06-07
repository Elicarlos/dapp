"use client"

import { doLogin } from "@/services/Web3Service";
import { useState, useEffect } from "react";

export default function Header(){
    const [wallet, setWallet] = useState("");

    useEffect(() =>{
      setWallet(localStorage.getItem("wallet" || ""))

    }, []);

    function btnLoginClick(){
      doLogin()
        .then(wallet => setWallet(wallet))
        .catch(err => {
          console.error(err)
          alert(err.message)
        })
    }

    return (
        <header className="navbar bg-dark">
          <div className="container">
              
              <a href="/" className="justify-content-start" style={{ textDecoration: "none"}}>
                <h1 className="fw-bold text-light">Flood Help</h1>
              </a>
                <div className="text-end ">
                  {
                    wallet
                    ? <a href="/create" className="btn btn-warning">Pedir ajuda</a>
                 
                    : <button className="btn btn-outline-light me-2 mr-4" onClick={ btnLoginClick} >
                      <img src="/metamask.svg" width="24" className="me-3" />
                      Entrar
                    </button>
                   }                    
                </div>
             
          </div>
      </header>
    );
}