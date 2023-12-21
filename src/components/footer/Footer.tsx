import SocialMediaIcons from "../social-media-icons";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <p className={styles.container}>Copyright © Stefan Decimelli</p>
            <SocialMediaIcons />
        </>
    )
}
