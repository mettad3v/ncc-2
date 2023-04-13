<script setup lang="ts">
</script>

<template>
  <main class=" h-screen">
    <div class=" z-0 w-full h-screen md:flex hidden md:block  absolute">
      <div class="w-[40%] "></div>
      <div class="w-[60%] h-screen bg-cover bg-no-repeat bg-center bg-[url('@/assets/images/hero.png')]"></div>
    </div>
    <div class="z-10 pt-16 md:pt-[9.31rem] w-full md:w-[60%] ">
      <h1 class="text-[#4F4F4F] leading-8 md:leading-[4.18rem] font-normal text-xl  md:text-5xl">Machine Learning based
        <span class="text-[#2297EB]">channel
          utilization</span>
        system
      </h1>
      <h3 class="mt-6 leading-8 text-[#828282] font-['Soleil'] font-normal text-xl">A machine learning framework
        for
        cellular
        network(downlink)
        channel utilisation prediction system with up to 93.5% accuracy
      </h3>

      <div class="flex md:flex-row flex-col mt-8 md:mt-[0.219rem] w-full font-['Soleil']">
        <router-link to="/model-utilization">
          <button
            class="btn-primary w-full md:w-[13.6rem] md:h-12 h-14 text-white  p-3 rounded-sm text-base font-bold">Get
            Started</button>
        </router-link>
        <button class="ml-0 md:ml-4 md:mt-0 mt-2 flex justify-center items-center">
          <svg class="w-8 h-8 md:h-12 md:w-12" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.25" cy="26" r="25.5" fill="url(#paint0_linear_221_192)" />
            <path
              d="M20.2847 19.4789C20.2847 17.7469 22.1597 16.6644 23.6597 17.5304L35.1565 24.168C36.6565 25.034 36.6565 27.1991 35.1565 28.0651L23.6597 34.7028C22.1597 35.5688 20.2847 34.4863 20.2847 32.7542L20.2847 19.4789Z"
              fill="#6F6FDE" />
            <defs>
              <linearGradient id="paint0_linear_221_192" x1="0.749998" y1="-4" x2="62.625" y2="58.625"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#C6DFF8" />
                <stop offset="1" stop-color="#E5DFF7" />
              </linearGradient>
            </defs>
          </svg>
          <span class="ml-2 text-[#2297EB] leading-5 text-base font-bold">Watch how to use</span>
        </button>

        <div class="w-full block md:hidden h-[400px] bg-cover bg-no-repeat bg-[url('@/assets/images/hero.png')]">

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>