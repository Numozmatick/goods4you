import React from 'react';
import './App.css'
import HomeLayout from "./app/layouts/homeLayout/homeLayout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/home/ui/homePage/homePage";
import { Provider } from 'react-redux';
import { store } from "./features/catalog/store";
import AdminPage from "./pages/admin/adminPage/adminPage";
import AdminLayout from "./app/layouts/adminLayout/adminLayout";
import OneProduct from "./pages/admin/oneProduct/oneProduct";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeLayout/>}>
                            <Route index element={<HomePage />} />
                        </Route>
                        <Route path="/admin" element={<AdminLayout/>}>
                            <Route index  element={<AdminPage />} />
                        </Route>
                        <Route path="/admin" element={<AdminLayout/>}>
                            <Route index  element={<AdminPage />} />
                            <Route path="product/:id" element={<OneProduct />} />
                            <Route path="product/:id/edit/:edit" element={<OneProduct />} />
                        </Route>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;