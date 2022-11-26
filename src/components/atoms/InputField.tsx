import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/helper";

interface inputProps {
  placeholder: string;
  onChange: (id: string, value: string) => void;
  value: string;
  errorText: string;
  type: string;
  id: string;
}

const styledComponent = {
  Container: styled.div`
    position: relative;
    padding: 0px 16px 16px 16px;
    border-bottom: 1px solid ${colors.greyishBlue};

    & input,
    span {
      font-size: 13px;
    }
  `,
  Input: styled.input`
    width: 100%;
  `,
  ErrorText: styled.span`
    text-align: right;
    position: absolute;
    top: 3px;
    font-weight: 300;
    font-size: 13px;
    right: 0;
    color: ${colors.red};
  `,
};

const InputField: React.FC<inputProps> = ({
  onChange,
  value,
  placeholder,
  errorText,
  type,
  id,
}): JSX.Element => {
  const { Container, Input, ErrorText } = styledComponent;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.currentTarget.value);
  };

  return (
    <Container
      className='input-field'
      style={{ borderBottomColor: errorText ? colors.red : colors.greyishBlue }}
    >
      <Input
        className='styled-input'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default InputField;
