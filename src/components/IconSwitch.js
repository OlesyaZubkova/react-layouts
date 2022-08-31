import React from "react";
import PropTypes from "prop-types";

function IconSwitch(props) {
    const {icon, onSwitch} = props;
    
    return (
    <div className='switch'>
        {
            <button
             className='button'
             onClick={(event) => onSwitch(event.currentTarget.firstChild.innerText)}
             >
             <span className="material-icons ">{icon}</span>
           </button>
         }
    </div>
    );
}

IconSwitch.propTypes = {
    onSwitch: PropTypes.func,
    icon: PropTypes.string
}

export default IconSwitch;