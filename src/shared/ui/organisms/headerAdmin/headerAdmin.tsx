import React from 'react';
import Logo from "../../atoms/logo/logo";
import '../header/header.css'
import './headerAdmin.css'
import {Link} from "react-router-dom";

interface HeaderProps{
    position?:string;
    background?: string;
}

function HeaderAdmin({position, background}:HeaderProps) {
  return (
      <header className={`container header--admin ${position || ''}`} style={{backgroundColor:background || 'transparent'}}>
          <div className="row header-row-position justify-content-between">
              <div className="col-2 col-lg-10 d-flex align-items-center">
                      <Logo src={'/images/logo.svg'} alt={'logo'}/>
              </div>
              <div className="col-1 col-sm-2 d-flex align-items-center">
                  <div className={'header__link--admin'}>
                      <Link to={'/'}>Back to site</Link>
                  </div>
              </div>
          </div>
      </header>
  );
}

export default HeaderAdmin;
