import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import StyledButton from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";

export default function Info() {
  const [isBold, setIsBold] = useState(false);
  return (
    <Container>
      
      <Title>Settings</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
