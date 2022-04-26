import styles from "../../App.module.css";
import { levels, IMCLevels } from "../../utils/imc";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";
import leftarrow from "../../assets/images/leftarrow.png";

interface props {
  level: IMCLevels | null;
  fn: () => void;
}


export const RightSide = ({level, fn}: props) => {
  return (
    <div className={styles.rightSide}>
      {
        !level && 
        levels.map((item, key) => (
        <div key={key} className={styles.square} style={{backgroundColor: item.color}}>
          <div className={styles.imageContainer}>   
            {item.icon == "up" ? <img src={up} width="30"/> : <img src={down} width="30"/>}
          </div>
          {item.title}
          <div className={styles.subtitle}>
            {`O IMC está entre ${item.imc[0]} e ${item.imc[1]}`}
          </div>
        </div>))
      }
      {
        level &&
        <div className={styles.choose} style={{backgroundColor: level?.color}}>


          <div className={styles.arrowContainer} onClick={fn}>

            <img src={leftarrow} width="30px"/>

          </div>

          <div className={styles.square} style={{width: "65%"}}>

            <div className={styles.imageContainer}>   

              {level?.icon == "up" ? <img src={up} width="30"/> : <img src={down} width="30"/>}

            </div>
            <div>

              {level?.title}

            </div>
            <div className={styles.yourIMC}>

              {`Seu IMC é de ${level?.yourIMC?.toFixed(2)} kg/m²`}

            </div>
            <div className={styles.subtitle}>

              {`O IMC está entre ${level?.imc[0]} e ${level?.imc[1]}`}

            </div>
          </div>
         
        </div>
      }
    </div>
    
  );
}