import React from 'react';
import { makeStyles, Typography, Paper, Grid, GridList, GridListTile, IconButton, GridListTileBar } from '@material-ui/core';
import { Events } from '../events/Events';
import { ERC20Icon } from 'dapparatus';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    homePaper: {
        padding: theme.spacing(3),
        width: "100%",
        zIndex: 999
    },
    tile: {
        minHeight: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    }
}));

// replace with redux or mobx
const allEvents: any[] = [];

const addEvents = (calendarEvent: any) => {
    if (calendarEvent) {
        allEvents.push(calendarEvent);
    }
}

export const Home: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Paper elevation={5} className={classes.homePaper}>
            <Typography variant="h5">
                What do you wish to do today?
                    </Typography>
            <GridList cols={2}>
                <GridListTile cols={2} rows={1}>
                    <img src="" alt="WearerKickback" onClick={() => alert("Hello from here")}/>
                    <GridListTileBar
                        title="Thank you for attending our event"
                        subtitle={<span>Kickback</span>}
                        actionIcon={
                            <IconButton size="medium" aria-label={`open`} className={classes.icon} onClick={() => alert("Hello from here")}>

                            </IconButton>
                        }
                    />
                </GridListTile>
                <GridListTile cols={1} rows={1}>
                    <img src="" alt="WearerKickback" onClick={() => alert("Hello from here")} />
                    <GridListTileBar
                        title="You have been awarded Kudos in Gitcoin"
                        subtitle={<span>Gitcoin</span>}
                        actionIcon={
                            <IconButton size="medium" aria-label={`open`} className={classes.icon} onClick={() => alert("Hello from here")}>

                            </IconButton>
                        }
                    />
                </GridListTile>
                <GridListTile cols={1} rows={1}>
                    <img src="" alt="WearerKickback" onClick={() => alert("Hello from here")}/>
                    <GridListTileBar
                        title="You have a offer in WalletConnect"
                        subtitle={<span>Tswira</span>}
                        actionIcon={
                            <IconButton size="medium" aria-label={`open`} className={classes.icon} onClick={() => alert("Hello from here")}>
                                
                            </IconButton>
                        }
                    />
                </GridListTile>
            </GridList>
        </Paper>
    );
}