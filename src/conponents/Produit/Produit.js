import Cards from "../Cards/Cards";
import { playlist } from "../../playlist"
import "./Produit.css";

function Produit(props) {
    return (
        <div className="achat">
            <h2>Vos produits :</h2>

            <div className="cardsContainer">
                {
                    playlist.map(function (value,key) {
                        return (
                            <Cards
                            key={key}
                             title={value.title}
                                artist={value.artist}
                                cover={value.cover}
                                genre={value.genre}
                                annee={value.annee}
                                prix={value.prix}
                                quantite={value.quantite}>
                                {value.description}</Cards>
                        )
                    })

                }
            </div>
            
        </div>)
}


export default Produit;