import logoImage from "../../assets/images/powered.png";
import styles from "../../App.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <img src={logoImage} alt="logo" width={150}/>
    </header>
  );

}