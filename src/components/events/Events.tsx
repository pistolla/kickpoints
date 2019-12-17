import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { Event } from './Event';
import { RouteComponentProps } from 'react-router-dom';


interface EventsProps extends RouteComponentProps{
    addEvent: any;
    events: any
}

const calendareventsUrls: string[] = [];

export const Events: React.FC = (props: any) => {
    const addEvent =() => {
        console.log("addEvent")
    } 
    const events: any[] = [];

    Object.values(calendareventsUrls).map(async (val: any) => {
        let r = await fetch(val, { mode: `cors` })
        let { items } = await r.json()
        props.addEvent((s: any) => [
            ...s,
            ...(items || []).filter((event: any) =>
                event.organizer && +Date.now() < +new Date(event.end.dateTime)
            ),
        ].sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)))
    })
    return (
        <div>
            <Typography>
                UPCOMING EVENTS
    </Typography>
            <Card>
                {events.map((e: any, i: any) =>
                    <div key={e.id}>
                        <Event />
                        {i < events.length - 1 && <hr />}
                    </div>
                )}
            </Card>
        </div>

    )
}