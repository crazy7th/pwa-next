import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>Ayo masuk ke halaman pertama aku <a href="home">disini yaa..</a></p>
            <div>
                <button>
                    <Link href="/home">
                        cek home
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default index;
