import "./Header.css"
import logo from "./logo.png"
export default function Header(){
    return(
        <header>
            <div>
            <img className="logo" src={logo} alt="logo"/>
            </div>
            <h1 >Сайтик для любимой кошечки, мяу</h1>
        </header>
    );

}