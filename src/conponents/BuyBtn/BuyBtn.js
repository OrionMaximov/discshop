


function BuyBtn(props) {
    let desactive;
    let active;
    props.quantite === 0 ? desactive = true : desactive = false
    props.quantite === 0 ? active = "En rupture" : active = "Mettre au panier"
    return <button disabled={desactive} >
        <i className="fa-solid fa-cart-shopping"></i>
        {active}
    </button>;
}



export default BuyBtn;