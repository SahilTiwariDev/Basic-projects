import { useState } from "react";
import Button from "./components/Buttons";
function App() {
  const [bgColor, setBgColor] = useState("bg-cyan-950");

  const bgChanger = (newColor) => {
    setBgColor(newColor);
  };
  return (
    <div
      className={`w-full h-screen ${bgColor} flex justify-center items-end pb-20`}
    >
      <div className="bg-white w-3/4 h-12 rounded-2xl flex justify-between items-center px-10">
        <Button colorName="Red" bgChanger={bgChanger} />
        <Button colorName="Green" bgChanger={bgChanger} />
        <Button colorName="Blue" bgChanger={bgChanger} />
        <Button colorName="Yellow" bgChanger={bgChanger} />
        <Button colorName="Pink" bgChanger={bgChanger} />
        <Button colorName="Purple" bgChanger={bgChanger} />
        <Button colorName="Orange" bgChanger={bgChanger} />
        <Button colorName="Slate" bgChanger={bgChanger} />
        <Button colorName="Teal" bgChanger={bgChanger} />
      </div>
    </div>
  );
}

export default App;
