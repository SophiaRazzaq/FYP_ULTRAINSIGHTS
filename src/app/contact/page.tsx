"use client";

import type React from "react";
import {
  Container,
  Card,
  TextInput,
  Textarea,
  Button,
  Center,
  Stack,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// Contact Page Component
const contact: React.FC = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form.values);
  };

  return (
    <Container
      size={600}
      mt={100}
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
            Contact Us
          </Title>
        </Center>
        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Name"
              placeholder="Enter your name"
              {...form.getInputProps("name")}
              required
              styles={{
                input: {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  border: "none",
                },
              }}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
              required
              styles={{
                input: {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  border: "none",
                },
              }}
            />
            <Textarea
              label="Message"
              placeholder="Enter your message"
              {...form.getInputProps("message")}
              required
              styles={{
                textarea: {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  border: "none",
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              mt="lg"
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              Send Message
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default contact;
