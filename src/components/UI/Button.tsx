import React from "react";

const Button = ({
  btnText,
  btnType,
}: {
  btnText: React.ReactNode;
  btnType: any;
}) => {
  return <button className={`btn rounded-full ${btnType}`}>{btnText}</button>;
};

export default Button;
