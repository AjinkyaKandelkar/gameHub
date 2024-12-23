import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";

const LoadingGameCard = () => {
  return <>
    <Card.Root width="280px" maxW={"sm"} overflow={"hidden"}>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
            <SkeletonText></SkeletonText >
        </CardBody>
        <CardFooter></CardFooter>
    </Card.Root>
  </>;
};
export default LoadingGameCard;
