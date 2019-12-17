import React, { useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Events } from './Events';
import { Event } from './Event';
import { CreateEvent } from './CreateEvent';

const useStyles = makeStyles((theme: any) => ({
    container: {
        height: '100vh',
        padding: theme.spacing(3, 2)
    }
}));

export const Ticket: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const { path, url } = useRouteMatch();
    const showLoading = () => {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        loading == true ? showLoading() : (
            <Paper elevation={10} className={classes.container}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path={path}>
                                <Events />
                            </Route>
                            <Route path={`${path}/:id`}>
                                <Event />
                            </Route>
                            <Route path={`${path}/edit/:id`}>
                                <CreateEvent />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Paper>
        ));
}