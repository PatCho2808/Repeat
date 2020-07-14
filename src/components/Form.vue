<template>
    <div>
        <b-form>
            <label>Title: </label>
            <b-form-input v-model="title" placeholder="How to fly"></b-form-input>
            <small> It will be the name of the event in the calendar </small>
            <br>
            <br>
            <label> When did you learn that stuff: </label>
            <b-form-datepicker @input="computeRepetitions" v-model="initialDate" ></b-form-datepicker>
            <br>
            <br>
            <label> First repetition: </label>
            <b-form-datepicker v-model="repetitions[0]" ></b-form-datepicker>
            <br>
            <br>
            <label> Second repetition: </label>
            <b-form-datepicker v-model="repetitions[1]" ></b-form-datepicker>
            <br>
            <br>
            <label> Third repetition: </label>
            <b-form-datepicker v-model="repetitions[2]" ></b-form-datepicker>
            <br>
            <br>
            <label> Fourth repetition: </label>
            <b-form-datepicker v-model="repetitions[3]" ></b-form-datepicker>
            <br>
            <br>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data: function(){
            return {
                title: null,
                initialDate: new Date(),
                repetitions: []
            }
        },
        methods: {
          computeRepetitions: function(){
              this.repetitions = [];
              for(let i=0; i<4; i++){
                  this.repetitions.push(new Date(this.initialDate));
              }
              this.repetitions[0].setDate(this.repetitions[0].getDate() + 1);
              this.repetitions[1].setDate(this.repetitions[1].getDate() + 10);
              this.repetitions[2].setDate(this.repetitions[2].getDate() + 30);
              this.repetitions[3].setDate(this.repetitions[3].getDate() + 60);
          }
        },
        mounted: function(){
            this.computeRepetitions();
        }
    }
</script>