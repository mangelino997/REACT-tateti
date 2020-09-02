import React, { Fragment, useState } from 'react';
import Board from './Board'

const Game = () => {

    return (
        <Fragment>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </Fragment>
    )
}

export default Game;