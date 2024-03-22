import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Movie from "./_components/Movie";

function Home() {
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


Home.getLayout = function getLayout(page: React.ReactNode) {
  return page; // 특정 레이아웃 사용
};

export default Home;