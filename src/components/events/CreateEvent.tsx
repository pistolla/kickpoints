import React, { Fragment, useState } from 'react';
import { Typography, Card, CardContent, CardActionArea, CardMedia, IconButton, makeStyles, Button } from '@material-ui/core';
import { Event } from './Event';
import { RouteComponentProps, useRouteMatch, useHistory } from 'react-router-dom';
import Tickets from '../home/Tickets.svg';
import { TextField, Input } from 'final-form-material-ui';
import { Form, Field } from 'react-final-form'
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

    },
    formControl: {
        marginBottom: theme.spacing(2)
    },
    stepContainer: {
        height: '60vh',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
export const CreateEvent: React.FC = (props: any) => {
    console.log("Create Ticket")
    const classes = useStyles();
    const history = useHistory();
    const [step, setStep] = useState(-1);
    const { path, url } = useRouteMatch();
    const onSubmit = (value: any) => {
        console.log("onSubmit")
        //create a google calendar entry
        // 
    }
    const validate = async (value: any) => {
        console.log("onValidate");
    }
    let makeGoogleCalendarURL = (calID: string) =>
        `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
        + `?singleEvents=true&key=AIzaSyA-xW0xIfYvro-zD0JCLRfJwqs6s2MmKmU`

    const importFromCalendar = () => {
        console.log("importing from google calendar api");

    }
    const showRegisteredEmail = () => {
        return (
            <Field
                name="email"
                type="email"
                component={TextField}
                label="Confirm this is your preferred email address"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        );
    }
    const showEventName = () => {
        return (
            <Field
                name="name"
                type="text"
                component={TextField}
                label="What is the name of this event?"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        );
    }
    const showEventVenue = () => {
        return (
            <Field
                name="venue"
                type="text"
                component={TextField}
                label="Where will this event take place?"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        )
    }
    const showEventDescription = () => {
        return (
            <Field
                name="description"
                type="text"
                multiline
                component={TextField}
                label="Kindly, describe this event in less than 200 letters"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        )
    }
    const showEventStartTime = () => {
        return (
            <Field
                name="start"
                type="datetime"
                component={TextField}
                label="Pick Date/Time when this event will start"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        )
    }
    const showEventTicketprice = () => {
        return (
            <Field
                name="price"
                type="number"
                component={TextField}
                label="What's the price of each ticket in USD? Note this will be converted to ether according to current rate"
                margin="normal"
                fullWidth
                className={classes.formControl}
            />
        )
    }
    const showEventConfirm = () => {
        return (
            <Fragment>
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    type="submit">Save/View Ticket</Button>
                <Button
                    color="secondary"
                    size="large"
                    onClick={() => { alert("Warning! Ticket details will be deleted");history.push('/ticket')}}>Cancel</Button>
            </Fragment>
        )
    }
    const showLoading = () => {
        return (
            <Fragment>
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => setStep(0)}>Create and Synchronize</Button>
                <Button
                    color="secondary"
                    size="large"
                    onClick={() => importFromCalendar()}>Import from Google Calendar</Button>
            </Fragment>
        )
    }
    const showStepwise = () => {
        if (step === 0) {
            return showRegisteredEmail()
        } else if (step === 1) {
            return showEventName()
        } else if (step === 2) {
            return showEventVenue()
        } else if (step === 3) {
            return showEventDescription()
        } else if (step === 4) {
            return showEventStartTime()
        } else if (step === 5) {
            return showEventTicketprice()
        } else if (step === 6) {
            return showEventConfirm()
        }
        return showLoading();
    }
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
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={classes.headline}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.hltitle}>
                                        Create Ticket(s)
                                    </Typography>
                                    {step > 0 && step < 6 ? <Button
                                        color="secondary"
                                        size="medium"
                                        variant="contained"
                                        className={classes.hlaction}
                                        onClick={() => { let stp = step - 1; setStep(stp) }}>Prev</Button> : ''}
                                    {step >= 0 && step < 6 ? <Button
                                        color="secondary"
                                        size="medium"
                                        variant="contained"
                                        className={classes.hlaction}
                                        onClick={() => { let stp = step + 1; setStep(stp) }}>Next</Button> : ''}
                                </div>
                                <div className={classes.stepContainer}>
                                    {showStepwise()}
                                </div>

                            </form>
                        )} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}