import { AppShell } from "@mantine/core";
import { Navbar, Header } from "@/components";

const Home = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};

export default Home;
