import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { BaseProps } from '@material-ui/core/OverridableComponent';

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
interface Props  {
    event: any
}
export const Event: React.FC = (props: any) => {
    const [event] = {...props};
    let meetupName: string = '', description: string = '', url: string = ''
    let startDate = new Date(event.start.dateTime)

    let day = DAYS_OF_WEEK[startDate.getDay()]
    let month = MONTHS[startDate.getMonth()]
    let date = startDate.getDate()
    let hours = startDate.getHours() % 12
    let minutes = startDate.getMinutes()
    let mins: string = '';
    let AMPM = startDate.getHours() < 12 ? 'AM' : 'PM'

    if (minutes <= 10) {
        mins = `0${minutes}`
    }

    let displayStartDate = `${day}, ${month} ${date} at ${hours}:${mins}${AMPM}`

    return (
        <div>
            <h4>{meetupName} - {event.summary}</h4>
            <p>{displayStartDate}</p>
            <p>{event.location}</p>
            <p>{description}</p>
            <p>
                <Link to={url}>
                    Event Details
        </Link>
            </p>
        </div>

    )
}