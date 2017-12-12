<template>
    <span>
        <!--{{ days | two_digits }} Days
        {{ hours | two_digits }} :
        {{ minutes | two_digits }} :
        {{ seconds | two_digits }} -->
        <!--{{left_time}} seconds-->
    </span>
</template>

<script>
export default {
    name: 'Timer',
    props : {
        date : String
    },
    data() {
        return {
            startTime: 10,
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    methods: {
        /*timer_loop() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            },1000);
        },*/

        /*count_down() {
             window.setInterval(() => { 
                if(this.startTime>0){
                    this.startTime--; 
                    console.log(this.startTime);
                }
             }, 1000);
        }*/
        count_down() {
             window.setInterval(() => { 
                if(this.startTime>0){
                    this.startTime--; 
                    console.log(this.startTime);
                }
             }, 1000);
        }

    },

    mounted() {
        //this.count_down()
        //this.timer_loop()
    },
    computed: {
        left_time(){
            return this.startTime;

        },
        normalized(){
            return Math.trunc(Date.parse(this.date) / 1000);
        },
        seconds() {
    
            return (this.normalized - this.now) % 60;
        },

        minutes() {
            return Math.trunc((this.normalized - this.now) / 60) % 60;
        },

        hours() {
            return Math.trunc((this.normalized - this.now) / 60 / 60) % 24;
        },

        days() {
            return Math.trunc((this.normalized - this.now) / 60 / 60 / 24);
        }
    }
}
</script>

<style scoped>
</style>