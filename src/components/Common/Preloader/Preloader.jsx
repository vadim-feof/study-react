import React from 'react'
import preloader from '../../../assets/gif/preloader.gif'

const Preloader = (props) => {
    return (
        <div className={props.styles}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader;