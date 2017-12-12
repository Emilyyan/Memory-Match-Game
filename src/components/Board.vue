<template>
    <div>
      <!--
      <label>The hard level received by board is {{hard_level}}</label>
      <br>

      <label>{{board_img}}</label>-->
      <div class="board-row">
        <template v-if="hard_level === 12">
          <sui-grid class="container">
            <sui-grid-column :width="8">
              <sui-grid :columns="4">
                <square v-for="(idx,key) in board_img" :id="key" :num="idx" :key="key" :img_src_idx="idx" @click.native="tryMatch(idx,key)" v-bind:class="matchedItems[key]"></square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 16">
          <sui-grid class="container">
            <sui-grid-column :width="8">
              <sui-grid :columns="4">
                <square v-for="(idx,key) in board_img" :id="key" :num="idx" :key="key" :img_src_idx="idx"></square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 20">
          <sui-grid class="container">
            <sui-grid-column :width="10">
              <sui-grid :columns="5">
                <square v-for="(idx,key) in board_img" :id="key" :num="idx" :key="key" :img_src_idx="idx"></square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="6"/>
          </sui-grid>
        </template>
        <template v-if="hard_level === 36">
          <sui-grid class="container">
            <sui-grid-column :width="12">
              <sui-grid :columns="6">
                <square v-for="(idx,key) in board_img" :id="key" :num="idx" :key="key" :img_src_idx="idx"></square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="4"/>
          </sui-grid>
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
      firstImgIdx: null,
      firstElementId: null,
      matchedItems: []
    }
  },

  methods: {
    tryMatch: function (idx, key) {
      if(!this.firstImgIdx){
        this.firstImgIdx = idx;
        this.firstElementId = key;
      }
      else if(this.firstImgIdx){
          if(this.firstImgIdx == idx && this.firstElementId != key){
            this.$set(this.matchedItems, this.firstElementId, "matched");
            this.$set(this.matchedItems, key, "matched");
          }  
          else{
            var firstID = this.firstElementId;
            setTimeout(function(){ 
              console.log(this.firstElementId);
              $("#"+firstID).flip('toggle');
              $("#"+key).flip('toggle'); 
            }, 800);
           
          }
          
          this.firstElementId = null;
          this.firstImgIdx = null;
          return;
      }
    }
  },

  components: {
    square
  }
}
</script>

<style scoped>
.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.matched{
  visibility: hidden
}
</style>