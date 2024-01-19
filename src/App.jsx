import { Fragment } from 'react'
import './App.css'
import MainPage from "../src/MainPage/MainPage";
import NavBar from "../src/components/NavBar/NavBar";
import Additional from "../src/components/Additional/Additional"
import FavList from "../src/components/FavList/FavList"
import Settings from "../src/components/Settings/Settings"
import ToDoList from "../src/components/ToDoList/ToDoList"

function App() {
    return (
        <Fragment>
                        <ToDoList/>
            <Settings/>
            <NavBar/>
            <MainPage/>
            <FavList/>
            <Additional/>
        </Fragment>
    )
}

export default App
