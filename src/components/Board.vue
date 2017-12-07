<template>
    <div>
      <label>{{msg}}</label>
      <square v-bind:img_src="parentMsg"></square>
    </div>

</template>

<script>
import square from './square.vue'

export default {
  name: 'Board',
  data () {
    return {
      msg: 'Welcome to board component',
      parentMsg:'https://i.pinimg.com/736x/d3/9b/39/d39b3927b6ea9146cf19596ecbbb92bf--pokemon-lol-pokemon-starters.jpg'
    }
  },
  
  components: {
    square
  }
}
</script>