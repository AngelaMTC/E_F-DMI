import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import StyledButton from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { StyleSheet, Text } from "react-native";
export default function Main() {
  return (
    <Container>
    <Text>Main Menú</Text>
    <StatusBar style="auto" />
  </Container>
  );
}
