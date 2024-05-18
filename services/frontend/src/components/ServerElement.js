const ServerElement = (server_name, discord_logo, serv_online_png) => {
    return (
        <a id="serv1" href="/server_manager">
            <img className="serv_img" src={discord_logo} alt=""></img>
            <div className="serv_info">
                <p>{server_name}</p>
                <div className="serv_online">
                    <img id="serv_online_png" src={serv_online_png} alt=""></img>
                    <p>в сети:</p>
                </div>
            </div>
        </a>
    )
};

export default ServerElement;