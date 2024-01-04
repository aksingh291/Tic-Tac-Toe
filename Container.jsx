import React from 'react'
import "./Container.css"

const Container = ({value, onClick}) =>{
    const res = value==='X' ? "container x" : "container o";
    return(
        <button className={res} onClick={onClick}>{value}</button>
    )
}
export default Container;