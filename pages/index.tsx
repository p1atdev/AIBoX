import {
    Grid,
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Row,
    Checkbox,
    Container,
} from "@nextui-org/react";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { GitHub, Key, Mail, Search } from "react-feather";
import { AcmeLogo } from "../components/header/AcmeLogo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ["common"])),
    },
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { t } = useTranslation("common");
    return (
        <>
            <Header />
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    <div>
                        <Input
                            clearable
                            bordered
                            color="primary"
                            labelPlaceholder="Search"
                            type="search"
                            contentRight={<Search size="xs" />}
                        />
                    </div>
                </div>
                <div className={styles.center}>
                    <Text
                        h1
                        size={120}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        AIBoX
                    </Text>
                </div>
                <div className={styles.center}>
                    <Text h1 size={40} color="#C1C8CD">
                        {t("Home.forai")}
                    </Text>
                </div>
                <div>
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        {t("Home.slogan1")}
                    </Text>
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient:
                                "45deg, $purple600 -20%, $pink600 100%",
                        }}
                        weight="bold"
                    >
                        {t("Home.slogan2")}
                    </Text>
                    <Text
                        h1
                        size={50}
                        css={{
                            textGradient:
                                "45deg, $yellow600 -20%, $red600 100%",
                        }}
                        weight="bold"
                    >
                        {t("Home.slogan3")}
                    </Text>
                </div>
            </main>
            <Footer />
        </>
    );
}
