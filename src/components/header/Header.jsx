import S from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={S["main-header"]}>
            <div className={'flex items-center'}>
                <img className={S["main-header-icon"]} src={'./icons/ajou-one-icon.png'} />
                <div className={S["main-header-box"]}>
                    <span className={S["main-header-title"]}>AjouONE</span>
                    <span>All notices for Ajou</span>
                </div>
            </div>
            <div className={'flex items-center'}>
                <img className={S["extra-icon"]} src={'./icons/ajou-sw-icon.png'} />
                <a href={'https://github.com/ajou-one'}>
                    <img className={S["extra-icon"]} src={'./icons/github.png'} />
                </a>
                <a href={'https://github.com/ajou-one/authors'}>
                    <img className={S["extra-icon"]} src={'./icons/info-icon.png'} />
                </a>
            </div>
        </header>
    )
};

export default Header;
