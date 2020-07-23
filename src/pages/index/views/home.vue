<template>
  <div class="home">
    <ul>
      <li class="title">首页</li>
      <li>
        <cube-button :primary="true" @click="goActiveHandle">Primary Button</cube-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneHeight: 0
    };
  },
  mounted() {},
  methods: {
    goActiveHandle(){
      location.href='/activity'
    }
  }
};
</script>
<style lang="scss" scoped>
.title{
  text-align: center;
  background: $color-highlight;
  font-size: 75px;
}

</style>
