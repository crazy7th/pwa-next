import React from 'react';
import Link from 'next/link';
import Head from "next/head";

const index = () => {
    return (
        <div>
            <Head>
                    <title>Jual Isi Pulsa Online Murah, All Operator</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Jual pulsa online murah all operator di Sepulsa, aktif 24 jam" />
                    <meta name="keywords" content="jual pulsa online, isi pulsa online, pulsa online murah" />
                    <meta name="author" content="Ekky Patria" />

                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="manifest" href="/static/manifest.json" />
                </Head>
            <h1>Hello World</h1>
            <p>ini splash screen</p>
            
            <div>
                <Link href="/home">
                    <button>Homepage</button>
                </Link>
            </div>
        </div>
    );
}

export default index;

