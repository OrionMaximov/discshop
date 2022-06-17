import BuyBtn from "../BuyBtn/BuyBtn";
import "./Cards.css";
function Cards(props){
return <div className="cards">
    <img src={props.cover} className="CardsImg" alt="" />
        <h3 className="cardsTitle">{props.title}</h3>
        <div className="cardsInfos">{props.artist}</div>
        <p className="cardsGenre">{props.genre}</p>
        <p className="cardsAnnee">{props.annee}</p>
        <p className="cardsPrix">{props.prix}</p>
        <p className="cardsQuantite">{props.quantite}</p>
        <p className="cardsdescription">{props.children}</p>
        <div className="cardsBtn">{
          <BuyBtn quantite={props.quantite}/>
        }
        </div>
</div>
}


export default Cards;