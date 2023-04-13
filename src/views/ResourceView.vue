<template>
    <section v-if="loaded" class="md:mt-20 mt-10">
        <h1 class="md:text-3xl text-lg text-center font-bold font-['Soleil']">{{ post.data.title }}</h1>
        <p class="md:text-xl text-base mt-1 font-medium text-center font-['Soleil']">By {{ post.data.author.first_name }} {{
            post.data.author.last_name }}
        </p>
        <p class="font-['Soleil'] text-center text-[#828282] text-sm">{{ formattedDate(post.data.published) }}</p>

        <div class="font-['Soleil'] mt-10 list" v-html="post.data.body"></div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, unref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { butterService } from '@/services/ButterCMSService';

const post = ref<any>([])
const loaded = ref(false)
const route = useRoute()

watch(() => route.params.slug, (postSlug) => getPost(postSlug))
const formattedDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);

    const options: any = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    const formattedDate = dateObj.toLocaleDateString("en-US", options)
        .replace(/(\d+)(st|nd|rd|th)/, "$1$2,"); // add commas after the day suffix

    return formattedDate
}

onMounted(() => getPost(route.params.slug))

async function getPost(postSlug: any) {
    loaded.value = false
    post.value = (
        await butterService.post.retrieve(postSlug)
    ).data
    console.log(post.value.data);

    document.title = unref(post).data.title
    loaded.value = true
}
</script>

<style scoped></style>