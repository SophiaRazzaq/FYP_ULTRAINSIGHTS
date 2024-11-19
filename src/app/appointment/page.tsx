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

// Appointment Page Component
const Appointment: React.FC = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      date: "",
      time: "",
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
            Book an Appointment
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
            <TextInput
              label="Preferred Date"
              placeholder="Select your preferred date"
              {...form.getInputProps("date")}
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
              label="Preferred Time"
              placeholder="Select your preferred time"
              {...form.getInputProps("time")}
              required
              styles={{
                input: {
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
              Book Appointment
            </Button>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default Appointment;
