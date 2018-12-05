import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImage } from 'mdbreact';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import styles from './movies.css';

class Movies extends Component {
    state = {
        data: {}
    };

    componentWillMount() {
        axios.get('http://localhost:3001/get-movies').then(response => {
            this.setState({
                data: response
            });
        });
    }

    movies = () => {
        const movieItems = [];
        for (var i in this.state.data.data) {
            // console.log(this.state.data.data[i].images["Poster Art"].url);
            movieItems.push(
                <Col xs={2} className={styles.card_item}>
                    <Link to="/movies">
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
        return movieItems;
    };

    render() {
        return (
            <div>
                <div className={styles.popular_movies}>
                    <h2>Popular Movies</h2>
                </div>
                <Container className={styles.container}>
                    <Row>{this.movies()}</Row>
                </Container>
            </div>
        );
    }
}

export default Movies;
