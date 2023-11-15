import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const DefPage = () => {
    return (
        <div className="bg-slate-700 h-screen overflow-y-auto flex flex-col justify-between">
            <nav>
                <Navbar />
            </nav>
            <main className="h-5/6 overflow-auto">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefPage;