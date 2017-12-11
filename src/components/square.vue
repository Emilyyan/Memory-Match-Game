<template>
<!--
  <div>
    <img class="squareclass" :src="img_src" alt="Pokémon" />
  </div>
-->
  <div>
      <sui-image :src="img_src" size="tiny" /> 
  </div>
 
</template>

<script>
export default {
  name: 'square',
  props:{
    img_src: String,
    id: null
  },
  methods: {
    loadImg: function () {
      //console.log(this.img_src);
      return 1;
    }
  }
}
</script>

<style scoped>
.squareclass {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 80px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 80px;
}
</style>