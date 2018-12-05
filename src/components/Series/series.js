import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImage } from 'mdbreact';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import styles from './series.css';

class Series extends Component {
    state = {
        data: {}
    };

    componentWillMount() {
        axios.get('http://localhost:3001/get-series').then(response => {
            this.setState({
                data: response
            });
        });
    }

    series = () => {
        const seriesItems = [];
        for (var i in this.state.data.data) {
            // console.log(this.state.data.data[i].images["Poster Art"].url);
            seriesItems.push(
                <Col xs={2} className={styles.card_item}>
                    <Link to="/series">
                        <Card>
                            <CardImage
                                className="img-fluid"
                                src={this.state.data.data[i].images["Poster Art"].url}
                                waves
                            />
                        </Card>
                    </Link>
                    <a>{this.state.data.data[i].title}</a>
                </Col>
            );
        }
        return seriesItems;
    };

    render() {
        return (
            <div>
                <div className={styles.popular_series}>
                    <h2>Popular Series</h2>
                </div>
                <Container className={styles.container}>
                    <Row>{this.series()}</Row>
                </Container>
            </div>
        );
    }
}

export default Series;
