<script setup lang="ts">
import {  onMounted } from 'vue'
import { mountEditor } from './components/EmailEditor'

onMounted(()=>{
  mountEditor('editor-root')
})

</script>

<template>
  <div id="editor-root"></div>
</template>

<style scoped>

</style>
