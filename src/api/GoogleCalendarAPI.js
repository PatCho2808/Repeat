export class GoogleCalendarAPI
{
    constructor(gapiClient)
    {
        this.gapiClient = gapiClient;
    }

    addEventToCalendar(title, date)
    {
        let event = {
            'summary' : title,
            'start': {
                'dateTime': date.toISOString()
            },
            'end': {
                'dateTime': date.toISOString()
            }
        };

        let request = this.gapiClient.calendar.events.insert({
            'calendarId' : 'primary',
            'resource' : event
        });

        request.execute(event => {
            alert("Created event "+ event.summary + " at " + event.start.dateTime.toLocaleString());
        });
    }

    addEventsToCalendar(title, dates)
    {
        dates.forEach(date => this.addEventToCalendar(title, date));
    }
}