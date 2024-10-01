//postsディレクトリのmdファイルからデータ取得
import path from "path";
import fs from "fs";
import matter from "matter";

// postsディレクトリのパスを取得
//process.cwd()はカレントディレクトリを示す（nextjs-microblog）
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す。
export function getPostsData(){

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/,"");//ファイル名id
    
    //マークダウンファイルを文字列として取り出す
    const fullPath = path.join(postsDirectory.fileName);
    const fileContent = fs.readFileSync(fullPath,"utf8");

    //メタデータの分析
    const matterResult = matter(fileContent)

    return{
        id,
        ...matterResult,
    };
// ...はスプレット構文
    });
}