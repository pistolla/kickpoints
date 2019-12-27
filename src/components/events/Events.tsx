import React from 'react';
import { Typography, Card, CardContent, CardActionArea, CardMedia, IconButton, List, ListItem, ListItemIcon, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, makeStyles, Button } from '@material-ui/core';
import { Event } from './Event';
import { RouteComponentProps, useRouteMatch, useHistory } from 'react-router-dom';
import Tickets from '../home/Tickets.svg';
import { ERC20Icon } from 'dapparatus';


const useStyles = makeStyles((theme) => ({
    headline: {
        flexGrow: 1,
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between'
    },
    hltitle: {
        alignSelf: 'flex-end'
    },
    hlaction: {
        alignSelf: 'flex-end',
        
    }
}))

const calendareventsUrls: string[] = [];

export const Events: React.FC = (props: any) => {
    const [events, addEvent] = {...props};
    const classes = useStyles();
    const history = useHistory();
    const { path, url } = useRouteMatch();
    Object.values(calendareventsUrls).map(async (val: any) => {
        let r = await fetch(val, { mode: `cors` })
        let { items } = await r.json()
        addEvent((s: any) => [
            ...s,
            ...(items || []).filter((event: any) =>
                event.organizer && +Date.now() < +new Date(event.end.dateTime)
            ),
        ].sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)))
    })
    
    return (

        <Card elevation={0} style={{height: '100%'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Tickets"
                    height="100"
                    image={Tickets}
                    title="Tickets"
                />
                <CardContent>
                    <div className={classes.headline}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.hltitle}>
                            Tickets available
                        </Typography>
                        <Button
                                color="secondary"
                                size="medium"
                                className={classes.hlaction}
                                onClick={()=> {
                                    console.log("Add a Tickets")
                                    history.push(`${path}/add`)
                                }}>Create</Button>
                    </div>
                    <List>
                        {events.map((e: any, i: any) =>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ERC20Icon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary='Secondary text'
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <ERC20Icon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>

                </CardContent>
            </CardActionArea>
        </Card>

    )
}