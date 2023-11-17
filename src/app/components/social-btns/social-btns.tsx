import { GitHubIcon } from "../icons/github-icon";
import { IsntaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/juanaraujo.dev/">
                <IsntaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/juan-araujo-8a61b227b/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/JuanAraujo-Dev">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}