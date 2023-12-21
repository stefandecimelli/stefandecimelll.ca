import styles from "./Header.module.css";
import dp from "../../assets/Stefan.jpg"

const { banner, h1Container } = styles;

export default function Header() {
    return (
        <div className={banner}>
            <img src={dp} alt="stefan-image" width={300} height={300} />
            <div className={h1Container}>
                <h1>Stefan<br/>Decimelli</h1>
                <h2>Software<br/>Developer</h2>
            </div>
        </div>
    )
}
