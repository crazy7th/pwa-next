import Link from 'next/link';
import Head from 'next/head';
import Manifest from 'next-manifest/manifest'

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
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <Manifest
                        // path for manifest will be deploying
                        href='/static/manifest.json'
                        // color for `theme-color`
                        //themeColor='#F0F0F0'
                        // scale for `viewport` meta tag
                        //initialScale='1'
                    />
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