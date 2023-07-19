<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
  <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
    <Header />
    <div role="main" class="main-container container-fluid js-quickedit-main-content">
      <div class="row"><slot /></div>
    </div>
    <Footer />
  </div>
</template>
