import React from 'react'
import Fade from 'react-reveal/Fade';
import Button from 'components/atoms/button';
import BrandIcon from 'components/partials/IconText';
export default function index(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    };

    if(props.isCentered)
        return (
            <Fade>
                <header className="spacing-sm">
                    <div className="container">
                        <navbar className="navbar navbar-expend-lg navbar-light">
                            <Button className="brand-text-icon mx-auto" href="" type="link">
                                Stay<span className="text-gray-900">cation.</span>
                            </Button>
                        </navbar>
                    </div>
                </header>
            </Fade>
        );
        
        return (
            <Fade>
            <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon/>
                        <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className={`nav-item${getNavLinkClass("/")}`}>
                                        <Button className="nav-link" type="link" href="/">
                                            Home
                                        </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                        <Button className="nav-link" type="link" href="/browse-by">
                                            Browse By
                                        </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                        <Button className="nav-link" type="link" href="/stories">
                                            Stories
                                        </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/agents")}`}>
                                        <Button className="nav-link" type="link" href="/agents">
                                            Agents
                                        </Button>
                                    </li>
                                </ul>
                        </div>
                    </nav>   
            </div> 
            </header>
            </Fade>
        );
}
