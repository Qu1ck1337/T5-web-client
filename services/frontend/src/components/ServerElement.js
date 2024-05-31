import "../styles/ServerElement.css"
const ServerElement = ({server_data}) => {
    const iconUrl = server_data['icon'] 
        ? `https://cdn.discordapp.com/icons/${server_data['id']}/${server_data['icon']}`
        : 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-black-icon.png';

    return (
        <a id="serv1" href="/server_manager">
            <img className="serv_img" src={iconUrl} alt="Server Icon"></img>
            <div className="serv_info">
                <p className="server_name">{server_data['name']}</p>
                <div className="serv_online">
                    {server_data['bot_in'] ? <></> : (
                        <a className="bot_add_btn" href="https://discord.com/oauth2/authorize?client_id=1209065391398322206&permissions=8&scope=bot">Добавить
                            бота</a>)}
                </div>
            </div>
        </a>
    );
};

export default ServerElement;