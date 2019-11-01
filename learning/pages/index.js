import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div>
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
