import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface props{
    onSearch:(searchText:string)=>void;
  }

const Navbar=({onSearch}:props)=>{
    return(<>
    <HStack  padding={'10px'}>
        <Image src={logo} boxSize={16}></Image>
        <SearchInput onSearch={onSearch}></SearchInput> 
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
    </>)
}
export default Navbar;