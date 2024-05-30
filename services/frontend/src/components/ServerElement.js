const ServerElement = (server_name, avatar) => {
    return (
        <a id="serv1" href="/server_manager">
            <img className="serv_img" src={avatar} alt=""></img>
            <div className="serv_info">
                <p className="server_name">{server_name}</p>
                <div className="serv_online">
                    {/* <img id="serv_online_png" src={serv_online_png} alt=""></img> */}
                    <p>в сети:</p>
                </div>
            </div>
        </a>
    )
};

export default ServerElement;