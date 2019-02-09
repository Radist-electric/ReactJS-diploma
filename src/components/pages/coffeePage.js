import React from 'react';
import {Container, Row} from 'reactstrap';
import Header from '../header';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import CoffeeGirl from '../../img/coffee_girl.jpg';

const CoffeePage = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <Header/>
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div>
            <section className="shop">
                <Container>
                    <Row>
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={CoffeeGirl} alt="girl"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br></br>
                                <br></br>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                                so questions. <br></br>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br></br>
                                is song that held help face.
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CoffeePage;