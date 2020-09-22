import React from 'react';
import Main from "./components/Main/Main";
import './css/reset.css'
import './App.css'
import { Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/resux-store";


class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <Main/>
            </div>
        );
    }
}

let MainApp=()=>{
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}
export default MainApp
