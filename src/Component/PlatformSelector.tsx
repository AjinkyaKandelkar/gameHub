import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { Box, Button } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../modules/Platform";

import PlatformIconList from "./PlatformIconList";


interface props {
  getSelectedPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}

const PlatformSlector = ({ getSelectedPlatform, selectedPlatform }: props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  
  
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"subtle"} size={"sm"}>
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem
            value="clear"
            color={"fg.error"}
            _hover={{ bg: "bg.error", color: "fg.error" }}
          >
            Clear
          </MenuItem>
          {data.map((platform) => (
            <MenuItem
              onClick={() => getSelectedPlatform(platform)}
              key={platform.id}
              value={platform.slug}
            >
              <PlatformIconList platform={platform}></PlatformIconList>
              <Box flex="1"> {platform.name} </Box>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};
export default PlatformSlector;
