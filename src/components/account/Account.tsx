import React, { useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Summary } from './Summary';
const useStyles = makeStyles((theme: any) => ({
    container: {
        height: '100vh',
        padding: theme.spacing(3, 2)
    }
}));
export const Account: React.FC = () => {
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
                                <Summary />
                            </Route>
                            
                        </Switch>
                    </div>
                </Router>
            </Paper>
        ));
}