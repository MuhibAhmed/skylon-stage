import {supabase} from "../utils/supabase";
import {useState} from "react";
import {redirect} from "next/navigation";
import {NextRouter} from "next/router";
import {any} from "prop-types";

export async function extractSession() {
    const {
        data: {session},
    } = await supabase.auth.getSession();
    return session;
}

export type FormValue =
    {
        fullName: string,
        email: string,
        password: string,
    }

export type Topic = {
    name: string,
    questions?: number,
    color: string,
}

export type Chat = {
    user: any,
    messages: any[]
}

const initialFormValues: FormValue = {
    fullName: "",
    email: "",
    password: "",

}

export const logInWithGoogle = async (router:NextRouter) =>
{
    console.log("Logging in")
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options:
            {
                redirectTo:`${process.env.NEXT_PUBLIC_SITE_URL}/home/dashboard`
            }
    });
}


export const hex2rgb = (hex: string, opacity: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // return {r, g, b}
    return `rgb(${r},${g},${b},${opacity})`;
}


export const useFormControls = () => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const [errors, setErrors] = useState({} as any);
    const validate: any = (field: any) => {
        let temp: any = {...errors}
        const [name, value] = Object.entries(field)[0]
        switch (name) {
            case "fullName":
                temp.fullName = value ? "" : "This field is required."
                break
            case "email" :
                validateEmail(value)
                break
            case "password":
                validatePassword(value)
                break
            default:
                break;

        }

        function validateEmail(email: any) {
            temp.email = email ? "" : "This field is required."
            if (email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
                    ? ""
                    : "Email is not valid."
        }

        function validatePassword(password: any) {
            if (password) {
                temp.password = password.length >= 6 ? "" : "Password needs to be at least 6 charaters long"
            } else {
                temp.password = "This field is required."
            }


        }

        setErrors({
            ...temp
        });
        // this function will check if the form values are valid
    }
    const handleInputValue = (e: any) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({[name]: value});
    };
    const formIsValid = () => {
        console.log(values)
        console.log(Object.values(values).some(v => v !== undefined && v != ''))
        return Object.values(values).some(v => v !== undefined && v != '') && Object.values(errors).every((x) => x === "");
    };
    return {
        handleInputValue,
        formIsValid,
        errors
    };
}




export async function getQuestionsPaths() {
    let paths : any[] = []
     await supabase.from('posts').select("id").then((result) => result.data?.forEach(e => paths.push({
        params: {
            id:e.id,
        }
    })))
    console.log(paths)
    return paths
}


export async function getQuestionDetails(questionId?: string): Promise<any[]> {
    const { data, error } =  await supabase.from('posts').select("*").eq('id', questionId)
    return data || []
}

export async function getComments(postId?: string): Promise<any[]> {
    const { data, error } =  await supabase.from('comments').select("*").eq('post_id', postId)
    console.log(data)
    if(!data) return []
    return data || []
}