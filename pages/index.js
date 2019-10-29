import Link from 'next/link';
import Head from '../components/Head';
//import Manifest from 'next-manifest/manifest'

import { register, unregister } from 'next-offline/runtime'

class Index extends React.Component {

    componentDidMount () {
        console.log('component mount');
        register();
    }
    
    componentWillUnmount () {
        console.log('component mount');
        unregister();
    }
    
    render() {
        return (
            <div>
                <Head
                    title="PWA - Nextjs & Netlify"
                    description="Halaman PWA ini dibuat dengan menggunakan Nextjs dan dideploy di Netlify"
                    keywords="PWA, Nextjs, Netlify"
                />

                <h1>Ngoding itu Menyenangkan ☺</h1>

                <p>Coba bayangin deh, dimulai dari baris demi baris kode yang nantinya kamu lakuin, kamu bisa bikin apapun yang kamu mau</p>

                <Link href="/home">
                    <button>Kuy Mabar</button>
                </Link>
            </div>
        )
    }
}

export default Index;