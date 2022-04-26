import { RightSide } from "./rightSide";
import { LeftSide } from "./leftSide";
import styles from "../../App.module.css";
import { useState } from "react";
import {IMCLevels} from "../../utils/imc";

export const Main = () => {
  const [toShow, setToShow] = useState<IMCLevels | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);



  const show = (level: IMCLevels) => {
    setToShow(level);
  }

  // const setHeightFn = (value: number) => {
  //   setHeight(value);
  // }
  // const setWeightFn = (value: number) => {
  //   setWeight(value);
  // }

  const notShow = () => {
    setToShow(null);
    setHeight(0); 
    setWeight(0); 
  }



  return (
    <div className={styles.container}>
      <LeftSide fn={setToShow} setHeight={setHeight} setWeight={setWeight}  
      weight={weight}
      height={height}
      toShow={toShow}
      />
      <RightSide level={toShow} fn={notShow}/>
    </div>
  );
}