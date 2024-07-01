
import s from './Header.module.css'
import './../../App.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={s.header}>
            <NavLink className = { navData => navData.isActive ? s.active : s.item }
                     to=''>All
            </NavLink>
            <NavLink className = { navData => navData.isActive ? s.active : s.item }
                     to='/powerwolf'>Powerwolf
            </NavLink>
            <NavLink className = { navData => navData.isActive ? s.active : s.item }
                     to='/serega_pirat'>Серёга пират
            </NavLink>
        </div>
    );
}

export default Header;