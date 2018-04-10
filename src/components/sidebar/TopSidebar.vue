<template lang="html">
  <sui-sidebar v-bind:class="'inverted'" :animation=sidedbarAnimation :direction=sidebarDirection :visible=isVisible :width=sidebarWidth id="sidebarInner">
    <sui-header size="large" :dividing=true id="sidebarHeader">{{headerText}} - {{user.uid}}</sui-header>
    <!-- <input v-model="backgroundColor" v-on:change="setBackground" value="51" placeholder="Canvas Background"> -->
  </sui-sidebar>
</template>

<script>
let P5 = window.P5

export default {
  name: 'top-sidebar',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  data () {
    return {
      isVisible: true,
      sidedbarAnimation: 'push',
      sidebarDirection: 'top',
      sidebarWidth: 'very wide',
      headerText: 'P5 Gooey'
    }
  },
  methods: {}
}
</script>

<style lang="css">
#sidebars #topSidebar {
  background: #444;
  color: #fff;
  padding:10px;
}

</style>
