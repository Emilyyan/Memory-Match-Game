<template>
    <span>
        {{ days | two_digits }} Days
        {{ hours | two_digits }} :
        {{ minutes | two_digits }} :
        {{ seconds | two_digits }} 
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
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    methods: {
        timer_loop() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            },1000);
        },
    },
    mounted() {
        this.timer_loop()
    },
    computed: {
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