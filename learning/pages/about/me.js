import React from 'react';
import Link from 'next/link';

const me = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p>Kenalin, nama gue Ekky</p>

            <Link href="/home">
                <a>Kembali ke Home</a>
            </Link>
        </div>
    );
}

export default me;
