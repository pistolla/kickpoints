import React, { PropsWithChildren } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, makeStyles, Typography, Button } from '@material-ui/core';
import Tickets from '../home/Tickets.svg';
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
}));
const DAYS_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
interface Props {
    event: any
}
export const Event: React.FC = (props: any) => {
    const [event] = { ...props };
    let meetupName: string = '', description: string = '', url: string = ''
    let startDate = new Date(event.start.dateTime)

    let day = DAYS_OF_WEEK[startDate.getDay()]
    let month = MONTHS[startDate.getMonth()]
    let date = startDate.getDate()
    let hours = startDate.getHours() % 12
    let minutes = startDate.getMinutes()
    let mins: string = '';
    let AMPM = startDate.getHours() < 12 ? 'AM' : 'PM'
    const classes = useStyles();

    if (minutes <= 10) {
        mins = `0${minutes}`
    }

    let displayStartDate = `${day}, ${month} ${date} at ${hours}:${mins}${AMPM}`

    return (
        <Card elevation={0}>
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
                            Ticket {meetupName}
                        </Typography>
                        <Button
                            color="secondary"
                            size="medium"
                            variant="contained"
                            className={classes.hlaction}>BUY NOW</Button>
                    </div>
                    <div>
                        <h4>{meetupName} - {event.summary}</h4>
                        <p>{displayStartDate}</p>
                        <p>{event.location}</p>
                        <p>{description}</p>

                    </div>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}