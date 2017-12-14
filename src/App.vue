<template>
  <div id="app">
    <template v-if="showpage === 0">
      <div class="start-interface">
        <sui-grid
          class="container"
        >
          <sui-grid-column>
            <!--=======Dropdown menu to start game========-->
            <sui-image size="medium" :src="logo"/>
            <h1>Memory Match</h1>
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
                  @click.native="setLevel(index);setTimer();toGamePage();reset()"
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
    </template>
    <template v-if="showpage === 1">
      <sui-grid
        class="container"
        divided
      >
        <sui-grid-column 
          :width="4"
        >  
          <sui-grid-row>
            <br><b>Time Left: </b>{{minutes}} : {{seconds}}
          </sui-grid-row>
          <sui-grid-row>
            <b>Current level:</b> {{parseLevel}}
          </sui-grid-row>
        </sui-grid-column>
        <sui-grid-column :width="12">
          <Board :hard_level ="selected[0]" :board_img ="img" :time_left ="timer" :local_interval_id ="interval_id" v-model="resultInfo"/>
        </sui-grid-column>
      </sui-grid>
    
      <div class="end-interface">
        <sui-grid 
          class="container"
          :width="1"
        >
          <sui-grid-column
          >
            <sui-button color="yellow" @click.native="showDimmer">End</sui-button>
          </sui-grid-column>    
        </sui-grid>
      </div>
    </template> 
      <sui-dimmer class="page" :inverted="false">
        <div class="content">
          {{resultInfo}}
          <br/><br/>
          <sui-button icon="undo" color="yellow" @click.native="dismissDimmer();toTitlePage()">Restart a game</sui-button>
        </div>
      </sui-dimmer>

  </div>
</template>

<script>

import Board from './components/Board'

export default {
  name: 'app',
  data () {
    return {
      logo:"./static/logo.png",
      showpage: 0,
      selected:[],
      hardLevel: [
      { text: 'Easy', color:'teal', value: 12 },
      { text: 'Medium', color:'blue', value: 16 },
      { text: 'Hard', color:'yellow', value: 20 },
      { text: 'Expert', color:'red', value: 36 }
      ],
      img: [],
      timer: 120,
      interval_id: null,
      resultInfo: "OOps. I know that's too hard for you ;)!!!"
    }
  },
  components: {
    Board
  },
  mounted(){
    $('.ui.dimmer').dimmer({
      closable: false
    });
  },
  methods: {
    reset: function(){
      this.timer = 120;
      this.resultInfo = "OOps. I know that's too hard for you ;)!!!";
    },
    setLevel: function (index) {
      this.selected = []; 
      this.selected.push(this.hardLevel[index].value);

      //generate shuffled img array
      let puzzleArr = [],
          i = 1;

          for (i=0; i < this.selected[0]; i++) {
            puzzleArr.push(Math.floor(i/2)+1);
          }

          puzzleArr = puzzleArr.sort(() => {
              return Math.random() - 0.5
          });

          this.img = puzzleArr;
    },

    setTimer: function() {
        this.interval_id = window.setInterval(() => { 
        if(this.timer>0){
          this.timer--; 
        }
      }, 1000);
    },
  
    toGamePage: function(){
      this.showpage = 1;
    },
    toTitlePage: function(){
      this.showpage = 0;
    },
    showDimmer: function(){
      $('.ui.dimmer').dimmer('show');
    },
    dismissDimmer: function(){
      $('.ui.dimmer').dimmer('hide');
    }
  },
  computed: {
    minutes: function(){
      return Math.trunc(this.timer / 60);
    },
    seconds: function(){
      return (this.timer % 60);
    },
    parseLevel: function(){
      switch(this.selected[0]){
        case 12:
          return 'Easy';
        case 16:
          return 'Medium';
        case 20:
          return 'Hard';
        case 36:
          return 'Expert';
      }
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
.start-interface{
  background-image: url('./assets/title.jpeg');
  background-size: auto 100%;
}
</style>
