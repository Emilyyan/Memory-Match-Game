<template>
    <div>
        <label>This is Square Component</label>
        <div>
          <img class="squareclass" v-bind:src="image_src" alt="Pokemon" />
        </div>
    </div>

</template>

<script>
export default {
  name: 'square'
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