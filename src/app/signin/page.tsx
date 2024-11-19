"use client";

import type React from "react";
import {
  Container,
  Card,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Center,
  Stack,
  Avatar,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormValues {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Container
      size={400}
      mt={100}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        withBorder
        style={{ width: 400, backgroundColor: "#492c3f" }}
      >
        <Center mb="md">
          <Avatar size={80} radius={80} color="gray" />
        </Center>
        <form>
          <Stack spacing="md">
            <Group spacing="xs">
              <TextInput
                style={{ width: "100%" }}
                {...form.getInputProps("username")}
                placeholder="Username"
                required
                styles={{
                  input: {
                    backgroundColor: "#ffffff",
                    color: "#000",
                    border: "none",
                  },
                }}
              />
            </Group>
            <Group spacing="xs" mt={"xs"}>
              <PasswordInput
                style={{ width: "100%" }}
                {...form.getInputProps("password")}
                placeholder="Password"
                required
                styles={{
                  input: {
                    backgroundColor: "#ffffff",
                    color: "#000",
                    border: "none",
                    boxSizing: "revert-layer",
                  },
                }}
              />
            </Group>

            <Button
              type="submit"
              fullWidth
              mt="lg"
              style={{ backgroundColor: "#242424", color: "#fff" }}
            >
              LOGIN
            </Button>
            <Center mt="md">
              <hr style={{ width: "100%", borderColor: "#ccc" }} />
            </Center>
            <Center mt="xs">
              <p>
                Don't have an account?{" "}
                <a
                  href="/signup"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Signup
                </a>
              </p>
            </Center>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default SignIn;
