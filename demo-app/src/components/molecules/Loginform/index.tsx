import React from "react";
import { useState } from "react";
import TypographyComp from "../../atoms/Typograph";
import TextFieldComp from "../../atoms/InputField";
import styled from "styled-components";
import ButtonOrganism from "../../organisms/ButtonOrganism";
import { Stack } from "@mui/material";
const LoginFormContainer = styled.div`
  margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    text-align: center;
`;
const Title = styled(TypographyComp)`
  font-weight: 800;
`;
const Subtitle = styled(TypographyComp)`
  font-size: 16px;
`;
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <LoginFormContainer id="loginform">
      <Stack mb={5} spacing={3}>
        <div>
        <Title variant="h4">Welcome Back</Title>
        <Subtitle variant="body1">Enter your details below</Subtitle>
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
    </LoginFormContainer>
  );
};
export default LoginForm;
