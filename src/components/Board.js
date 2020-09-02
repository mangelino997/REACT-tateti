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
        console.log(s);
        if (calculateWinner(s) || s[i]) {
            return;
        }
        s[i] = state.xIsNext ? 'X' : 'O';
        setState({ squares: s, xIsNext: !state.xIsNext, count: state.count + 1 });
    }

    const handleClickIA = () => {
        console.log(state.count);
        let s = state.squares.slice();
        let bandera = true;
        // para que no comience a jugar la maquina
        if (state.count === 0 || calculateWinner(s)) {
            return;
        }
        // que solo el primer movimiento sea aleatorio
        if (state.count === 1) {
            movementAleatorio(s);
            bandera = true;
        }
        // cuando el usuario ya jugo 2 veces
        else if (state.count > 1) {
            let lines = linesWin;
            for (let i = 0; i < lines.length; i++) {
                let [a, b, c] = lines[i];
                let x = lines[i].filter(x => s[x] === 'X');
                let o = lines[i].filter(x => s[x] === 'O');
                console.log(x);
                console.log(s[a], s[b], s[c]);
                //si la maquina tiene oportunidad de ganar que mueva 
                if (o.length == 2 && (!s[a]|| !s[b] || !s[c])) {
                    searchWin(s);
                    bandera = true;
                    return;
                }//si no tiene posibilidad de ganar en esa linea entonces que bloquee al user
                else if (x.length == 2 && (!s[a]|| !s[b] || !s[c])){
                    bandera = true;
                    if (s[a] === 'X' && s[a] === s[b] && s[c] === null) {
                        console.log('marcara la casilla c: ' + c);
                        handleGameAI(s, c);
                        return;
                    } else if (s[a] === 'X' && s[b] === null && s[c] === s[a]) {
                        console.log('marcara la casilla b: ' + b);
                        handleGameAI(s, b);
                        return;
                    } else if (s[a] === null && s[b] === 'X' && s[c] === s[b]) {
                        console.log('marcara la casilla a: ' + a);
                        handleGameAI(s, a);
                        return;
                    }
                }else{
                    bandera = false;
                }

                }
            }else if(!bandera){
                movementAleatorio(s);
            return;
        }


    }

    // setea en la casilla correspondiente para evitar que el user gane
    // cuando el usuario esta por completar una fila
    const handleGameAI = (s, i) => {
        setTimeout(() => {
            s[i] = 'O';
            setState({ squares: s, xIsNext: !state.xIsNext, count: state.count + 1 });
        }, 500)
    }

    // movimiento aleatorio
    const movementAleatorio = (s) => {
        setTimeout(() => {
            let i = Math.round(Math.random() * (8 - 0) + parseInt(0));
            console.log(`casilla aleatoria:` + i);
            // si la casilla ya esta ocupada, que busque otro aleatorio
            if (s[i]) {
                movementAleatorio(s);
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
            if (x.length == 2) {
                if (s[a] === 'O' && s[a] === s[b] && s[c] === null) {
                    console.log('marcara la casilla c: ' + c);
                    handleGameAI(s, c);
                    return;
                } else if (s[a] === 'O' && s[b] === null && s[c] === s[a]) {
                    console.log('marcara la casilla b: ' + b);
                    handleGameAI(s, b);
                    return;
                } else if (s[a] === null && s[b] === 'O' && s[c] === s[b]) {
                    console.log('marcara la casilla a: ' + a);
                    handleGameAI(s, a);
                    return;
                }
            }
        }
    }

    // verifica si existe un ganador
    const calculateWinner = (squares) => {
        let lines = linesWin;
        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            // gana si el valor en squares[a], en squares[b] y en squares[c] es el mismo
            // osea si toda la linea es X | O
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    useEffect(() => {
        let winner = calculateWinner(state.squares);
        console.log(winner);
        if (winner) {
            setStatus('Winner: ' + winner);
        }
        // define si el turno es del sistema 
        console.log(state.xIsNext);
        if (!state.xIsNext)
            handleClickIA();

    }, state.squares);
    return (
        <Fragment>
            <div>
                <div className="status">User = X , IA = O</div>
                <div className="status">{status}</div>
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
            </div>
        </Fragment>
    )
}

export default Board;