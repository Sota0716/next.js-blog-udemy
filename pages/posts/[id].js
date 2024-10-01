import Layout from "@/components/Layout";
import { getAllPostsIds } from "../../lib/post";

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    
    return {
        paths,
        fallback:false,//falseは存在しないidの場合404を返す
    }
}

export function getStaticProps({params}){
    
}

export default function Post() {
    return (
        <Layout>
            動的ルーティング
        </Layout>
    );
}