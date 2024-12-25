import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { Button } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../modules/Platform";

interface props {
  getSelectedPlatform: (platform: platform) => void;
  selectedPlatform:platform | null;
}

const PlatformSlector = ({ getSelectedPlatform, selectedPlatform }: props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant={"subtle"} size={"sm"}>
            {selectedPlatform?.name || 'Platforms'}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem
              onClick={() => getSelectedPlatform(platform)}
              key={platform.id}
              value={platform.slug}
            >
              {" "}
              {platform.name}{" "}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};
export default PlatformSlector;
