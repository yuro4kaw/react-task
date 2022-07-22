import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HaderContainer';
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";

class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
            <HeaderContainer /> 
           </Provider>
        );
    }
}

export default App;
