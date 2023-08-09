import AlbumList from "../AlbumList/AlbumList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './app.scss';


const App = () => {


    return (
        <div id="app">
            <Header />
            <AlbumList />
            <Footer />
        </div>
    );
};

export default App;
