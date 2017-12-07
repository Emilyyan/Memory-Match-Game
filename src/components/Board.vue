<template>
    <div>
      <label>{{msg}}</label>
      <square></square>
    </div>

</template>

<script>
import square from './square.vue'

export default {
  name: 'Board',
  data () {
    return {
      msg: 'Welcome to board component'
    }
  },
  components: {
    square
  }
}
</script>