import "./portfolioList.scss"

export default function PortfolioList({ id,title, active, setSelected}) {
    return (
       <li className={active ? "porfolioList active": "portfolioList"} //If it's active then it'll it as being active vice versa
            onClick={()=> setSelected(id)} >
           {title}
       </li>
    )
}
