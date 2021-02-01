import Link from 'next/link';

const Quest1 = () => (
    <div>
        <h1>2. Navigasi antar Page</h1>
        <p>Tiap pages, atau bisa dibilang komponen2 senjata harus bisa kita hubungkan.</p>
        <p>Salah satu cara buat ngehubungin tiap page adalah</p>

        <ul>
            <li>
                Untuk setiap pages yang ingin dihubungkan, tambahkan modul 
                <pre>import Link from 'next/link';</pre>
            </li>
            <li>
                Setelah itu, pada bagian yang akan dihubungkan (biasanya berupa tags button & a) panggil dengan cara 
                {/* <pre>
                    <code>
                        <Link href="/your_url">
                            <a>Hyperlink Kamu</a>
                        </Link>
                    </code>
                </pre>
                atau jika dalam bentuk button
                <pre>
                    <code>
                        <Link href="/your_url">
                            <button>Button Kamu</button>
                        </Link>
                    </code>
                </pre> */}
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