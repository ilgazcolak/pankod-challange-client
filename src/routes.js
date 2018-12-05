import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import Series from './components/Series/series';
import Movies from './components/Movies/movies';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/series" exact component={Series} />
                    <Route path="/movies" exact component={Movies} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;
