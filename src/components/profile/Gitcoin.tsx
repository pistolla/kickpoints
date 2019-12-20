import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    homePaper: {
        padding: theme.spacing(3),
        width: "100%",
        zIndex: 999
    },
    
}));
export const Gitcoin: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Paper elevation={5} className={classes.homePaper}>
            
        </Paper>
    );
}