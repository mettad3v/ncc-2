<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue';
import Loading from '@/components/Loading.vue';
import Footer from '@/components/Footer.vue';
import Error from '@/components/Error.vue';
import { provide, ref } from 'vue';

const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)


provide('isLoading', isLoading);
provide('hasError', hasError);

</script>

<template>
  <Error v-if="hasError" />
  <Loading v-if="isLoading" />

  <main>
    <div class="mx-6 md:mx-[5.4rem]">
      <header class="mt-[0.3rem]">
        <Navigation />
      </header>
    </div>

    <div class="mx-6 md:mx-[5.4rem]">
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="mt-10">
      <Footer />
    </div>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
