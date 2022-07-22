import React from "react";
import s from "./Header.module.css"

function Header(props) {

    return (
        <div className={s.header}>

            <span>{props.values.map(values => <div>{values}</div>)}</span>
        </div>
    )
}

export default Header;