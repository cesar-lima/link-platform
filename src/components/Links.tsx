import '../styles/links.css'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

function Links() {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://github.com/cesar-lima" target="_blank">
                        <img src={github} alt="logo github" />
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/cesar-lima-correia/" target="_blank">
                        <img src={linkedin} alt="logo linkedin" />
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cesinha.lc/" target="_blank">
                        <img src={instagram} alt="logo instagram" />
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links