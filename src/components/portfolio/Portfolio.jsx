import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import  { useEffect, useState } from "react"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured"); //Helps decide which tab is selected
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
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
            case "featured": 
                setData(featuredPortfolio);
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
                setData(featuredPortfolio);
        }
    }, [selected])

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
                        src={"d.img"} 
                        alt=""
                    />
                    <h3>{d.title}</h3>
                </div> 
                ))}
                
            </div>
        </div>
    )
}
