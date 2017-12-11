<template>
    <div>
<<<<<<< HEAD
      <label>{{msg}}</label>
      <br>
      <label>The hard level received by board is {{hard_level}}</label>
      <br>
      <label>{{board_img}}</label>
=======
>>>>>>> 512124ca7df7e6e2a20a13fcd79d29dee977c04d
      <div class="board-row">
        <template v-if="hard_level === 12">
          <h1>Current level: difficult</h1>
        </template>
        <square v-for="img in parentMsg" :key="img" :img_src="img"></square>
      </div>
    </div>

</template>

<script>
import square from './square'

export default {
  name: 'Board',
<<<<<<< HEAD
  props: {
      hard_level: null,
      board_img: Array

  },

=======
  props: {'hard_level':Number},
>>>>>>> 512124ca7df7e6e2a20a13fcd79d29dee977c04d
  data () {
    return {
      parentMsg:["./static/pokemons/004-charmander@3x.png", 
                "./static/pokemons/007-squirtle@3x.png",
                "./static/pokemons/006-charizard@3x.png",
                "./static/pokemons/016-pidgey@3x.png"]
    }
  },
  components: {
    square
<<<<<<< HEAD
=======
  },
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
    }*/
>>>>>>> 512124ca7df7e6e2a20a13fcd79d29dee977c04d
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