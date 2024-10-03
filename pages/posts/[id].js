import Layout from "@/components/Layout";
import { getAllPostsIds, getPostData } from "../../lib/post";
import UtilStyle from "../../styles/utils.module.css";
import Head from "next/head";
export async function getStaticPaths() {
    //ブログ投稿データのファイル名(id)を取得。
    const paths = getAllPostsIds();
  
    return {
      paths, //どのパスが事前にレンダリングされるのか決める。
      fallback: false, //あとで説明。(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
    };
  }

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return{
        props:{
            postData,
        },
    };
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head><title>{postData.title}</title></Head>
            <article>
                <h1 className={UtilStyle.headingX1}>{postData.title}</h1>
                <div className={UtilStyle.lightText}>{postData.date}</div>
                
                <br/>
                <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
            </article>
        </Layout>
    );
}