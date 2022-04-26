export interface IMCLevels{
  title: string;
  color: string;
  icon: "up" | "down";
  imc: number[];
  yourIMC?: number;
}

export const levels: IMCLevels[] = [
  {title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5]},
  {title: "Normal", color: "#0EAD69", icon: "up", imc: [18.5, 24.9]},
  {title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [24.9, 30]},
  {title: "Obesidade", color: "#C3423F", icon: "down", imc: [30, 99]}
];

export const calculateIMC = (height: number, weight: number) => {
  const imc = weight / (height * height );
  const value = levels.filter(element => imc > element.imc[0] && imc <= element.imc[1])[0];
  value.yourIMC = imc;
  if(!value) throw new Error("Has not found this value");
  return value;
}