import React, { useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w={"100%"}
        m={"30px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text
          fontFamily={"work sans"}
          textAlign={"center"}
          fontSize={"4xl"}
          color={"black"}
        >
          Digaí
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs variant="soft-rounded" isFitted colorScheme="green">
          <TabList>
            <Tab>Entrar</Tab>
            <Tab>Cadastrar-se</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
