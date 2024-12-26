import { FaSearch } from "react-icons/fa";
import { InputGroup } from "../components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface props{
  onSearch:(searchText:string)=>void;
}

const SearchInput = ({onSearch}:props) => {

  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup
          style={{ width: "100%" }}
          flex={1}
          startElement={<FaSearch />}
        >
          <Input
            name="search"
            ref={ref}
            borderRadius={20}
            placeholder="Search Games"
            variant={"subtle"}
          />
        </InputGroup>
      </form>
    </>
  );
};
export default SearchInput;
