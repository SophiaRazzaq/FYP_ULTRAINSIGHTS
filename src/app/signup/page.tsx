"use client";

import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  TextInput,
  PasswordInput,
  Select,
  Button,
  Avatar,
  Center,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  role: string;
}

const SignupForm: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      role: "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const formStyles = {
    cardContainer: {
      width: 400,
      backgroundColor: "#492c3c",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    avatarContainer: {
      position: "relative",
      cursor: "pointer",
    } as React.CSSProperties,
    overlayText: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      opacity: 0,
      transition: "opacity 0.3s",
      borderRadius: "50%",
    } as React.CSSProperties,
    avatarWrapper: {
      position: "relative",
      display: "inline-block",
    } as React.CSSProperties,
  };

  return (
    <Container size="lg" mt={50} style={formStyles.container}>
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        withBorder
        style={formStyles.cardContainer}
      >
        <Center mb="md" style={formStyles.avatarWrapper}>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            style={formStyles.avatarContainer}
            onClick={handleAvatarClick}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".overlay-text",
              ) as HTMLElement;
              if (overlay) overlay.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".overlay-text",
              ) as HTMLElement;
              if (overlay) overlay.style.opacity = "0";
            }}
          >
            <Avatar size={80} radius={80} src={profileImage || undefined} />
            <div className="overlay-text" style={formStyles.overlayText}>
              Change Profile
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </Center>
        <Stack align="center" spacing="xs">
          <h2>Hello there!</h2>
        </Stack>
        <form>
          <TextInput
            {...form.getInputProps("username")}
            label="Username"
            placeholder="Enter your username"
            required
            mt="md"
          />
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Enter your email"
            required
            mt="md"
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Enter your password"
            required
            mt="md"
          />
          <PasswordInput
            {...form.getInputProps("confirmPassword")}
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            mt="md"
          />
          <Select
            {...form.getInputProps("role")}
            label="Role"
            placeholder="Select your role"
            data={[
              { value: "doctor", label: "Doctor" },
              { value: "patient", label: "Patient" },
            ]}
            required
            mt="md"
          />
          <Button type="submit" fullWidth mt="xl" color="#242424">
            Sign Up
          </Button>

          <Center mt="md">
            <p>
              Already have an account?{" "}
              <a
                href="/signin"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                Login
              </a>
            </p>
          </Center>

          <Center mt="md">
            <hr style={{ width: "100%", borderColor: "#ccc" }} />
          </Center>

          <Center mt="md">
            <p>Or continue with</p>
          </Center>
          <Center mt="xs">
            <Button variant="outline" mr="xs">
              Google
            </Button>
            <Button variant="outline" mr="xs">
              Apple
            </Button>
            <Button variant="outline">Facebook</Button>
          </Center>
        </form>
      </Card>
    </Container>
  );
};

export default SignupForm;
