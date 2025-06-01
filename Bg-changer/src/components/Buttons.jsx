const Button = ({ colorName, bgChanger }) => {
  const Colors = {
  Red: "bg-red-600",
  Green: "bg-green-600",
  Blue: "bg-blue-600",
  Yellow: "bg-yellow-500",
  Pink: "bg-pink-500",
  Purple: "bg-purple-600",
  Orange: "bg-orange-500",
  Slate: "bg-slate-700",
  Teal: "bg-teal-500",
};


  const bgColor = Colors[colorName] || "bg-white";

  return (
    <button
      onClick={() => bgChanger(bgColor)}
      className={`h-8 ${bgColor} w-20 rounded-xl flex justify-center items-center text-white font-medium`}
    >
      {colorName}
    </button>
  );
};

export default Button;
