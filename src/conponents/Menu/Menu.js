
import MenuBtn from "../MenuBtn/MenuBtn";
import "./Menu.css";


function Menu(props) {  {/* props.title = InnerText (prend tout comme du texte) props.children = InnerHTML ( interprete les balises ex:<div>) */}
    return (
        <nav>
            <ul>
                <li><i className="fa-solid fa-house"/><MenuBtn title="">HOME</MenuBtn></li>
                <li><i className="fa-solid fa-compact-disc"/><MenuBtn title="">Vinyle</MenuBtn></li>
                <li onClick={props.action}><i className="fa-solid fa-cart-shopping"/><MenuBtn title="">Cart</MenuBtn></li>
            </ul>
        </nav>
    );
}



export default Menu;




