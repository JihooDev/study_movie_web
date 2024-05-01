import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Movie from "../../../_components/Movie";
import styles from './home.module.css';
import Header from "@/app/_components/Header";
import Banner from "./_component/Banner";

function Home() {
    return (
        <div>
            <Banner />
        </div>
    );
}

export default Home;