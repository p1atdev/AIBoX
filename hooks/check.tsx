import { useState, useEffect } from "react";


export function Checks() {
    const [userdata, setUserdata] = useState({
        // value
        email: "",
        password: "",
        confirm_password: "",
        // status: okay -> true
        email_status: true,
        password_status: true,
        confirm_status: true,
    });

    const regex_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const CheckEmail = () => {
        if (userdata.email && !userdata.email.match(regex_email)) {
            setUserdata({ ...userdata, email_status: false });
        } else {
            setUserdata({ ...userdata, email_status: true });

        }
    };
    const CheckPassword = () => {
        // パスワードの規格をまた考える
        if (userdata.confirm_password && userdata.password && userdata.password !== userdata.confirm_password) {
            setUserdata({ ...userdata, confirm_status: false });
        } else {
            setUserdata({ ...userdata, confirm_status: true });
        }
    };

    useEffect(() => {
        CheckEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userdata.email]);

    useEffect(() => {
        CheckPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userdata.password, userdata.confirm_password]);

    return {
        userdata,
        setUserdata,
    };
}