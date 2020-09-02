import React, { Fragment, useState, useEffect } from 'react';
import Square from './Square'

const Board = (prop) => {

    const [status, setStatus] = useState('');

    const linesWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const [state, setState] = useState({
        squares: Array(9).fill(null),
        xIsNext: true,
        count: 0
    });

    const renderSquare = (i) => {
        return <Square value={state.squares[i]}
            onClick={() => handleClick(i)} />
    }

    const handleClick = (i) => {
        let s = state.squares.slice();
        if (calculateWinner(s) || s[i]) {
            return;
        }
        s[i] = state.xIsNext ? 'X' : 'O';
        setState({ squares: s, xIsNext: !state.xIsNext, count: state.count + 1 });
    }

    // calcula la cantidad de lineas donde el usuario puede ganar
    const findPossibilitiesUserWin = (s) => {
        let lines = linesWin;
        let countFPW = 0;
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            let x = lines[i].filter(x => s[x] === 'X');
            // si una linea tiene dos X y el lugar que sobra es null, esa hay que bloquear
            if (x.length === 2 && (!s[a] || !s[b] || !s[c]))
                countFPW++;
        }
        return countFPW;
    }

    // busca una linea libre para que la maquina determine su juego
    const findFreeLine = (s) => {
        let lines = linesWin;
        let index = null; // casilla a marcar
        for (let i = 0; i < lines.length; i++) {
            let x = lines[i].filter(c => s[c] === 'X');
            let o = lines[i].filter(c => s[c] === 'O');
            if (x.length === 0 && o.length > 0) {
                index = lines[i].filter(x => s[x] === null); // retorna el primer indice de una casilla libre
                handleGameAI(s, index[0]);
                return true; // retorna true si la maquina pudo encontrar una linea libre 
            }
        }
        return false; //// retorna false si no pudo encontrar una linea libre 
    }

    // define el movimiento siguiente
    const handleClickIA = () => {
        let s = state.squares.slice();

        // para que la maquina no comiece el juego
        if (state.count === 0 || calculateWinner(s)) {
            return;
        }

        // el primer movimiento de la maquina es Random
        if (state.count === 1) {
            movementRandom(s);
        }
        // cuando el usuario ya movió 2 veces determina si bloquea linea del usuario o busca una para ganar
        else {
            let fpw = findPossibilitiesUserWin(s);
            switch (fpw) {

                // si el usuario no puede ganar, la maquina busca una linea libre con posibilidad de ganar
                // sino mueve de forma aleatoria
                case 0:
                    let flag0 = findFreeLine(s);
                    if (!flag0) movementRandom(s);
                    break;

                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    let bandera = searchWin(s);
                    if (!bandera) findNextMovementUSer(s);
                    break;

                default: break;
            }
        }
    }

    // busca cual seria el proximo movimiento del usuario para bloquearlo
    const findNextMovementUSer = (s) => {
        let lines = linesWin;
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            let x = lines[i].filter(x => s[x] === 'X');
            //let o = lines[i].filter(x => s[x] === 'O');
            //si en esa linea la maquina tiene oportunidad de ganar que mueva 
            /*if (o.length == 2 && (!s[a] || !s[b] || !s[c])) {
                console.log('maq tiene oportunidad de ganar');
                searchWin(s);
                return;
            }*/
            //si no tiene posibilidad de ganar en esa linea entonces que bloquee al user
            //else 
            if (x.length === 2 && (!s[a] || !s[b] || !s[c])) {
                if (s[a] === 'X' && s[a] === s[b] && s[c] === null) {
                    handleGameAI(s, c);
                    return;
                } else if (s[a] === 'X' && s[b] === null && s[c] === s[a]) {
                    handleGameAI(s, b);
                    return;
                } else if (s[a] === null && s[b] === 'X' && s[c] === s[b]) {
                    handleGameAI(s, a);
                    return;
                }
            }
        }
    }
    // setea en la casilla correspondiente para evitar que el user gane
    // cuando el user esta por completar una linea 
    const handleGameAI = (s, i) => {
        setTimeout(() => {
            s[i] = 'O';
            setState({ squares: s, xIsNext: !state.xIsNext, count: state.count + 1 });
        }, 500)
    }

    // movimiento Random
    const movementRandom = (s) => {
        setTimeout(() => {
            let i = Math.round(Math.random() * (8 - 0) + parseInt(0));
            if (s[i]) { // si la casilla ya esta ocupada, que busque otro Random
                movementRandom(s);
                return;
            } else {
                s[i] = 'O';
                setState({ squares: s, xIsNext: !state.xIsNext, count: state.count + 1 });
            }
        }, 500)
    }

    // buscara ganar
    const searchWin = (s) => {
        let lines = linesWin;
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            let x = lines[i].filter(x => s[x] === 'O');
            if (x.length === 2) {
                if (s[a] === 'O' && s[a] === s[b] && s[c] === null) {
                    handleGameAI(s, c); // marca la casilla c
                    return true;
                } else if (s[a] === 'O' && s[b] === null && s[c] === s[a]) {
                    handleGameAI(s, b); // marca la casilla b
                    return true;
                } else if (s[a] === null && s[b] === 'O' && s[c] === s[b]) {
                    handleGameAI(s, a); // marca la casilla a
                    return true;
                }
            }
        }
        return false;
    }

    // verifica si existe un ganador
    // gana si el valor en squares[a], en squares[b] y en squares[c] es el mismo
    const calculateWinner = (squares) => {
        let lines = linesWin;
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    // reset states
    const reset = () => {
        setStatus('');
        setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            count: 0
        });
    }

    useEffect(() => {
        let winner = calculateWinner(state.squares);
        if (winner) {
            setStatus('Winner: ' + winner);
        }
        if (!state.xIsNext)
            handleClickIA();

    }, [state.squares]);
    return (
        <Fragment>
            <div >
                <h2>Tic Tac Toe</h2>
                <h5>User = X , IA = O</h5>
                <div className="row justify-content-center py-3">
                    <div className="col"></div>
                    <div className="col-md-5 board">
                        <div className="board-row">
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </div>
                        <div className="board-row">
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </div>
                        <div className="board-row">
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </div>
                        <div className="btn-reset">
                            <button type="button" class="btn btn-warning btn-sm"
                                onClick={reset}>Reset</button>
                        </div>
                    </div>
                    <div className="col"></div>

                </div>

                <h3 className="text-winner">{status}</h3>
            </div>
        </Fragment>
    )
}

export default Board;