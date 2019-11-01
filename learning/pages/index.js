import React from 'react';
import Link from 'next/link';

// buat nambahin link rel, title, meta, dll
import Head from 'next/head';

const index = () => {
    return (
        <div>
            <Head>
                <title>My Cool App</title>
                <link rel="manifest" href="/static/manifest.json" />
            </Head>
            <h1>Hello World</h1>
            <p>Ini splash screen pertama website kita</p>

            <div>
                <Link href="/home">
                    <button>MASUK PAK EKO</button>
                </Link>
            </div>
        </div>
    );
}

export default index;
