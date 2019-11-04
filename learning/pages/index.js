import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const index = () => {
    return (
        <div>
            <Head>
                <title>My Cool</title>
                <link rel="manifest" href="/static/manifest.json" />>
            </Head>
            <h1>Hello World</h1>
            <Link href="/home"><buttonx>Masuk Homepage</buttonx></Link>
        </div>
    );
}

export default index;

