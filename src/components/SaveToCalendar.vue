<template>
    <b-button @click="saveEventsToCalendar">Save to calendar</b-button>
</template>

<script>
import {GoogleCalendarAPI} from "@/api/GoogleCalendarAPI";

export default {
        name: "SaveToCalendar",
        props: ['repetitionDates', 'title'],
        methods: {
            saveEventsToCalendar()
            {
                if(!this.validateTitle()) return false;
                if(this.$gapi.isAuthenticated())
                {
                    this.$getGapiClient().then(gapi => {
                        let googleCalendarAPI = new GoogleCalendarAPI(gapi.client);
                        googleCalendarAPI.addEventsToCalendar(this.title, this.repetitionDates);
                    });
                }
                else
                {
                    this.$gapi.login(this.saveEventsToCalendar);
                }
            },
            validateTitle()
            {
                if(!this.title)
                {
                    this.$emit("titleNotValid");
                    return false;
                }
                this.$emit("titleValid");
                return true;
            }
        }
    }
</script>
