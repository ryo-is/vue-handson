<template lang="pug">
  v-container.home
    v-row(justify="center", align-content="center", style="height: calc(100vh - 200px);")
      v-col(cols=12)
        .display-1 Hello Vue
      v-col(cols=12)
        v-icon add
        v-icon mdi-mouse
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss"></style>
