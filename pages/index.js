import Link from 'next/link';
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
                <h1>Ngoding itu Menyenangkan ☺</h1>

                <p>Coba bayangin deh, dimulai dari baris demi baris kode yang nantinya kamu lakuin, kamu bisa bikin apapun yang kamu mau</p>

                <button>Kuy Mabar</button>
            </div>
        )
    }
}

export default Index;