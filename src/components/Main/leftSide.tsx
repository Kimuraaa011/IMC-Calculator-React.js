import { useState } from "react";
import styles from "../../App.module.css";
import {IMCLevels, calculateIMC} from "../../utils/imc";

interface leftSide {
  fn: (level: IMCLevels) => void;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;
  height: number;
  weight: number;
  toShow: IMCLevels | null;

}


export const LeftSide = ({fn, setHeight, setWeight, height, weight, toShow}: leftSide) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleButtomClick = () => {
    if(!(height && weight)){
      alert("Digite todos os campos");
    }
    setDisabled(true);
    fn(calculateIMC(height, weight));
  }


 


  return (
    <div className={styles.leftSide}>
      <h1>Calcule o seu IMC</h1>
      <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Orgnaização Mundia de Saúde para calcular o peso ideal de cada pessoa</p>

      <input 
      type="number" 
      placeholder="Digite sua altura. Ex:. 1.5 (em métros)"
      value={height > 0 ? height : ""}
      onChange = {e => setHeight(e.target.valueAsNumber)}
      disabled={!!(toShow)}
      /> <br /> 

      <input 
      type="number"
      placeholder="Digite o seu peso. Ex:. 60.5 (em kg)"
      value={weight > 0 ? weight : ""}
      onChange={e => setWeight(e.target.valueAsNumber)}
      disabled={!!(toShow)}
      />

      <span><button onClick={handleButtomClick} disabled={!!(toShow)}>Calcular</button></span>
    </div>
  );
}