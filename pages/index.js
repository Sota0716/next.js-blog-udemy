import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import UtilStyle from "../styles/utils.module.css";

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

export default function Home() {
  return (
    <Layout>  
      <section className={UtilStyle.headingMd}>
        <p> 私はバックエンドエンジニアです。好きな言語はPHPです。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="images/thumbnail01.jpg"/>
            </Link>
            <Link href="/" className={UtilStyle.boldText}>
              SSGとSSRの使い分けの場面
            </Link>
            <br/>
            <small className={UtilStyle.lightText}>February 23, 2020</small>
            
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="images/thumbnail01.jpg"/>
            </Link>
            <Link href="/" className={UtilStyle.boldText}>
              SSGとSSRの使い分けの場面
            </Link>
            <br/>
            <small className={UtilStyle.lightText}>February 23, 2020</small>
            
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="images/thumbnail01.jpg"/>
            </Link>
            <Link href="/" className={UtilStyle.boldText}>
              SSGとSSRの使い分けの場面
            </Link>
            <br/>
            <small className={UtilStyle.lightText}>February 23, 2020</small>
            
          </article>
          <article>
            <Link href="/">
              <img className={styles.thumbnailImage} src="images/thumbnail01.jpg"/>
            </Link>
            <Link href="/" className={UtilStyle.boldText}>
              SSGとSSRの使い分けの場面
            </Link>
            <br/>
            <small className={UtilStyle.lightText}>February 23, 2020</small>
            
          </article>
        </div>
      </section>
      
    </Layout>
  );
}
