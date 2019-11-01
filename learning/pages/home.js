import React from 'react';
import Link from 'next/link';

const home = () => {
    return (
        <div>
          <h1>Homepage</h1>
          <span>Profile saya <Link href="/profile/me">Profile saya</Link></span>
          <Link href="/">
          Back
            </Link> 
        </div>
    );
}

export default home;
<h1>Homepage</h1>