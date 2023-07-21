<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import AsyncHomepage from '../components/AsyncHomepage.vue'
import DynamicLayout from '../layouts/DynamicLayout.vue'

const count = ref(0)
let start = false
let time = 0

const channel = new MessageChannel()
const port = channel.port2

onMounted(() => {
  channel.port1.onmessage = () => {
    count.value = count.value + 1
    increment()
  }
})

function startCount() {
  if (count.value === 0) {
    time = Date.now()
    start = true
    increment()
  } else {
    count.value = 0
  }
}

function increment() {
  if (start) {
    if (Date.now() - time < 1000) {
      port.postMessage('')
    } else {
      start = false
    }
  }
}
</script>
<template>
  <DynamicLayout>
    <AsyncHomepage :count="count" @start="startCount" />
  </DynamicLayout>
</template>
