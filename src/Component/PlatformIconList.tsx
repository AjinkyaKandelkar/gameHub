import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaNeos ,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiSega,SiCommodore, SiD3Dotjs  } from "react-icons/si";
import { SiNintendo } from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import { platform } from "../modules/Platform";
import { HStack } from "@chakra-ui/react";

interface props {
  platform: platform;
}

const PlatformIconList = ({ platform }: props) => {

  const iconMap: {[key:string]:any} = {
    pc:< FaWindows />,
    playstation:< FaPlaystation />,
    xbox:< FaXbox />,
    linux:< FaLinux />,
    mac:< FaApple />,
    android:< FaAndroid />,
    web:< BsGlobe />,
    nintendo:< SiNintendo />,
    ios:< MdPhoneIphone />,
    atari:<SiAtari/>,
    sega:<SiSega/>,
    d3o:<SiD3Dotjs/>,
    neo_geo:<FaNeos/>,
    commodore_amiga:<SiCommodore/>
  };
 
  return (
    <>
  
        <HStack>
            <span key={platform.id}> {iconMap[platform.slug]} </span> 
        </HStack>
    
    </>
  );
};
export default PlatformIconList;
