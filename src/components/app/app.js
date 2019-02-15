import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainPage, CoffeePage, PleasurePage, CoffeeItem, CoffeeHeader} from '../pages';
import Footer from '../footer';
import CoffeeService from '../../services/coffeeService';

import '../../sass/style.sass';

export default class App extends Component {
    coffeeService = new CoffeeService();
    state = {
        fatalError: false
    }
    render() {
        return (
            <Router>
                <> 
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/coffee' component={CoffeeHeader}/>
                    <Route path='/bestsellers' component={CoffeeHeader}/>
                    <Route path='/coffee' exact component={CoffeePage}/>
                    <Route path='/pleasure' exact component={PleasurePage}/>
                    <Route path='/coffee/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <CoffeeItem
                                        getData={this.coffeeService.getAllCoffee}
                                        coffeeName={id}/>}
                                }/>
                    <Route path='/bestsellers/:id' render={
                                ({match, location, history}) => {
                                    console.log(match);
                                    console.log(location);
                                    console.log(history);
                                    const {id} = match.params;
                                    return <CoffeeItem
                                        getData={this.coffeeService.getAllBestsellers}
                                        coffeeName={id}/>}
                                }/>
                    <Footer/>
                </>
            </Router>
        );
    }
};

