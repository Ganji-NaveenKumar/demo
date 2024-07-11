import React from "react";
import ButtonComp from "../../atoms/Button";

interface ButtonOrganismProps {
  email: string;
  password: string;
}
const ButtonOrganism: React.FC<ButtonOrganismProps> = (email,password) => {
  const handleClick = () => {
    alert(`Email is:${email}\n Password is:${password}`);
  };
  return (
    <ButtonComp
      onClick={handleClick}
      style={{ width: "200px", borderRadius: "20px" }}
    >
      Sign In
    </ButtonComp>
  );
};
export default ButtonOrganism;
