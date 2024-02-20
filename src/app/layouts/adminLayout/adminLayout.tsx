import {Outlet} from "react-router-dom";
import Footer from "../../../shared/ui/organisms/footer/footer";
import MobileMenu from "../../../shared/ui/organisms/mobileMenu/mobileMenu";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../../../features/catalog/store";
import HeaderAdmin from "../../../shared/ui/organisms/headerAdmin/headerAdmin";


const AdminLayout = () => {
    return (
        <Provider store={store}>
            <div className={'header-wrapper'}>
                <HeaderAdmin/>
            </div>
            <div className={'content'}>
                <Outlet/>
            </div>
        </Provider>
    )

}

export default AdminLayout