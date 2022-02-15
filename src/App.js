import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

/* http://preview.themeforest.net/item/buddy-multipurpose-wordpressbuddypress-theme/full_screen_preview/3506362?_ga=2.214380447.908696352.1643398348-404296411.1634847135
*/

// TODO: sort message by user (right my message, left user`s message)
// TODO: state management for dialogs
//
function App(props) {
    debugger
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Sidebar state={props.state.sidebar}/>
                <div className="App-content">
                    <Routes>
                        <Route path='/profile' element={<Profile
                            postPage={props.state.postPage}
                            dispatch={props.dispatch}/>}
                        />
                        <Route path='/dialogs/*' element={<Dialogs
                            state={props.state.dialogsPage}/>}
                        />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
