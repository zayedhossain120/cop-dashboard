import React from "react";

const PageHeader = ({
  title,
  decription,
}: {
  title: React.ReactNode;
  decription: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-textColor">{title}</h3>
      {title && <p className=" font-bold text-customColor-50">{decription}</p>}
    </div>
  );
};

export default PageHeader;
