<template>
    <div class="modal fixed -translate-y-1/2 -translate-x-1/2 top-[50%] left-[50%] z-50 bg-white w-[80vw] border-2 border-[#ddd] fixed  md:h-[80vh]"
        v-if="isModalOpen">
        <div class="p-10">
            <div class="flex justify-between">
                <h1 class="text-2xl leading-8 w-full text-center text-[#4F4F4F]"> Channel Performance</h1>
                <svg class="cursor-pointer" @click="close" width="13" height="13" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
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

            <div class="flex items-center justify-center mt-10 font-['Soleil']">
                <div class="w-[40%] ">
                    <div v-for="p in predictionResults" class="flex  w-full items-center mb-5">
                        <h1 class="text-lg mx-1 w-1/3 uppercase">{{ p.name }}</h1>
                        <div v-if="p.predictions[0] == 1"
                            class="w-2/3 h-6 overflow-hidden border border-slate-400 relative rounded-lg animated-progress progress-blue">
                            <span class="bg-blue-500 h-full block  absolute text-end pr-1 text-[#FBFBFB]"
                                :style="'width: ' + p.confidence + '%'">
                                {{ p.confidence }}%</span>

                        </div>

                        <div class="w-2/3" v-else>
                            <p class="text-red-400">Channel is unfit for lending</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-20">

                The policy is the telco with higher recall can lend more comfortably
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { AxiosResponse } from 'axios';
import type { PropType } from 'vue';

const props = defineProps({
    predictionResults: {
        type: Object as PropType<AxiosResponse>,
        required: false
    },
    isModalOpen: {
        type: Boolean as PropType<boolean>,
        required: false
    }
})


const emit = defineEmits<{
    (e: 'modalStateChange'): void,
}>()

const close = () => {
    emit('modalStateChange')
}

</script>

<style></style>
