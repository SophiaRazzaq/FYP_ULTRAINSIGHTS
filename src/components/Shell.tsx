"use client";

import { NAV_HEIGHT } from "@/types/constants";
import { AppShell, Box, Burger, Button, Avatar, Switch } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const [darkTheme, setDarkTheme] = React.useState(true); // State for theme switcher
  const [profileName, setProfileName] = useState("User"); // State to hold profile name
  const [profileImage, setProfileImage] = useState<string | null>(null); // State to hold profile image

  const handleThemeToggle = () => {
    setDarkTheme((prev) => !prev);
  };

  // Callback function to handle profile updates
  const handleProfileUpdate = (name: string, image: string | null) => {
    setProfileName(name);
    setProfileImage(image);
  };

  return (
    <AppShell
      header={{ height: NAV_HEIGHT }}
      navbar={{
        width: 200,

        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      className="overflow-y-hidden"
    >
      <AppShell.Header className="flex justify-between items-center">
        <Box className="flex items-center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <p className="m-4">UltraInsights</p>
        </Box>
        {/* Right-side container for login button, profile circle, and theme switcher */}
        <Box className="flex items-center space-x-4">
          <Button variant="default">Login</Button>
          <Avatar radius="xl" src={profileImage || undefined} />{" "}
          {/* Updated Profile Circle */}
          <p>{profileName}</p> {/* Display the profile name */}
          <Switch checked={darkTheme} onChange={handleThemeToggle} />{" "}
          {/* Theme Switcher */}
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          backgroundColor: darkTheme ? "#492c3c" : "#333", // Background color changes based on theme
          color: darkTheme ? "white" : "#000", // Optional: change text color for better contrast
          backdropFilter: darkTheme ? "blur(10px)" : "none", // Optional: adjust blur for dark theme
        }}
      >
        {/* Passing the profile update callback function */}
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {React.cloneElement(children as React.ReactElement<any>, {
          onProfileUpdate: handleProfileUpdate,
        })}
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
