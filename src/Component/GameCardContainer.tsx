import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: props) => {
  return (
    <>
      <Box width="300px" maxW={"sm"} overflow={"hidden"}>
        {children}
      </Box>
    </>
  );
};
export default GameCardContainer;
