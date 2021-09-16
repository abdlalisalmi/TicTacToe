


export default function gameSettings() {


    return (
        <div className="flex flex-col justify-center items-center w-1/3 p-6 border-2 border-gray-100 rounded-lg shadow-md">
            <h2 className="mb-4 text-sm">Play With Friend</h2>

            <div className="flex flex-row w-full mb-4 relative bg-white items-center rounded-lg border-2 border-gray-100">
                <div className="flex justify-center">
                    <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600 border-r-2 border-gray-100">
                        <img src={`/images/${playerAvatar}`} width="30"></img>
                    </span>
                </div>
                <input
                    type="text"
                    className="w-full px-3 py-2.5 rounded-lg text-xs text-gray-500 outline-none"
                    placeholder="Player name"
                    onChange={(e) => setPlayerName(e.target.value)}
                />
            </div>

            <div className="w-full mb-4">
                <h3 className="text-xs mb-2 text-gray-500">Chose your player</h3>
                <div className="flex flex-row justify-evenly w-full">
                    <div className={`${player === 'x' ? 'bg-green-300 text-white shadow-md' : 'bg-gray-200'} flex flex-row justify-center rounded-xl cursor-pointer w-7`} onClick={() => setPlayer('x')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div className={`${player === 'o' ? 'bg-green-300 text-white shadow-md' : 'bg-gray-200'} flex flex-row justify-center rounded-xl cursor-pointer w-7`} onClick={() => setPlayer('o')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <h3 className="text-xs mb-2 text-gray-500">Chose your avatar</h3>
                <div className="flex flex-row flex-wrap justify-between mb-4 px-3">
                    <div className={`${playerAvatar === 'avatar.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar.png')}
                    >
                        <img src="/images/avatar.png" width="30"></img>
                    </div>
                    <div className={`${playerAvatar === 'avatar1.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar1.png')}
                    >
                        <img src="/images/avatar1.png" width="30"></img>
                    </div>
                    <div className={`${playerAvatar === 'avatar2.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar2.png')}
                    >
                        <img src="/images/avatar2.png" width="30"></img>
                    </div>
                    <div className={`${playerAvatar === 'avatar3.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar3.png')}
                    >
                        <img src="/images/avatar3.png" width="30"></img>
                    </div>
                    <div className={`${playerAvatar === 'avatar4.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar4.png')}
                    >
                        <img src="/images/avatar4.png" width="30"></img>
                    </div>
                    <div className={`${playerAvatar === 'avatar5.png' ? 'bg-green-200 shadow-md' : ''} rounded-full border-2 border-gray-100 cursor-pointer p-1 mb-2`}
                        onClick={() => setPlayerAvatar('avatar5.png')}
                    >
                        <img src="/images/avatar5.png" width="30"></img>
                    </div>
                </div>
            </div>

            <div className="m-3 flex justify-center">
                <button className="bg-white text-gray-800 font-normal focus:outline-none rounded-lg border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center duration-300">
                    <span className="mr-2">PLAY</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}