import React from "react";
import { useState } from "react";
import TypographyComp from "../../atoms/Typograph";
import TextFieldComp from "../../atoms/InputField";
import ButtonOrganism from "../../organisms/ButtonOrganism";
import { Stack } from "@mui/material";
import "./index.css";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="loginform">
      <Stack mb={5} spacing={3}>
        <div>
          <TypographyComp variant="h4" style={{ fontWeight: 800 }}>
            Welcome Back
          </TypographyComp>
          <TypographyComp variant="body1" style={{ fontSize: 100 }}>
            Enter your details below
          </TypographyComp>
        </div>
        <Stack spacing={2}>
          <div>
            <TextFieldComp
              label="Email Address"
              type="email"
              onChanges={(e) => setEmail(e.target.value)}
            ></TextFieldComp>
          </div>
          <div>
            <TextFieldComp
              label="password"
              type="password"
              onChanges={(e) => setPassword(e.target.value)}
            ></TextFieldComp>
          </div>
          <div>
            <ButtonOrganism email={email} password={password}></ButtonOrganism>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
export default LoginForm;
