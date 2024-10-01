//postsディレクトリのmdファイルからデータ取得
import path from "path";
import fs from "fs";
import matter from "gray-matter";

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
    const matterResult = matter(fileContent)

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
            prams: {
                id:fileName.replace(/\.md$/,""),
            }
        }
    })
}