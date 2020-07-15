<template>
    <div>
        <b-form>
            <label>Title: </label>
            <b-form-input :state="titleState"
                          v-model="title"
                          placeholder="How to fly"></b-form-input>
            <small> It will be the name of the event in the calendar </small>
            <br>
            <br>
            <label> When did you learn that stuff: </label>
            <b-form-datepicker @input="computeRepetitions" v-model="initialDate" ></b-form-datepicker>
            <br>
            <label> First repetition: </label>
            <b-form-datepicker v-model="repetitionDates[0]" ></b-form-datepicker>
            <br>
            <label> Second repetition: </label>
            <b-form-datepicker v-model="repetitionDates[1]" ></b-form-datepicker>
            <br>
            <label> Third repetition: </label>
            <b-form-datepicker v-model="repetitionDates[2]" ></b-form-datepicker>
            <br>
            <label> Fourth repetition: </label>
            <b-form-datepicker v-model="repetitionDates[3]" ></b-form-datepicker>
            <br>
        </b-form>
        <SaveToCalendar @titleNotValid="titleState=false"
                        @titleValid="titleState=true"
                        :repetitionDates="repetitionDates"
                        :title="title"></SaveToCalendar>
    </div>
</template>

<script>
    import SaveToCalendar from "@/components/SaveToCalendar";
    export default {
        name: "Form",
        components: {SaveToCalendar},
        data: function(){
            return {
                title: null,
                initialDate: new Date(),
                repetitionDates: [],
                titleState: false
            }
        },
        methods: {
          computeRepetitions: function(){
              this.repetitionDates = [];
              for(let i=0; i<4; i++){
                  this.repetitionDates.push(new Date(this.initialDate));
              }
              this.repetitionDates[0].setDate(this.repetitionDates[0].getDate() + 1);
              this.repetitionDates[1].setDate(this.repetitionDates[1].getDate() + 10);
              this.repetitionDates[2].setDate(this.repetitionDates[2].getDate() + 30);
              this.repetitionDates[3].setDate(this.repetitionDates[3].getDate() + 60);
          }
        },
        mounted: function(){
            this.computeRepetitions();
        }
    }
</script>