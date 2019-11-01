import React from 'react';
import Link from 'next/link';

const home = () => {
    return (
        <div>
            <h1>
                Homepage
            </h1>
            <p>
                Selamat datang, kali ini kita mau belajar nextjs
            </p>

            <p>Cek &nbsp;
                <Link href="/about/me">
                    <button>Profile Gue</button>
                </Link>
            </p>

            <Link href="/">
                <a>Kembali</a>
            </Link>
        </div>
    );
}

export default home;
