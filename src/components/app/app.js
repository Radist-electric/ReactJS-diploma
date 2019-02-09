import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {CoffeePage, PleasurePage} from '../pages';

const App = () => {
    return (
        <Router>
            <div className="app"> 
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Route path='/' exact component={() => <p>This is the main page</p>}/>
                    <Route path='/coffee' component={CoffeePage}/>
                    <Route path='/pleasure' exact component={PleasurePage}/>
                </Container>
            </div>
        </Router>
    );
};

export default App;