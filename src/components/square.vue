<template>
    <sui-grid-column>
      <div class="card" :id="id" @click="$emit('handleClick',num,id)">
        <div class="front">
          <sui-image :src="back_img_path" size="tiny" class="rounded"/>
        </div>
        <div class="back">
          <sui-image :src="img_src" size="tiny" class="rounded"/>
        </div>
      </div>   
    </sui-grid-column>
</template>

<script>
export default {
  name: 'square',
  props:{
    img_src_idx: Number,
    id: Number,
    num: Number
  },
  data(){
    return{
      back_img_path: "./static/question.png"
    }
  },
  mounted(){
    $(".card").flip();
  },
  methods: {
    flip: function() {
      $("#"+this.key).flip('toggle');
    }
  },
  computed: {
    img_src(){
      return "./static/pokemons/"+this.img_src_idx+".png";
    }
  }
}
</script>

<style scoped>
.card{
  width:100%;
  height:76.78px;
  cursor:pointer;
}
.card .front{
  background: #ffbaba;
  border-radius: 0.8rem;
}
.card .back{
  background: #d6f6ff;
  border-radius: 0.8rem;
}

</style>