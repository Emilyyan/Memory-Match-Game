<template>
  <div id="app">
    <template v-if="showpage === 0">
      <div class="start-interface">
        <sui-grid
          class="container"
        >
          <sui-grid-column>
            <br/><br/>
            <sui-image size="large" :src="imgPath.logo"/>
            <h1>&nbsp;&nbsp;Memory Match</h1>
            <footer class="footer">
              <!--=======Dropdown menu to start game========-->
              <sui-dropdown
                class="labeled huge teal icon"
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
                    <sui-label :color="option.color" class="large empty circular"/>
                    <span class="h3">{{ option.text }}</span>
                  </sui-dropdown-item>
                </sui-dropdown-menu>
              </sui-dropdown>
              <!--===========Dropdown menu ends============-->
            </footer>
            
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
            <br>
            <span class="h2">
              <strong>Time Left: </strong>
            </span>
            <span class="digit">{{minutes}}:{{seconds}}</span>
          </sui-grid-row>
          <br/>
          <sui-grid-row>
            <span class="h2">
              <strong>Current Level: </strong>
            </span>
            <span class="level">{{parseLevel}}</span> 
          </sui-grid-row>
        </sui-grid-column>
        <sui-grid-column :width="12">
          <Board 
            :hard_level ="selected[0]" 
            :board_img ="img" 
            :time_left ="timer" 
            :local_interval_id ="interval_id" 
            v-model="resultInfo"
          />
        </sui-grid-column>
      </sui-grid>
    
      <div class="end-interface">
        <sui-grid 
          class="container"
          :width="1"
        >
          <sui-grid-column
          >
            <sui-button color="red" class="large" @click.native="showDimmer">End Game</sui-button>
          </sui-grid-column>    
        </sui-grid>
      </div>
    </template> 
      <sui-dimmer class="page" :inverted="false">
        <div class="content">
          <span class="result">{{resultInfo}}</span>
          <br/><br/><br/>
          <sui-button icon="undo" color="yellow" class="large" @click.native="dismissDimmer();toTitlePage()">Restart</sui-button>
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
      imgPath: {
        logo : "./static/logo.png"
      },
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
      resultInfo: ""
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
      this.resultInfo = "Oops. Is this too hard for you? ;)";
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
      clearInterval(this.interval_id);
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
      clearInterval(this.interval_id);
      $('.ui.dimmer').dimmer('show');
    },
    dismissDimmer: function(){
      $('.ui.dimmer').dimmer('hide');
    }
  },
  computed: {
    minutes: function(){
      let minutes = Math.trunc(this.timer / 60);
      return (minutes < 10 ? '0'+minutes : minutes);
    },
    seconds: function(){
      let seconds = this.timer % 60;
      return (seconds < 10 ? '0'+seconds : seconds);
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
@font-face {
  font-family: 'Digital Readout';
  src: url("./assets/fonts/SFDigitalReadout-Medium.ttf");
}
html, body {
  height: 100%;
  margin: 0;
}
h1{
  font-size: 4rem;
}
.h2{
  font-size: 1.8rem;
}
.h3{
  font-size: 1.3rem;
}
.result{
  font-size: 1.8rem;
}
.digit{
  font-size: 2.5rem;
  font-family: 'Digital Readout';
  background: lightblue;
  border-radius: 12px;
  padding: 0.5rem 0.5rem;
}
.level{
  font-size: 1.5rem;
  background: #fed603;
  border-radius: 12px;
  padding: 0.2rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
.start-interface{
  background-image: url('./assets/title.jpeg');
  background-repeat: repeat-x;
  background-size: auto 100%;
}
.footer {
  height: 55px;
  margin-top: 12%;
  padding-bottom: 30%;
}
</style>
