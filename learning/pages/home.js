import React from 'react';
import Link from 'next/link';

const home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <p>
                Hai teman-teman, ini sudah masuk di halaman pertama aku ^^
            </p>
            <p>
                cek <Link href="/about/me">profile</Link> aku yuk
            </p>
            <a href="/">Kembali</a>
        </div>
    );
}

export default home;
