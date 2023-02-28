import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import HomeLayout from "../../components/home/forum/HomeLayout";
import React from "react";
import Forum from "../../components/home/forum/Forum";
import {supabase} from "../../utils/supabase";
import {Post} from "../../components/home/forum/PostBox";
import questionsList from "../../components/home/forum/PostsList";
import {log} from "util";
import {Topic} from "../../constants";

type ForumPageProps =
    {
        questionsList: Post[]
        topicsList: Topic[]
    }
const ForumPage: NextPage<ForumPageProps> = (props) => {



    console.log("Props ", props)
    return (
        <HomeLayout mainPage={<Forum questionsList={props.questionsList} topicsList={props.topicsList}/>}/>
    )
}
//
// export async funtction getServerSideProps: GetServerSideProps = async (context) => {
//
//

//     // Pass data to the page via props
//     return  { props: {} }
// };

export const getStaticProps: GetStaticProps<ForumPageProps> = async (context) => {
        console.log("Requestinq!!!")

    async function extractTopics() {
        let topics: Topic[] = [];
        const result = await supabase.from('topics').select('*')
        if (result.data) {
            topics = result.data.map((element) => ({
                name: element.name,
                color: element.color
            }))
        }
        console.log("Topics ", topics)
        return topics
    }

    // Fetch data from external API
    let postsList:Post[] = []
    await supabase
        .from('posts')
        .select().then((res) => {
            console.log(res)
            postsList = res.data as Post[]
        });
    let topicsList: Topic[] = []
    await extractTopics().then((topics) => {
        topicsList = topics as Topic[]
    })
    console.log(topicsList)
    return { props: { questionsList: postsList, topicsList } };
};


export default ForumPage