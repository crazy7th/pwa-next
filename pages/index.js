import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Ngoding itu Menyenangkan ☺</h1>

        <p>Coba bayangin deh, dimulai dari baris demi baris kode yang nantinya kamu lakuin, kamu bisa bikin apapun yang kamu mau</p>

        <Link href="/home">
            <button>Kuy Mabar</button>
        </Link>
    </div>
);
  
export default Index;