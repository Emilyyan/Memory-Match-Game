<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input id="hardLevel" name="hardLevel" v-model="hardLevel"></input>
    <button v-on:click="set_level(hardLevel)">Submit hardLevel</button>
    <Board :hard_level ="hardLevel">
    </Board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  name: 'app',
  data () {
    return {
      hardLevel: 12
    }
  },

  components: {
    Board
  },
  
  methods: {
    set_level: function (hardLevel) {
      return this.hardLevel === hardLevel;
     }
  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
