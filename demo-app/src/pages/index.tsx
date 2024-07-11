import React  from "react";
import Homepage from '../components/template/HomePageTemplate';
import LoginForm from "../components/molecules/Loginform";

const HomepageComp:React.FC=()=>{
    return(
        <div>
             <Homepage LoginForm={<LoginForm/>}></Homepage>
        </div>
   
    );
}
export  default HomepageComp;