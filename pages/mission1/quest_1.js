import Link from 'next/link';

const Quest1 = () => (
    <div>
        <h1>1. Installasi</h1>

        <ul>
            <li>
                Pergi ke folder yang akan kamu gunakan (buat folder baru jika memang belum disiapkan)
            </li>
            <li>
                Buka "terminal" / console kamu, lalu lakukan langkah-langkah berikut:
                <pre>
                    <code>
                        npm init -y
                        <br/>npm install --save react react-dom next
                        <br/>mkdir pages
                    </code>
                </pre>
            </li>
        </ul>
        
        <p>
            <Link href="/home">
                <a>Kembali ke Home</a>
            </Link>
        </p>
    </div>
);
  
export default Quest1;