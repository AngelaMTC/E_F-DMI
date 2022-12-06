import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import StyledButton from "../../components/Button";
import Container from "../../components/Container";
import StyledTextInput from "../../components/TextInput";
import Title from "../../components/Title";

export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleLogin = () => {
    if (email === "Mangel" && password === "123") {
      setHasError(false);
      return login();
    }

    setHasError(true);
  };

  return (
    <Container>
      <Title bold={true}>Click the button to login</Title>
      <StyledTextInput
        mt={20}
        mb={5}
        placeholder="User"
        onChangeText={(e) => setEmail(e)}
        value={email}
      />
      <StyledTextInput
        placeholder="password"
        onChangeText={(e) => setPassword(e)}
        value={password}
        secureTextEntry={true}
      />
      <StyledButton onPress={handleLogin}>
        <Title color="white" bold={true}>
          Login
        </Title>
      </StyledButton>
      {hasError && (
        <Title color="red" size={12} bold={true}>
          Error: Invalid credentials
        </Title>
      )}

      <StatusBar style="auto" />
    </Container>
  );
}
