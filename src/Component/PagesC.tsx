import { HStack, SimpleGrid } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
import { useState } from "react";

interface prop {
  data:any;
  onSelectPage: (pgnum: number) => void;
}
const PagesC = ({onSelectPage, data}: prop) => {
  const [page, setPage] = useState(1);
   
  return (
    <>
      <SimpleGrid flex={1} justifyContent={"center"} padding={5}>
        <PaginationRoot
          count={data? data.count: 20}
          defaultPage={1}
          pageSize={2}
          page={page}
          onPageChange={(e) =>{onSelectPage(e.page); setPage(e.page)} } 
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </SimpleGrid>
    </>
  );
};
export default PagesC;
