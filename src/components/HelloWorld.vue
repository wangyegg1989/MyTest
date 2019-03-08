<template>
  <div>
    <p @click="showMsg(title1)">{{title1}}</p>
    <p @click="showMsg(title2)">{{title2}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  props: ['title1','title2'],
  methods: {
    showMsg(msg){
      this.$emit('showInfo', msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
