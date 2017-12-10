<template>
  <div id="app">
    <div class="start-interface">
      <sui-grid
        class="container"
      >
        <sui-grid-column>
          <!--
            <input id="hardLevel" name="hardLevel" />
            <sui-button v-on:click="set_level(hardLevel)" primary>Submit hardLevel</sui-button>
          -->
          <!--=======Dropdown menu to start game========-->
          <sui-dropdown
            class="labeled teal icon"
            icon="game"
            :button="true"
            text="Start Game"
            v-model="hardLevel"
          >
            <sui-dropdown-menu>
              <sui-dropdown-item>
                <sui-label color="teal" class="empty circular"/>
                Easy
              </sui-dropdown-item>
              <sui-dropdown-item class="selected">
                <sui-label color="blue" class="empty circular"/>
                Medium
              </sui-dropdown-item>
              <sui-dropdown-item>
                <sui-label color="yellow" class="empty circular"/>
                Difficult
              </sui-dropdown-item>
              <sui-dropdown-item>
                <sui-label color="red" class="empty circular"/>
                Expert
              </sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
          <!--===========Dropdown menu ends============-->
        </sui-grid-column>
      </sui-grid> 
    </div>

    <sui-grid
      class="container"
      divided
    >
  
      <sui-grid-column 
        :width="4"
      >
          
        <!--===Count down to Dec 25, 2017===-->
        <sui-grid-row>
          <b>Time:</b> <Timer date="Dec 25, 2017"/>
        </sui-grid-row>
        <sui-grid-row>
          <b>Current level:</b> {{hardLevel}}
        </sui-grid-row>
      </sui-grid-column>
      <sui-grid-column :width="12">
        <Board :hard_level ="hardLevel"/>
      </sui-grid-column>
    </sui-grid>
    
    <div class="end-interface">
      <sui-grid 
        class="container"
        :width="1"
      >
        <sui-grid-column
        >
          You won/lose!
        </sui-grid-column>    
      </sui-grid>
    </div>
  </div>
</template>

<script>
import Board from './components/Board'
import Timer from './components/Timer'

export default {
  name: 'app',
  data () {
    return {
      hardLevel: 12
    }
  },

  components: {
    Board, Timer
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
  color: #2c3e50;
  margin-top: 15px;
}
</style>
