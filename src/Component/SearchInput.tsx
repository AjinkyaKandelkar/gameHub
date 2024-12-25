import { FaSearch } from "react-icons/fa";
import { InputGroup } from "../components/ui/input-group";
import { Grid, GridItem, Input } from "@chakra-ui/react";

const SearchInput=()=>{
    return<>
   
    <InputGroup flex={"1"} startElement={<FaSearch />}>
        <Input  borderRadius={20} placeholder="Search Games"/>
    </InputGroup>
     
    </>
}
export default SearchInput;