<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const router = useRouter()
let isNavHidden = ref<boolean>(true)
const toggleNav = () => {
    isNavHidden.value = !isNavHidden.value
}

</script>
<template>
    <nav class="flex justify-between items-center ">
        <div v-if="route.path !== '/'" class="block md:hidden">
            <svg @click="router.go(-1)" width="18" height="12" viewBox="0 0 18 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L1 6M1 6H17M1 6L6 11" stroke="#212135" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

        </div>
        <div class=" text-center md:text-left ">
            <h1 class="text-[1.375rem] md:text-base leading-8 ">

                <router-link to="/"><img class="md:w-24 md:h-24 h-20 w-20"
                        src="@/assets/images/logo-transparent.png" /></router-link>
            </h1>
        </div>
        <div class="block md:hidden " @click="toggleNav">
            <svg v-if="isNavHidden" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.967879 1.00003C0.702663 1.01356 0.453682 1.13189 0.27571 1.32899C0.0977382 1.52609 0.005353 1.78581 0.018879 2.05103C0.0324051 2.31625 0.150734 2.56523 0.347835 2.7432C0.544935 2.92117 0.804662 3.01356 1.06988 3.00003H14.9299C15.1951 3.00003 15.4494 2.89467 15.637 2.70714C15.8245 2.5196 15.9299 2.26525 15.9299 2.00003C15.9299 1.73481 15.8245 1.48046 15.637 1.29292C15.4494 1.10539 15.1951 1.00003 14.9299 1.00003H1.06988C1.03657 0.998362 1.00319 0.998362 0.969879 1.00003H0.967879ZM0.967879 7.00003C0.702663 7.01356 0.453682 7.13189 0.27571 7.32899C0.0977382 7.52609 0.005353 7.78581 0.018879 8.05103C0.0324051 8.31625 0.150734 8.56523 0.347835 8.7432C0.544935 8.92117 0.804662 9.01356 1.06988 9.00003H14.9299C15.1951 9.00003 15.4494 8.89467 15.637 8.70714C15.8245 8.5196 15.9299 8.26525 15.9299 8.00003C15.9299 7.73481 15.8245 7.48046 15.637 7.29292C15.4494 7.10539 15.1951 7.00003 14.9299 7.00003H1.06988C1.03657 6.99836 1.00319 6.99836 0.969879 7.00003H0.967879ZM0.967879 13C0.702663 13.0136 0.453682 13.1319 0.27571 13.329C0.0977382 13.5261 0.005353 13.7858 0.018879 14.051C0.0324051 14.3162 0.150734 14.5652 0.347835 14.7432C0.544935 14.9212 0.804662 15.0136 1.06988 15H14.9299C15.1951 15 15.4494 14.8947 15.637 14.7071C15.8245 14.5196 15.9299 14.2652 15.9299 14C15.9299 13.7348 15.8245 13.4805 15.637 13.2929C15.4494 13.1054 15.1951 13 14.9299 13H1.06988C1.03657 12.9984 1.00319 12.9984 0.969879 13H0.967879Z"
                    fill="url(#paint0_linear_157_1269)" />
                <defs>
                    <linearGradient id="paint0_linear_157_1269" x1="-1.46848" y1="-2.25181" x2="20.4761" y2="0.0803498"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2297EB" />
                        <stop offset="1" stop-color="#9B57D6" />
                    </linearGradient>
                </defs>
            </svg>

            <svg v-else width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19727 1.19702L11.8033 11.803M1.19727 11.803L11.8033 1.19702L1.19727 11.803Z"
                    stroke="url(#paint0_linear_198_562)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_198_562" x1="0.206763" y1="-1.26509" x2="14.8704" y2="0.106262"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2297EB" />
                        <stop offset="1" stop-color="#9B57D6" />
                    </linearGradient>
                </defs>
            </svg>


        </div>

        <div class="hidden  md:block">
            <ul class="list-reset flex items-center ">
                <li class="mx-7 text-sm text-[#BDBDBD]">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="mx-7 text-sm text-[#BDBDBD]">
                    <router-link to="/model-utilization">Model Utilization</router-link>
                </li>
                <li class="mx-7 text-sm text-[#BDBDBD]">
                    <router-link to="/upload-article">Upload Article</router-link>
                </li>
                <li class="mx-7 text-sm text-[#BDBDBD]">
                    <router-link to="/about">About Us</router-link>
                </li>
                <li class="mx-7 text-sm text-[#BDBDBD]">
                    <router-link to="/resources">Resources</router-link>
                </li>
                <li class="mx-3">
                    <button class="rounded btn-primary px-5 py-3 w-40 font-['Soleil'] text-sm text-white">Train ML</button>
                </li>
            </ul>
        </div>

    </nav>
    <div class="bg-white h-screen w-full pt-[72px] absolute z-30" :class="{ hidden: isNavHidden }">
        <ul class="list-reset flex flex-col items-center" @click="toggleNav">
            <li class="my-4 text-sm  text-[#BDBDBD]">
                <router-link class="leading-[18px]" to="/model-utilization">Model Utilization</router-link>
            </li>
            <li class="my-4 text-sm  text-[#BDBDBD]">
                <router-link class="leading-[18px]" to="/upload-article">Upload Article</router-link>
            </li>
            <li class="my-4 text-sm  text-[#BDBDBD]">
                <router-link class="leading-[18px]" to="/about">About Us</router-link>
            </li>
            <li class="my-4 text-sm  text-[#BDBDBD]">
                <router-link class="leading-[18px]" to="/resources">Resources</router-link>
            </li>
            <li class="my-4">
                <button class="rounded btn-primary font-bold px-5 py-3 w-40 font-['Soleil'] text-sm text-white">Train
                    ML</button>
            </li>
        </ul>
    </div>
</template>

<style></style>