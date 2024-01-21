import { Fragment } from 'react'
import './App.css'
import MainPage from "../src/MainPage/MainPage";
import NavBar from "../src/components/NavBar/NavBar";
import Additional from "../src/components/Additional/Additional"
import FavList from "../src/components/FavList/FavList"
import Settings from "../src/components/Settings/Settings"
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Fragment>
            <Settings/>
            <NavBar/>
            <MainPage/>
            <FavList/>
            <Additional/>
            <Footer/>
        </Fragment>
    )
}

export default App
