import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Home from "../pages";
import About from "../pages/about";
import Events from "../pages/events";
import Artwork from "../pages/artwork";
import Fractals from "../pages/fractals";
import Music from "../pages/music";
import MusicScores from "../pages/musicscores";
import MusicRecordings from "../pages/musicrecordings";
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
                {/* <div class="jumbotron" className="m-4 bg-secondary p-lg-5">A VERY BIG JUMBOTRON</div> */}
                <Switch>
                    <Route path='/' exact render={(props) => <Home name={"home"} title={'Home page'}/>}/>
                    <Route path='/about' render={(props) => <About name={"about"} title={'About page'}/>}/>
                    <Route path='/events' render={(props) => <Events name={"events"} title={'Events page'}/>}/>
                    <Route path='/artwork' render={(props) => <Artwork name={"artwork"} title={'Artwork page'}/>}/>
                    <Route path='/fractals' render={(props) => <Fractals name={"fractals"} title={'Fractals page'}/>}/>
                    <Route path='/music' render={(props) => <Music name={"music"} title={'Music page'}/>}/>
                    <Route path='/music_scores' render={(props) => <MusicScores name={"music_scores"} title={'Music scores'}/>}/>
                    <Route path='/music_recordings' render={(props) => <MusicRecordings name={"music_recordings"} title={'Music recordings'}/>}/>
                    <Route path='/codez' render={(props) => <Codez name={"codez"} title={'Codez page'}/>}/>
                    <Route path='/blog' render={(props) => <Blog name={"blog"} title={'Blog page'}/>}/>
                    <Route path='/signin' render={(props) => <Signin name={"signin"} title={'Sign In'}/>}/>
                </Switch>
            </Router>
        )
}

export default MainNavigation;