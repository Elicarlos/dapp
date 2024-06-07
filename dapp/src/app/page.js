"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getOpenRequests } from "@/services/Web3Service";
import { useEffect, useState } from "react";



export default function Home() {

  const [ requests, setRequests] = useState([])

  useEffect(() =>{
    loadRequest(0);
    
  }, [])

  async function loadRequest(lastId){
    try{
      const result = await getOpenRequests(lastId)
      console.log(result)
      if(lastId === 0 )
        setRequests(result)

      else{
        requests.push(...result)
        setRequests(requests)
      }
    }
    catch (err) {
      console.error(err)
      alert(err.message)
    }

  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">Ajude as vítimas de enchentes e demais desastres naturais do Brasil.</p>
        </div>
        <div className="p-4 mx-5">
          <div className="list-group">
            {
              requests && requests.length
              ? requests.map(rq => <Request key={rq.id} data={rq} />)
              : <>Conecte-se com sua metamask</>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}