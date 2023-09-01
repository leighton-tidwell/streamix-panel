import { Header as MantineHeader } from "@mantine/core";
import { Image, Text } from "@mantine/core";

export const Header = () => {
  return (
    <MantineHeader
      height={50}
      p="xs"
      display="flex"
      sx={{
        gap: ".5em",
        alignItems: "center",
        img: { borderRadius: "5px" },
        borderBottom: "5px solid hsl(225, 7%, 10%)",
      }}
    >
      <Image src="/logo.png" width={30} height={30} alt="Streamix home" />
      <Text color="white" weight="bold" size="xl">
        Streamix Panel
      </Text>
    </MantineHeader>
  );
};
