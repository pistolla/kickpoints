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
    const [events, setEvents] = useState([{}]);
    const classes = useStyles();
    const { path, url } = useRouteMatch();
    const showLoading = () => {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const addEvent = (event: any) => {
        console.log("addEvent")
        console.log(event)
        events.push(event)
    }

    return (
        loading == true ? showLoading() : (
            <Paper elevation={10} className={classes.container}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path={path} render={(props: any) => <Events {...props} events={events} addEvent={addEvent} />} />
                            <Route path={`${path}/add`} render={(props: any) => <CreateEvent {...props} addEvent={addEvent} />} />
                            <Route path={`${path}/:id`} render={(props: any) => <Event {...props} />} />
                        </Switch> 
                    </div>
                </Router>
            </Paper>
        ));
}