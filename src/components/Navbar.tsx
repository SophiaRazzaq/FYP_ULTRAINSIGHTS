import { Group, NavLink, Stack } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <Group
      align="center"
      style={{ width: "200px", padding: "1rem" }} // Reduce the width of the sidebar to 200px
    >
      <Stack spacing="xs">
        {/* Add NavLinks or other navigation items here */}
        <NavLink label="Home" component={Link} href="/" />
        <NavLink label="About" component={Link} href="/about" />
        <NavLink label="Contact" component={Link} href="/contact" />
        <NavLink label="Appointment" component={Link} href="/appointment" />
        <NavLink label="Analysis" component={Link} href="/analysis" />
      </Stack>
    </Group>
  );
};

export default Navbar;
