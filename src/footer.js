import './footer.css'
function footer(){
    return(
        <footer className="footer">
            <div className="footer_info">
                <div id="links">
                    <p>- ССЫЛКИ -</p>
                    <a href="https://github.com/Qu1ck1337/T5-frontend">* GIT-Hub</a>
                </div>
            </div>
            <div id="footer_line"></div>
            <div id="footer_author"><p>© 2024. Все права защищены.</p></div>
        </footer>
    )
}
export default footer;