import {Outlet} from "react-router-dom";
import Header from "../../shared/ui/organisms/header/header";
import Footer from "../../shared/ui/organisms/footer/footer";
import MobileMenu from "../../shared/ui/organisms/mobileMenu/mobileMenu";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../features/catalog/store";


const Layout = () => {
    return (
        <Provider store={store}>
            <div className={'header-wrapper'}>
                <Header/>
            </div>
            <Outlet/>
            <Footer/>
            <MobileMenu/>
        </Provider>
    )

}

export default Layout