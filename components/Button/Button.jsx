import Styles from "./Button.module.scss"


export default function Button({title, kind}){
    const generationClassByKind = () => {
        if(kind === "secundary") return Styles.secundary
        return Styles.primary;
    }
    
    return(
        <button className={`${Styles.button} ${generationClassByKind()}`}>{title}</button>
    )
}