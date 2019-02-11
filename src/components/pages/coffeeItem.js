import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

export default class CoffeeItem extends Component {
    coffeeService = new CoffeeService();
    state = {
        post: []
    }
    componentDidMount() {
        this.coffeeService.getAllCoffee()
        .then(this.onCoffeeLoaded);
    }
    onCoffeeLoaded = (posts) => {
        let checkId = this.props.coffeeId,
            newPost = {};
        for ( let i = 1; i <= posts.length; i++) {
            if ( String(i) === checkId) {
                newPost = posts[checkId - 1];
                this.setState({post: 
                    <Row>
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={newPost.url} alt="coffee_item"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">{newPost.name}</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="shop__point">
                                <span>Country: </span>
                                {newPost.country}
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                {newPost.description}
                            </div>
                            <div className="shop__point">
                                <span>Price: </span>
                                <span className="shop__point-price">{newPost.price}</span>
                            </div>
                        </div>
                    </Row>
                });
                break;
            } else {
                this.setState({post: 
                    <Row>
                        <div className="col-lg-12">
                            <p>There's no such an item.</p>
                        </div>
                    </Row>
                });
            }
        }


    }

    render() {
        return (
            <section className="shop">
                <Container>
                    <Row>
                        {this.state.post}
                    </Row>
                </Container>
            </section>
        )
    }
}