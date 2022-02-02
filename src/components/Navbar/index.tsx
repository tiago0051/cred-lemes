import Image from "next/image";
import styles from "./styles.module.scss";

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <div><Image src="/images/logo-colorida.webp" alt="Logo Cred Lemes" width={500} height={168} layout="responsive"/></div>
        </nav>
    )
}