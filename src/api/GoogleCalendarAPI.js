export class GoogleCalendarAPI
{
    constructor(gapiClient)
    {
        this.gapiClient = gapiClient;
    }

    addEventToCalendar(title, date)
    {
        console.log(date.toISOString().substring(0,10));
        let event = {
            'summary' : title,
            'start': {
                'date': date.toISOString().substring(0,10)
            },
            'end': {
                'date' : date.toISOString().substring(0,10)
            }
        };

        let request = this.gapiClient.calendar.events.insert({
            'calendarId' : 'primary',
            'resource' : event
        });

        request.execute(event => {
            alert("Created event "+ event.summary + " at " + event.start.date);
        });
    }

    addEventsToCalendar(title, dates)
    {
        dates.forEach(date => this.addEventToCalendar(title, date));
    }
}