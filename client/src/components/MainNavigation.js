import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Home from "../pages";
import About from "../pages/about";
import Events from "../pages/events";
import Artwork from "../pages/artwork";
import Fractals from "../pages/fractals";
import Music from "../pages/music";
import MusicScores from "../pages/musicscores";
import MusicRecordings from "../pages/musicrecordings";
import RandomMusic from "../pages/random_music";
import Codez from "../pages/codez";
import Blog from "../pages/blog";
import Signin from "../pages/signin";

const MainNavigation = (props) => {

        const [authenticated, setAuthenticated] = useState(false)
        const appConfig = {isAuthenticated: authenticated}
        console.log("isAuthenticated is " + appConfig.isAuthenticated)
        return (
            <Router>
                {/*<CustomMDBNavbar applicationState={appConfig}/>*/}
                <CustomNavbar applicationState={appConfig}/>
                <Routes>
                    <Route path='/' exact element={<Home/>} title={'Home page'}/>
                    <Route path='/about' element={<About/>} show={true} name={"about"} title={'About page'}/>
                    <Route path='/events' element={<Events/>} name={"events"} title={'Events page'}/>
                    <Route path='/artwork' element={<Artwork/>} name={"artwork"} title={'Artwork page'}/>
                    <Route path='/fractals' element={<Fractals/>} name={"fractals"} title={'Fractals page'}/>
                    <Route path='/music' element={<Music/>} name={"music"} title={'Music page'}/>
                    <Route path='/music_scores' element={<MusicScores/>} name={"music_scores"} title={'Music scores'}/>
                    <Route path='/music_recordings' element={<MusicRecordings/>} name={"music_recordings"} title={'Music recordings'}/>
                    <Route path='/random_melody' element={<RandomMusic/>} name={"random_melody"} title={'random_melody'}/>
                    <Route path='/codez' element={<Codez/>} name={"codez"} title={'Codez page'}/>
                    <Route path='/blog' element={<Blog/>} name={"blog"} title={'Blog page'}/>
                    <Route path='/signin' element={<Signin/>} name={"signin"} title={'Sign In'}/>
                </Routes>
            </Router>
        )
}

export default MainNavigation;