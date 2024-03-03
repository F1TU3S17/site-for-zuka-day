import Button from "../Button/Button"
import "./TabSection.css"
export default function TabSection({ active, onChange }){
    return(
        <section>
            <Button isActive={active==="main"} onClick={()=> onChange("main")}>
                Главная
            </Button>

            <Button isActive={active==="photo"} onClick={()=> onChange("photo")}>
                Фотокарточки
            </Button>

            <Button isActive={active==="luck"} onClick={()=> onChange("luck")}>
                Колесо удачи
            </Button>
        </section>  
    )
}