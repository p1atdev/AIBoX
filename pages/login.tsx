import {
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
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { Mail, Key, AlertTriangle } from "react-feather";
import Header from "@/components/Header";
import {Checks} from "@/hooks/check"
import { useAuth } from '@/hooks/supabase'


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ["common"])),
    },
});

export default function Login() {
    const { t } = useTranslation("common");
    const { signInWithGoogle, loginWithPassword } = useAuth()
    const { userdata, setUserdata } = Checks();
    return (
        <>
            <Header />
            <div>
                <Container
                    display="flex"
                    alignItems="center"
                    justify="center"
                    css={{ minHeight: "100vh" }}
                >
                    <Card css={{ mw: "420px", p: "20px" }} variant="bordered">
                        <Text
                            size={24}
                            weight="bold"
                            css={{
                                as: "center",
                                mb: "20px",
                            }}
                        >
                            {t("Login.login")}
                        </Text>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder={t("Login.email")}
                            contentLeft={<Mail />}
                            aria-labelledby="email"
                            type="email"
                            value={userdata.email}
                            onChange={(event) => setUserdata({...userdata, email: event.target.value})}
                        />
                        {userdata.email_status &&
                        <Text
                            color="error"
                            size={14}
                            css={{
                            display: "flex",
                                alignItems: "center"
                        }}
                            ><AlertTriangle style={
                                {
                                    marginRight: "5px"
                                }
                        }/>
                            {t("Check.wrongemail")}
                        </Text>}
                        <Spacer y={1} />
                        <Input.Password
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder={t("Login.password")}
                            contentLeft={<Key />}
                            css={{ mb: "6px" }}
                            aria-labelledby="password"
                            type="password"
                            value = {userdata.password}
                            onChange={(event) => setUserdata({...userdata, password: event.target.value})}
                        />
                        <Row justify="space-between">
                            <Checkbox onChange={() => setUserdata({...userdata, login_remember: !userdata.login_remember})}>
                                <Text size={14}>{t("Login.remember")}</Text>
                            </Checkbox>
                            <Text size={14}>{t("Login.forgot")}</Text>
                        </Row>
                        <Spacer y={1} />
                        <Button onPress={() => loginWithPassword(userdata.email, userdata.password)} bordered color="gradient" auto>
                            {t("Login.login")}
                        </Button>
                        <Spacer y={1} />
                        <Button onPress={signInWithGoogle} bordered color="gradient" auto>
                            <Image
                                height="18"
                                width="18"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google icon"
                            />{" "}
                            <Spacer x={0.2} /> {t("Login.google")}
                        </Button>
                    </Card>
                </Container>
            </div>
        </>
    );
}
