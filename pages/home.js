import Link from 'next/link';

const Home = () => (
    <div>
        <h1>Misi Pertama Kamu</h1>

        <p>Buat pemanasan, coba deh tunjukin kalau kamu bisa selesain beberapa misi pertama kamu di bawah ini:</p>
        <ol>
            <li>
                <p>
                    <Link href="/mission1/quest_1">
                        <a>Nyiapin amunisi</a>
                    </Link>
                    &nbsp; (Installasi Nextjs)
                </p>
            </li>
            <li>
                <p>
                    <Link href="/mission1/quest_2">
                        <a>Ngerakit senjata</a>
                    </Link>
                    &nbsp; (Navigasi antar Page)
                </p>
            </li>
        </ol>
    </div>
);
  
export default Home;