import {NextPage} from "next";
import Account from "../../components/Account";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {supabase} from "../../utils/supabase";


type AccountPageProps = {
    session: any
}
export const AccountPage: NextPage<AccountPageProps> = (props: AccountPageProps) => {

    const session = props.session;
    const router = useRouter();
    const [loggedInUser, setLoggedInUser] = useState<any>(null);
    useEffect(() => {
        if (!session) router.push("/")
        else {
            const session_user = session?.user
            extractLoggedInUser(session_user).then((user => setLoggedInUser(user)))
        }
    }, []);


    async function extractLoggedInUser(session_user: any) {
        const {data, error} = await supabase
            .from('profiles')
            .select('username, full_name')
            .eq('id', session_user.id)
        return data?.at(0);
    }

    return (

        <div>
            {session && <Account user={loggedInUser}/>}
        </div>
    );
};

export default AccountPage