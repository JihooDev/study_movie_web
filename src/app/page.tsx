import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Movie from "./_components/Movie";

export default function Home() {
  return (
    <Flex
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      maxHeight={'100%'}
      overflow={'scroll'}
      sx={
        {
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      paddingY={10}
    >
      <Movie />
    </Flex>
  );
}


