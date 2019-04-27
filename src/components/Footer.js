import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; React Theme - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. 
            <br />
            <a target="_blank" href="https://github.com/react-theme/dimension">
                <span className="icon fa-github fa-2x"></span>
            </a> 
            {'  '}
            <a target="_blank" href="https://appseed.us">
                <span className="icon fa-rocket fa-2x"></span>
            </a> 
            {'  '}
            <a target="_blank" href="https://blog.appseed.us/react-themes-dashboards-landing-pages/">
                <span className="icon fa-rss-square fa-2x"></span>
            </a> 
            {'  '}
            <a target="_blank" href="https://www.youtube.com/channel/UCSEnv6MeRzmFXAnG5baXC_Q">
                <span className="icon fa-youtube fa-2x"></span>
            </a> 
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
