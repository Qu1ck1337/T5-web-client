const ServerElement = ({server_data}) => {
    return (
        <a id="serv1" href="/server_manager">
            <img className="serv_img" src={`https://cdn.discordapp.com/icons/${server_data['id']}/${server_data['icon']}`} alt="https://th.bing.com/th/id/OIP.EZkdm25nbQDs_PjFN8hmewAAAA?rs=1&pid=ImgDetMain"></img>
            <div className="serv_info">
                <p className="server_name">{server_data['name']}</p>
                <div className="serv_online">
                    {server_data['bot_in'] ? <></> : (
                        <a href="https://discord.com/oauth2/authorize?client_id=1209065391398322206&permissions=8&scope=bot">Добавить
                            бота</a>)}
                </div>
            </div>
        </a>
    )
};

export default ServerElement;