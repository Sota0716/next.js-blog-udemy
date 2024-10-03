import Head from "next/head";
import styles from "./Layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js Blog";

function Layout( {children,home} ) {
    return (
        <div className={styles.container}>
            <Head>
                <link ref="icon" href="favicon.ico"/>
            </Head>
            <header className={styles.header}>
                {home  ?  (
                    <>
                    <img src="/images/profile.png" className={utilsStyles.borderCircle}/>
                    <h1 className={`${utilsStyles.heading2Xl} ${styles.headerHomeImage}`}>{name}</h1>
                    </>
                ) : (
                    <>
                    <img src="/images/profile.png" className={utilsStyles.borderCircle}/>
                    <h1 className={`${utilsStyles.heading2Xl}`}>{name}</h1>
                    </>
                )}
                
            </header>
            <main>{children}</main>
            {!home &&(
                <div>
                    <Link href="/">← ホームへ</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;