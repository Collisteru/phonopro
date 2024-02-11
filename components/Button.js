// components/Button.js

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`min-h-[80px] border border-black bg-white text-black font-bold py-2 px-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
