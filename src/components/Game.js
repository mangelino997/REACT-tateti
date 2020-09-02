import React, { Fragment, useState } from 'react';
import Board from './Board'

const Game = () => {

    return (
        <Fragment>
            <div className="game">
                <div className="row justify-content-center p-3">
                    <Board />
                </div>
            </div>
        </Fragment>
    )
}

export default Game;