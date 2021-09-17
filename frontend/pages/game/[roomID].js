import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


export default function GameRoom() {

    const route = useRouter()
    const { roomID } = route.query
    const [gameSocket, setGameSocket] = useState(null)
    const [gameClicked, setGameClicked] = useState(false)

    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [player, setPlayer] = useState('O')
    const [gameArray, setGameArray] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
    ])

 
    useEffect(() => {
        if (roomID) {
            setGameSocket(new WebSocket(`ws://localhost:8000/ws/game_play/${roomID}`));
        }
        // let totalSeconds = 0;
        // function pad(val) { return val > 9 ? val : "0" + val; }
        // const interval = setInterval(() => {
        //     ++totalSeconds;
        //     setSeconds(pad(totalSeconds % 60));
        //     setMinutes(pad(parseInt(totalSeconds / 60)));
        // }, 1000);
        // return () => clearInterval(interval);
    }, [roomID]);

    useEffect(() => {
        if (gameSocket){
            gameSocket.onopen = function open() {
                console.log("Connection Opened");
            };
    
            gameSocket.onclose = function (e) {
                setTimeout(() => {
                    console.log("Trying to connect");
                }, 30000)
                console.log("Connection Closed");
            };
    
            gameSocket.onerror = function open() {
                console.log("Connection Error");
            };
    
            // Sending the info about the room
            gameSocket.onmessage = function (e) {
                let data = JSON.parse(e.data);
                data = data["payload"];
                let message = data['message'];
                setGameArray(message.split(","))
                // console.log(message.split(","));
            }
    
            if (gameSocket.readyState == WebSocket.OPEN) {
                gameSocket.onopen();
            }
        }
    }, [gameSocket])



    function handleClick(e, index) {
        let newArray = [...gameArray];
        newArray[index] = player;
        setGameClicked(true)
        setGameArray(newArray);
    }

    useEffect(() => {
        const result = gameArray.filter(index => index !== '');
        if (result.length > 0 && gameClicked)
        {
            console.log(gameArray);
            gameSocket.send(gameArray);
            setGameClicked(false);
        }
    }, [gameArray])

    return (
        <>
            <div className="main h-screen">
                <h1 className="title">Tic Tac Toe</h1>
                <div className="flex flex-col justify-center items-center w-1/3 p-6 border-2 border-gray-100 rounded-lg shadow-md">
                    <div className="flex flex-row justify-between w-full mb-6 border-b-2 border-gray-200 pb-3">
                        <div className="player-info justify-start">
                            <img src="/images/avatar2.png" width="40px"></img>
                            <p className="px-2 truncate">abdlali</p>
                        </div>

                        <div className="flex flex-col flex-shrink-0 justify-center items-center text-sm">
                            <span>VS</span>
                            <span>{minutes}:{seconds}</span>
                        </div>

                        <div className="player-info justify-end">
                            <p className="px-2 truncate">amine</p>
                            <img src="/images/avatar4.png" width="40px"></img>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 w-2/4 rounded-lg  p-3">
                        <div className={`${gameArray[0] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 0))}>
                            {gameArray[0]}
                        </div>
                        <div className={`${gameArray[1] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 1))}>
                            {gameArray[1]}
                        </div>
                        <div className={`${gameArray[2] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 2))}>
                            {gameArray[2]}
                        </div>
                        <div className={`${gameArray[3] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 3))}>
                            {gameArray[3]}
                        </div>
                        <div className={`${gameArray[4] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 4))}>
                            {gameArray[4]}
                        </div>
                        <div className={`${gameArray[5] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 5))}>
                            {gameArray[5]}
                        </div>
                        <div className={`${gameArray[6] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 6))}>
                            {gameArray[6]}
                        </div>
                        <div className={`${gameArray[7] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 7))}>
                            {gameArray[7]}
                        </div>
                        <div className={`${gameArray[8] === '' ? 'empty-game-buttonl' : 'game-button'}`} onClick={((e) => handleClick(e, 8))}>
                            {gameArray[8]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}