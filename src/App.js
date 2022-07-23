import React from 'react';
import './App.css';
import AppContainer from './Components/AppContainer/AppContainer';
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore";


class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <AppContainer /> 
                
           </Provider>
        );
    }
}

export default App;
