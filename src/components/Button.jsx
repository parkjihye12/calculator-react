const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={`w-10 h-10 border-b-2 border-r-2 border-black rounded-full flex justify-center items-center  ${
        name === "+"
          ? "bg-purple-200"
          : name === "-"
          ? "bg-purple-500"
          : name === "*"
          ? "bg-purple-600"
          : name === "/"
          ? "bg-purple-700"
          : name === "Enter" || name === "Del"
          ? "bg-gray-500 text-white"
          : "bg-gray-50 "
      }`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
