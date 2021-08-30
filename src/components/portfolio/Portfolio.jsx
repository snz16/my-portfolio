import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import  { useEffect, useState } from "react"
import {
  certificatesPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../../data";

import React from 'react';
import Modal from "react-modal";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured"); //Helps decide which tab is selected
    const [data, setData] = useState([]);
    const list = [
        {
            id: "certificates",
            title: "Certificates",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "branding",
            title: "Branding",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "web",
            title: "Web App",
        },
    ];

    useEffect(() => {
        switch(selected){
            case "certificates": 
                setData(certificatesPortfolio);
                break;
             case "design": 
                setData(designPortfolio);
                break;
             case "branding": 
                setData(brandingPortfolio);
                break;
             case "mobile": 
                setData(mobilePortfolio);
                break;
             case "web": 
                setData(webPortfolio);
                break;
            default:
                setData(certificatesPortfolio);
        }
    }, [selected])

    const [modalIsOpen, setModalIsOpen] = useState(false);

   const setModalIsOpenToTrue = () => {
     setModalIsOpen(true);
   };

   const setModalIsOpenToFalse = () => {
     setModalIsOpen(false);
   };

   const customStyles  = {
     content: {
       top: "50%",
       left: "50%",
       right: "auto",
       bottom: "auto",
       marginRight: "-50%",
       transform: "translate(-50%, -50%)",
       backgroundColor: "#F0AA89",
     },
     overlay: {
       top: 0,
       right: 0,
       bottom: 0,
       left: 0,
       backgroundColor: "#000000",
     },
   };
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul> 
                {list.map((item) => (  //Returns the items list in the Portfolio page as tabs 
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} //If the tab is selected then the item.id is active 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img 
                        src={d.img} 
                        alt=""
                        onClick={setModalIsOpenToTrue}/>
                        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                          <button onClick={setModalIsOpenToFalse}>Close</button>
                          <img src={d.img} alt=""/>
                          <h3>{d.title}</h3>
                          <p>{d.desc}</p>
                        </Modal>
                    <h3>{d.title}</h3>
                </div> 
                ))}
                
            </div>
        </div>
    )
}