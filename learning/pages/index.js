import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div>
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

