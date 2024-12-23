import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import { platform } from "../modules/Platform";
import { HStack, Icon, JsxElement } from "@chakra-ui/react";

interface props {
  platforms: platform[];
}

const PlatformIconList = ({ platforms }: props) => {

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
  };
  
  return (
    <>
  
        <HStack>
         {platforms.map(platform=>
            <div className="" key={platform.id}> {iconMap[platform.slug]} </div> 
         )} 
        </HStack>
    
    </>
  );
};
export default PlatformIconList;
