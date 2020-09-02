import React, { Fragment } from 'react';

const Square = (prop) => {
    return(
        <Fragment>
           <button className="square" 
           onClick={() => prop.onClick()}>
               {prop.value}</button>
        </Fragment>
    )
}

export default Square;