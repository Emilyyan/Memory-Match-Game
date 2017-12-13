<template>
    <div>
      <div class="board-row">
        <template v-if="hard_level === 12">
          <sui-grid class="container">
            <sui-grid-column :width="8">
              <sui-grid :columns="4">
                <square 
                  v-for="(idx,key) in board_img" 
                  :id="key" 
                  :num="idx" 
                  :key="key" 
                  :img_src_idx="idx" 
                  @handleClick="tryMatch"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 16">
          <sui-grid class="container">
            <sui-grid-column :width="8">
              <sui-grid :columns="4">
                <square 
                  v-for="(idx,key) in board_img" 
                  :id="key" 
                  :num="idx" 
                  :key="key" 
                  :img_src_idx="idx"
                  @handleClick="tryMatch"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 20">
          <sui-grid class="container">
            <sui-grid-column :width="10">
              <sui-grid :columns="5">
                <square 
                  v-for="(idx,key) in board_img" 
                  :id="key" 
                  :num="idx" 
                  :key="key" 
                  :img_src_idx="idx"
                  @handleClick="tryMatch"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="6"/>
          </sui-grid>
        </template>
        <template v-if="hard_level === 36">
          <sui-grid class="container">
            <sui-grid-column :width="12">
              <sui-grid :columns="6">
                <square 
                  v-for="(idx,key) in board_img" 
                  :id="key" 
                  :num="idx" 
                  :key="key" 
                  :img_src_idx="idx"
                  @handleClick="tryMatch"
                >
                </square>
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
            //fade out animation in 1200ms
            $('#'+this.firstElementId).animate({opacity: 0.0}, 1200);
            $('#'+key).animate({opacity: 0.0}, 1200);
          }  
          else{
            var firstID = this.firstElementId;
            setTimeout(function(){ 
              //console.log(this.firstElementId);
              //flip both cards back
              $("#"+firstID).flip(false);
              $("#"+key).flip(false); 
            }, 500);
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
</style>