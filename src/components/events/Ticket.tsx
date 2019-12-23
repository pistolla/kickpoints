import React, { useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Events } from './Events';
import { Event } from './Event';
import { CreateEvent } from './CreateEvent';

const useStyles = makeStyles((theme: any) => ({
    container: {
        height: '100vh',
        // padding: theme.spacing(3, 2)
    }
}));
interface TicketEvent {
    id: string,
    name: string,
    email: string,
    description: string,
    start: Date,
    venue: string,
    poster: string,
    price: number
}

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
    const addEvent = (event: TicketEvent) => {
        console.log("addEvent")
    }

    return (
        loading == true ? showLoading() : (
            <Paper elevation={10} className={classes.container}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path={path} component={Events} />
                            <Route path={`${path}/add`} component={CreateEvent} />
                            <Route path={`${path}/:id`} component={Event} />
                        </Switch> 
                    </div>
                </Router>
            </Paper>
        ));
}