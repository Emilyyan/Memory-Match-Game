<template>
    <div>
      <label>{{msg}}</label>
      <div class="board-row">
        <square v-bind:img_src="parentMsg[0]"></square>
        <square v-bind:img_src="parentMsg[1]"></square>
        <square v-bind:img_src="parentMsg[2]"></square>
      </div>
    </div>

</template>

<script>
import square from './square'

export default {
  name: 'Board',
  data () {
    return {
      msg: 'Welcome to board component',
      parentMsg:['https://pbs.twimg.com/profile_images/936736533457002496/d9vv-4Yn_400x400.jpg', 
                'https://i.pinimg.com/736x/83/72/12/837212dd8b71f9b5d175ac98f2c7668a--pikachu-tail-pokemon.jpg',
                'https://i.pinimg.com/736x/d3/9b/39/d39b3927b6ea9146cf19596ecbbb92bf--pokemon-lol-pokemon-starters.jpg']
    }
  },

  components: {
    square
  }
}
</script>

<style scoped>
.board-row:after {
  clear: both;
  content: "";
  display: table;
}
</style>