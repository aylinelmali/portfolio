import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {Jumbotron} from 'reactstrap';

class About extends Component{
    render(){
        return(
            <div className="container">
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm align-self-center">
                                <img src="assets/me.jpg" className="img-fluid" alt="me"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>Aylin Elmali</h1>
                                <p class="d-none d-sm-block">Hi, I'm Aylin Elmali. I'm a CS graduate from University of Massachusetts, Amherst. I am skilled in Full-Stack development and know Java, C, C++, Python, Javascript, and HTML and CSS.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container">
                    <div className="row row-content align-items center">
                        <div className="col-7 col-sm-5">
                            <h3>My Honors Thesis Presentation</h3>
                            <div>
                                <ReactPlayer url="https://youtu.be/hzXDQIbWL-I"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/aylinelmali/"><i className="fa fa-linkedin fa-7x"></i></a>
                                <a className="btn btn-social-icon btn-github" href="https://github.com/aylinelmali"><i className="fa fa-github fa-7x"></i></a>
                                <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UC7Eg1ivs8fihlQzhbvfP9Hg"><i className="fa fa-youtube fa-7x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;