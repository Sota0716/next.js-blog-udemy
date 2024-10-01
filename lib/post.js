//postsディレクトリのmdファイルからデータ取得
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// postsディレクトリのパスを取得
//process.cwd()はカレントディレクトリを示す（nextjs-microblog）
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す。
export function getPostsData(){

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        
    const id = fileName.replace(/\.md$/,"");//ファイル名id
    
    //マークダウンファイルを文字列として取り出す
    const fullPath = path.join(postsDirectory, fileName); // 修正

    const fileContent = fs.readFileSync(fullPath,"utf8");

    //メタデータの分析
    const matterResult = matter(fileContent);

    return{
        id,
        ...matterResult.data,// ...はスプレット構文
    };
    });
    return allPostsData;
}

//getStaticPathのreturnで使うPathを取得する。
export function getAllPostsIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id:fileName.replace(/\.md$/,""),
            }
        }
    })
}

//idに基づいてブログ投稿データを返す
export async function getPostsData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath,"utf8");

    const matterResult = matter(fileContent);

    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return{
        id,
        blogContent,
        ...matterResult.data,
    }
}