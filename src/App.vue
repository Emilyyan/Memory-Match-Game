<template>
  <div id="app">
    <div class="start-interface">
      <sui-grid
        class="container"
      >
        <sui-grid-column>
          <!--=======Dropdown menu to start game========-->
          <sui-dropdown
            class="labeled teal icon"
            icon="game"
            :button="true"
            text="Start Game"
          >
            <sui-dropdown-menu>
              <sui-dropdown-item 
                v-for="(option,index) in hardLevel"  
                :value="option.value" 
                :key="index" 
                @click.native="setLevel(index);setTimer()"
              >
                <sui-label :color="option.color" class="empty circular"/>
                {{ option.text }}
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
          <!--<b>Time:</b> <Timer date="Dec 25, 2017"/>-->
          <br><b>Time Left: </b>{{timer}} seconds
          <!--<Countdown></CountDown>-->
        </sui-grid-row>
        <sui-grid-row>
          <b>Current level:</b> {{selected[0]}}
        </sui-grid-row>
      </sui-grid-column>
      <sui-grid-column :width="12">
        <Board v-bind:hard_level ="selected[0]" v-bind:board_img ="img"/>
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
//import Countdown from './components/countdown'

export default {
  name: 'app',
  data () {
    return {
      selected:[],
      hardLevel: [
      { text: 'Easy', color:'teal', value: 12 },
      { text: 'Medium', color:'blue', value: 16 },
      { text: 'Hard', color:'yellow', value: 20 },
      { text: 'Expert', color:'red', value: 36 }
      ],
      img: [],
      timer: 20
    }
  },

  components: {
    Board, Timer /*, Countdown*/
  },
  
  methods: {
    setLevel: function (index) {
      this.selected = []; 
      this.selected.push(this.hardLevel[index].value);

      //generate shuffled img array
      let puzzleArr = [],
          i = 1

          for (i=0; i < this.selected[0]; i++) {
            puzzleArr.push(Math.floor(i/2)+1);
          }

          puzzleArr = puzzleArr.sort(() => {
              return Math.random() - 0.5
          });

          this.img = puzzleArr
    },

    setTimer: function() {
        window.setInterval(() => { 
          if(this.timer>0){
            this.timer--; 
          }
        }, 1000);
    }
  },
/*
    setTimer() {
      var child = this.$refs.Countdown;
      child.sub_setTimer();
    }
  }*/
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
