<template>
    <div>
        <b-button v-if="!showText" @click="showText=true" pill>▼ Show info</b-button>
        <b-button v-if="showText" @click="showText=false" pill>▲ Hide info</b-button>
        <div v-if="showText">
            <p> To successfully remember something you need to repeat it. Otherwise our brains think it is not important
                enough to store it. Our memory is limited, so why store something that isn't useful? It is trying it best, but
                that is not what we want from it. So to point to it that this IS important, repeat, repeat and repeat.
                When to repeat? Exactly when you would forget it. Easy to say, right? So there was one this smart guy, called Piotr Wozniak, that came
                up with something called <i> forgetting curve </i>. According to him, you should repeat stuff that you learned
                after 1 day, 10 days, 30 days and 60 days. </p>
            <img id="curve" src="..\assets\forgettingcurve.jpg" alt="forgetting curve"/>
            <p> To make it easier for you, enter name of the topic and date when you learned something and this app will
                calculate when you should repeat it. But there is more! You can also click <i> Save to calendar </i> button
                and it will automatically add this to your calendar so you don't have to remember about it. Cool, am i right?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data: function(){
            return {
                showText: true
            }
        }
    }
</script>

<style>
    #curve
    {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>
