import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../components/ui/menu"
import { Button } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlatforms"


const PlatformSlector=()=>{
    const {data, error} =usePlatforms();
    if(error) return null;

    return<>
    <MenuRoot>
        <MenuTrigger asChild >
            <Button variant={"subtle"} size={"sm"} >
                Platforms
            </Button>
        </MenuTrigger>
        <MenuContent>
            {data.map((platform)=> 
                <MenuItem key={platform.id} value={platform.slug}> {platform.name} </MenuItem>
            )}
            
        </MenuContent>
    </MenuRoot>

    </>
}
export default PlatformSlector