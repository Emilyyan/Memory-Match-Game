<template>
    <span>
        {{childtimer}} seconds
    </span>
</template>

<script>
export default {
    name: 'Countdown',
    props : {
        
    },
    data() {
        return {
            childtimer : 20
        }
    },

    methods: {
        sub_setTimer: function() {
            window.setInterval(() => { 
            if(this.childtimer>0){
                this.childtimer--; 
                console.log(this.childtimer);
                this.$emit('increment');
            }
        }, 1000);
        }

    }
}
</script>

<style scoped>
</style>