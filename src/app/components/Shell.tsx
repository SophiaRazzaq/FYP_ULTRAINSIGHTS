"use client";

import { NAV_HEIGHT } from "@/constants";
import { AppShell, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type React from "react";

const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: NAV_HEIGHT }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      className="overflow-y-hidden"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Box>
          <p className="m-4">UltraInsights</p>
        </Box>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Shell;
