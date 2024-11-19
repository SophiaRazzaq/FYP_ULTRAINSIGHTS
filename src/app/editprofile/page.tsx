"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import {
  Container,
  Card,
  TextInput,
  PasswordInput,
  Button,
  Center,
  Stack,
  Avatar,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const EditProfile: React.FC<{
  onProfileUpdate: (name: string, image: string | null) => void;
}> = ({ onProfileUpdate }) => {
  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {}, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onProfileUpdate) {
      onProfileUpdate(name, profileImage);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
        onProfileUpdate(name, reader.result as string); // Update the navbar with new image
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
    <Container size={400} mt={100} style={formStyles.container}>
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
              if (overlay) overlay.style.opacity = "0";
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
          <Title order={2}>Edit Profile</Title>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Name"
              value={name}
              placeholder="Change your name"
              onChange={(e) => setName(e.currentTarget.value)}
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
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              styles={{
                input: {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  border: "none",
                },
              }}
            />
            <PasswordInput
              label="Password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              styles={{
                input: {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  border: "none",
                },
              }}
            />
          </Stack>
          <Button
            type="submit"
            fullWidth
            mt="lg"
            style={{ backgroundColor: "#000", color: "#fff" }}
          >
            Submit Changes
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default EditProfile;
