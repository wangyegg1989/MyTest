<template>
  <div class="main">
    {{msg}}
    <HelloWorld :title1="childMsg1" :title2="childMsg2" @showInfo="showInfo"></HelloWorld>
  </div>
</template>

<script>
import Person from '@/commonjs/person';
import HelloWorld from '@/components/HelloWorld';
export default {
  name: 'Index',
  data() {
    return {
      msg: '哈实打实大稍等哈稍等哈好的哈',
      childMsg1: '哈哈还是撒黑社会11111',
      childMsg2: '哈哈还是撒黑社会22222'
    };
  },
  components: {
    HelloWorld
  },
  mounted () {
    let p1 = new Person('小明', '1');
    this.msg = p1.say();
    setTimeout(() => {
      p1 = new Person('小明', '2');
      this.msg = p1.walk();
    }, 3000);
  },
  methods: {
    showInfo(msg){
      alert(msg);
    }
  },
};
</script>

<style scoped>
</style>
