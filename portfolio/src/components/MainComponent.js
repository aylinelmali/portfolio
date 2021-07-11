import React, {Component} from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import MyWork from './MyWorkComponent';
import Resume from './ResumeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/aboutme" component={() => <About/>}/>
                    <Route path="/mywork" component={() => <MyWork/>}/>
                    <Route path="/resume" component={() => <Resume/>}/>
                    <Route path="/contactme" component={() => <Contact/>}/>
                    <Redirect to="/aboutme"/>
                </Switch>
            </div>
        );
    }
}

export default Main;