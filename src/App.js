import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

/* http://preview.themeforest.net/item/buddy-multipurpose-wordpressbuddypress-theme/full_screen_preview/3506362?_ga=2.214380447.908696352.1643398348-404296411.1634847135
*/
function App() {
    return (
        <div className='App'>
            <Header />
            <Sidebar />
            <Profile />           
        </div>
    );
}

export default App;
