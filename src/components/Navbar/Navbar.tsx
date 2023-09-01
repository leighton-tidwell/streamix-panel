import { Navbar as MantineNavbar, NavLink, NavLinkProps } from "@mantine/core";

const StyledNavLink = (props: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      bg="hsl(225, 7%, 10%)"
      sx={{
        "&:hover": {
          color: "white",
        },
      }}
    />
  );
};

export const Navbar = () => {
  return (
    <MantineNavbar
      width={{ base: 300 }}
      p="xs"
      sx={{ gap: ".5em" }}
      withBorder={false}
    >
      <StyledNavLink label="Stream Dashboard" />
      <StyledNavLink label="Relays" />
      <StyledNavLink label="Recordings" />
      <StyledNavLink label="Access" />
    </MantineNavbar>
  );
};
