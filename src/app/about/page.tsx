"use client";

import type React from "react";
import { Container, Card, Center, Stack, Title, Text } from "@mantine/core";

const AboutUs: React.FC = () => {
  return (
    <Container
      size={600}
      mt={0}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#492c3c",
      }}
    >
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        withBorder
        style={{ width: 600, backgroundColor: "#492c3c" }}
      >
        <Center mb="md">
          <Title order={1} style={{ color: "#ffffff" }}>
            About Us
          </Title>
        </Center>
        <Stack spacing="md" align="center">
          <Text align="center" size="md" style={{ color: "#ffffff" }}>
            Welcome to UltraInsights! We are a passionate team dedicated to
            providing AI-based assistance for fetal anomaly detection using
            ultrasound images.
          </Text>
          <Text align="center" size="md" style={{ color: "#ffffff" }}>
            Our mission is to empower healthcare professionals and expecting
            parents with accurate and easy-to-use tools, leveraging advanced
            machine learning and medical imaging technology.
          </Text>
          <Text align="center" size="md" style={{ color: "#ffffff" }}>
            At UltraInsights, we strive to make a positive impact in prenatal
            care, ensuring early and reliable detection to support the health of
            both mothers and babies.
          </Text>
        </Stack>
      </Card>
    </Container>
  );
};

export default AboutUs;
