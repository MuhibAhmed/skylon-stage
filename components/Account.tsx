import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import {useRouter} from "next/router";


type AccountProps =
    {
        user:any,
    }
const Account = (props: AccountProps) => {
    return (
        <div className="form-widget">
            <h1>{props.user?.full_name}</h1>
            <h1>{props.user?.username}</h1>
            <button
                className="button block"
                onClick={() => supabase.auth.signOut()}
            >
                Sign Out
            </button>
        </div>


    )
}

export default Account