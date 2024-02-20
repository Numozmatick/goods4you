import React from 'react';
import './App.css'
import Layout from "./app/layouts/layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/home/ui/homePage/homePage";
import { Provider } from 'react-redux';
import { store } from "./features/catalog/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<HomePage />} />
                            {/*<Route index element={<AdminPage />} />*/}
                        </Route>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;