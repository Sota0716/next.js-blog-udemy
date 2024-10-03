import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import UtilStyle from "../styles/utils.module.css";
import {getPostsData} from '../lib/post';

//SSG(静的生成)の場合
//getStaticPropsはnext標準関数(外部から一度だけデータを取ってくるとき使う関数)
export async function getStaticProps(){
  const allPostsData = getPostsData(); 
  console.log(allPostsData);
  return{
    props:{
      allPostsData,
    },
  };
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>  
      <section className={UtilStyle.headingMd}>
        <p> 私はバックエンドエンジニアです。好きな言語はPHPです。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) =>(
            <article key={id}>
            <Link href={`posts/${id}`}>
              <img className={styles.thumbnailImage} src={`${thumbnail}`}/>
            </Link>
            <Link href={`posts/${id}`} className={UtilStyle.boldText}>
              {title}
            </Link>
            <br/>
            <small className={UtilStyle.lightText}>{date}</small>
            </article>
          ) )}
          
        </div>
      </section>
      
    </Layout>
  );
}
