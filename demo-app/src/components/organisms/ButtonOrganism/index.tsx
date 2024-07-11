import React from "react";
import ButtonComp from "../../atoms/Button";

interface ButtonOrganismProps {
  // onClick:()=> void;
  email: string;
  password: string;
}
const ButtonOrganism: React.FC<ButtonOrganismProps> = (props) => {
  const handleClick = () => {
    alert(`Email is:${props.email}\n Password is:${props.password}`);
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
