// components/Button.js

const Button = ({ children, onClick }) => {
  return (
    <button
      className="border border-black bg-white text-black font-bold py-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
