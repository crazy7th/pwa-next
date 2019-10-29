import Link from 'next/link';
import Head from 'next/head';
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
                <Head>
                    <title>Jual Isi Pulsa Online Murah, All Operator</title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Jual pulsa online murah all operator di Sepulsa, aktif 24 jam" />
                    <meta name="keywords" content="jual pulsa online, isi pulsa online, pulsa online murah" />
                    <meta name="author" content="Ekky Patria" />

                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="manifest" href="/static/manifest.json" />
                </Head>

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