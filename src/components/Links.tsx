import '../styles/links.css'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import portfolio from '../assets/portfolio.svg'

function Links() {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://github.com/cesar-lima" target="_blank">
                        <img src={github} alt="github icon" />
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/cesar-lima-correia/" target="_blank">
                        <img src={linkedin} alt="linkedin icon" />
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="https://cesar-dev.netlify.app" target="_blank">
                        <img src={portfolio} alt="portfolio icon" />
                        Portfolio
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links