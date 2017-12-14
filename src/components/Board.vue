<template>
    <div>
      <div class="board-row">
        <template v-if="hard_level === 12" ref="input">
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
                  :class="matchedItems[key]"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 16" ref="input">
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
                  :class="matchedItems[key]"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="8"/>
          </sui-grid>
        </template>

        <template v-if="hard_level === 20" ref="input">
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
                  :class="matchedItems[key]"
                >
                </square>
              </sui-grid>
            </sui-grid-column>
            <sui-grid-column :width="6"/>
          </sui-grid>
        </template>
        <template v-if="hard_level === 36" ref="input">
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
                  :class="matchedItems[key]"
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
      board_img: Array,
      time_left: Number,
      local_interval_id: Number
  },

  data () {
    return {
      firstImgIdx: null,
      firstElementId: null,
      matchedItems: [],
      square_matched: 0
    }
  },

  watch: {
    '$props':{
      handler: function (val, oldVal) { 
        //console.log('local time left ', val.time_left);
        if(val.time_left <= 0){
          this.$emit('input', "Sorry! Time Out! You lose the game :(");
          $('.ui.dimmer').dimmer('show');
        }
      },
      deep: true
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
            this.square_matched = this.square_matched+2;
            $('#'+this.firstElementId).animate({opacity: 0.0}, 1200);
            $('#'+key).animate({opacity: 0.0}, 1200);
            //unbind click event for matched items
            this.$set(this.matchedItems, this.firstElementId, "disabled");
 -          this.$set(this.matchedItems, key, "disabled");
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

          //console.log(this.square_matched);
          //console.log(this.local_interval_id);
          if(this.square_matched == this.hard_level)
            {this.$emit('input', "Congratulations!!! You won the game! :)");
            clearInterval(this.local_interval_id);
            $('.ui.dimmer').dimmer('show');
          }
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
.disabled {
  pointer-events: none;
}
</style>