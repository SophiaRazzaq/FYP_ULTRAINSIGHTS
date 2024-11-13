import { NAV } from "@/constants";
import { Group, NavLink, Stack } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <Group align="center">
      <Stack w="100%" gap="0">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            component={Link}
            className="rounded-lg"
            label={item.name}
            href={item.to}
          />
        ))}
      </Stack>
    </Group>
  );
};

export default Navbar;
