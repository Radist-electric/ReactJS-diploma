import React, {Component} from 'react';
import {Row} from 'reactstrap';

export default class CoffeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    render() {
            let newPosts = this.props.posts.map((post, index) => {
            return (
                <div
                key={index}
                className="shop__item"
                onClick={() => this.props.onCoffeeSelected(index + 1)}
                >
                    <img src={post.url} alt="coffee"></img>
                    <div className="shop__item-title">
                        {post.name}
                    </div>
                    <div className="shop__item-country">{post.country}</div>
                    <div className="shop__item-price">{post.price}</div>
                </div>
            )
        });
        return (
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {newPosts}
                    </div>
                </div>                        
            </Row>
        )
    }
}
