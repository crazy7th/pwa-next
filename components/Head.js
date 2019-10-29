import NextHead from "next/head";

const defaultOGURL = "https://www.sepulsa.com";
const defaultTitle = "PWA - Default Title Website";
const defaultDesc = "Ini meta description default ketika pages tidak memberikan deskripsi khusus";

const Head = props => (
    <NextHead>
        <meta charset="UTF-8" />
        <title>{props.title || defaultTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content={props.keywords || ""}/>
        <meta name="description" content={props.description || defaultDesc}/>
        <meta name="author" content="Ekky Patria" />

        <meta property="og:title" content={props.title || defaultTitle} />
        <meta property="og:url" content={props.url || defaultOGURL} />

        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/icon-192x192.png" />
    </NextHead>
);
  
export default Head;