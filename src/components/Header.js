import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-rocket"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>React Theme Dimension</h1>
                <p>Free React starter, designed by <a target="_blank" href="https://html5up.net">HTML5 UP</a>.<br />
                Hosted and enhanced by <a target="_blank" href="https://appseed.us">AppSeed</a>
                <br /><br />
                <a target="_blank" href="https://github.com/react-theme/dimension/blob/master/README.md">Open-Source</a>, {' '}
                <a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=https://react-themes-dimension.appseed.us&tab=mobile">Fast as hell</a>, {' '}
                <a target="_blank" href="https://github.com/react-theme/dimension/blob/master/deploy.js">FTP Deploy Script</a>
                <br /><br />
                Need more React Themes?
                <br />

                <a target="_blank" href="https://react-themes.appseed.us/">All Themes</a>. 
                <a target="_blank" href="https://react-themes-stellar.appseed.us/">Stellar</a>. 
                <a target="_blank" href="https://react-themes-photon.appseed.us/">Photon</a>. 

                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
