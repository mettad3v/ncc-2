<template></template>

<script setup lang="ts">
import { ref, onMounted, type PropType } from 'vue'
import { mtn } from '@/data'

const mtnData = ref(mtn)
const mtnState = ref<boolean>(false)

const toggle = () => {
    mtnState.value = !mtnState.value
}




</script>

<style></style>