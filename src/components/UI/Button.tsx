const Button = ({
  btnText,
  btnType,
  handleClick,
}: {
  btnText: React.ReactNode;
  btnType: any;
  handleClick?: () => void;
}) => {
  return (
    <button onClick={handleClick} className={`btn rounded-full ${btnType}`}>
      {btnText}
    </button>
  );
};

export default Button;
