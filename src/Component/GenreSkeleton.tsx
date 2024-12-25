import { HStack, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../components/ui/skeleton";

const GenreSkeleton = () => {
  return (
    <>
      <Stack gap="6" maxW="xs" >
        <HStack width="full">
          <Skeleton boxSize="34px" borderRadius={8} />
          <SkeletonText noOfLines={1} />
        </HStack>
        <Skeleton />
      </Stack>
    </>
  );
};
export default GenreSkeleton;
