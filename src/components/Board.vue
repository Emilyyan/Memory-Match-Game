<template>
    <div>
      <label>The hard level received by board is {{hard_level}}</label>
      <br>
      <label>{{board_img}}</label>
      <div class="board-row">
        <template>
          <h1>Current level: difficult</h1>
          <square v-for="idx in board_img" :id="idx" :img_src_idx="idx"></square>
        </template>
        
      </div>
    </div>

</template>

<script>
import square from './square'

export default {
  name: 'Board',
  props: {
      hard_level: Number,
      board_img: Array

  },

  data () {
    return {
      /*sample image route: "./static/pokemons/1.png" */
      sqrArr:[1,2,3,4,5,6,2,5,3,4,6,1]
    }
  },
  components: {
    square
  }
  /*,
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  },
  computed: {
    
    /*initBoard(){
        var block;
        switch(this.hard_level){
          case 12:
            block = `
              <square v-bind:img_src="parentMsg[2]"></square>
            `;
            break;
          case 1: 
          block = `
              <hr>haha<br/>
            `;
            break;
          case 2: 
          block = `
              <hr>haha<br/>
            `;
            break;
          case 3: 
          block = `
              <hr>haha<br/>
            `;
            break;
       }
       return block;
    }
  }*/
}
</script>

<style scoped>
.board-row:after {
  clear: both;
  content: "";
  display: table;
}
</style>