import { Header as MantineHeader } from "@mantine/core";
import { Image, Text } from "@mantine/core";

export const Header = () => {
  return (
    <MantineHeader
      height={50}
      p="xs"
      display="flex"
      sx={{ gap: ".5em", alignItems: "center", img: { borderRadius: "5px" } }}
    >
      <Image src="/logo.png" width={30} height={30} alt="Streamix home" />
      <Text color="white">Streamix Panel</Text>
    </MantineHeader>
  );
};
