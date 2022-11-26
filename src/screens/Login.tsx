import React, { useState } from "react";
import styled from "styled-components";
import { colors, validateEmail } from "../constants/helper";

//hooks
import { useNavigate } from "react-router-dom";

//components
import InputField from "../components/atoms/InputField";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";

interface formValueConfig {
  email: string;
  password: string;
  repeatPassword: string;
  [propName: string]: any;
}

const Header = styled.div`
  text-align: center;
  margin-top: 78px;
  margin-bottom: 83px;
`;
const LoginCard = styled.div`
  max-width: 400px;
  background-color: ${colors.semiDarkBlue};
  padding: 32px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 20px;

  & .input-field {
    margin-bottom: 24px;
  }

  & .button {
    margin-bottom: 24px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  letter-spacing: -0.5px;
  line-height: 40px;
  color: ${colors.white};
  font-weight: 300;
  margin-bottom: 40px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${colors.white};
  font-weight: 300;

  & span {
    color: ${colors.red};
    margin-left: 8px;
    cursor: pointer;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);
  const [formValue, setFormValue] = useState<formValueConfig>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [inputError, setInputError] = useState<formValueConfig>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onChangeHandler = (id: string, value: string) => {
    setInputError({ ...inputError, [id]: "" });
    setFormValue({ ...formValue, [id]: value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = false;

    let errorMessage = { ...inputError };

    for (const property in formValue) {
      if (!formValue[property]) {
        errorMessage[property] = "Can't be empty";
      } else if (
        property === "repeatPassword" ||
        (property === "password" &&
          !isLogin &&
          formValue.repeatPassword !== formValue.password)
      ) {
        errorMessage[property] = "Password must be the same";
      } else if (property === "email" && !validateEmail(formValue.email)) {
        errorMessage[property] = "Invalid email";
      } else {
        errorMessage[property] = "";
        isValid = true;
      }
    }

    setInputError(errorMessage);

    if (isValid) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} noValidate>
      <Header>
        <Icon icon='logo' size={32} color={colors.red} />
      </Header>
      <LoginCard>
        <Title>{isLogin ? "Login" : "Sign Up"}</Title>
        <InputField
          id='email'
          type='email'
          placeholder='Email address'
          value={formValue.email}
          errorText={inputError.email}
          onChange={onChangeHandler}
        />
        <InputField
          id='password'
          type='password'
          placeholder='Password'
          value={formValue.password}
          errorText={inputError.password}
          onChange={onChangeHandler}
        />
        {isLogin || (
          <InputField
            id='repeatPassword'
            type='password'
            placeholder='Repeat password'
            value={formValue.repeatPassword}
            errorText={inputError.repeatPassword}
            onChange={onChangeHandler}
          />
        )}
        <Button type='submit'>
          {isLogin ? "Login to your account" : "Create an account"}
        </Button>
        <Text>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => {
              setLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </Text>
      </LoginCard>
    </form>
  );
};

export default Login;
