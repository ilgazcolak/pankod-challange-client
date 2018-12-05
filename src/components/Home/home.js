import React, { Component } from 'react';
import { Card, CardImage } from 'mdbreact';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './home.css';

class Home extends Component {
    state = {
        server: false
    };

    componentWillMount() {
        axios.get('http://localhost:3001/').then(response => {
            if (response.data === 'OK')
                this.setState({
                    server: true
                });
            console.log(this.state.server);
        });
    }

    render() {
        return (
            <div>
                <div className={styles.popular_titles}>
                    <h2>Popular Titles</h2>
                </div>

                {this.state.server ? (
                    <Container className={styles.container}>
                        <Row>
                            <Col xs={2}>
                                <Link to="/series">
                                    <Card>
                                        <CardImage
                                            className="img-fluid"
                                            src="/placeholders/series.jpg"
                                            waves
                                        />
                                    </Card>
                                </Link>
                                <a>Popular Series</a>
                            </Col>
                            <Col xs={2}>
                                <Link to="/movies">
                                    <Card>
                                        <CardImage
                                            className="img-fluid"
                                            src="/placeholders/movies.jpg"
                                            waves
                                        />
                                    </Card>
                                </Link>
                                <a>Popular Movies</a>
                            </Col>
                            <Col xs={8} />
                        </Row>
                    </Container>
                ) : (
                    <div className={styles.error}>
                        <a>Oops, something went wrong...</a>
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
