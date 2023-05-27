<script setup lang="ts">
import { Event } from '~/types';
import { useScroll, useIntersectionObserver, useElementBounding, useEventListener } from '@vueuse/core';
const events: Event[] = [
    {
        title: "Best Landscape Photographer",
        year: "2019",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        cover: "/img/me/2.webp"
    },
    {
        title: "Best Portrait Photographer",
        year: "2018",
        description: "Lorem ipsum dolor sit amet.",
        cover: "/img/court-1/cover.webp"
    }, 
    {
        title: "Best Travel Photographer",
        year: "2017",
        description: "Lorem ipsum dolor sit amet.",
        cover: "/img/musa/cover.webp"
    }
]
const activeIndex = ref(null);
const box = ref<any>(null);
const eventbox = ref<any>(null);
const textbox = ref(null)

const offsets = ref({});
const onMove = ({ xax, yax, index }: {xax: any, yax: any, index: number}) => {
  offsets.value[index] = { xax, yax };
};
const isIntersecting = ref(false)
useIntersectionObserver(eventbox,(val)=>{
    isIntersecting.value = val[0].isIntersecting
    console.log(val[0].isIntersecting)
})
const {width} = useElementBounding(textbox)
const moveLeft = ref(0)
const offsetLeft = computed(() => {
    return `-${moveLeft.value}%`
})
onMounted(() => {
    const {y} = useScroll(window)
    useEventListener("scroll",(e) =>{
        if(isIntersecting.value){
            moveLeft.value = Math.abs(((y.value - width.value) / y.value) * 100)
            // console.log(moveLeft.value)
        }
        // console.log(isActive.value)
    })
})
</script>
<template>
    <div class="" ref="eventbox">
        <div class="my-20 overflow-clip w-full relative ">
            <div class="inline-flex gap-x-4 marquee-child " ref="textbox">
                <p v-for="n in 10" class="uppercase tracking-widest text-8xl font-bold text-zinc-900 dark:text-white">
                    Events
                </p>
            </div>
            <div class="flex gap-x-4 marquee-child-right ">
                <p v-for="n in 10" class="uppercase flip tracking-widest text-8xl font-bold text-zinc-900 dark:text-white">
                    Events
                </p>
            </div>
        </div>
        <ul @mouseenter="box.animateIn" @mouseleave="box.animateOut" class="space-y-4">
            <EventItem v-for="(item, index) in events" :key="index" :title="item.title" :year="item.year"
                :description="item.description" :index="index"
            @enter="activeIndex = $event"
            @move="onMove" />
        </ul>
        <div class="my-20 overflow-clip w-full relative">
            
            <div class="flex gap-x-4 marquee-child-right">
                <p v-for="n in 10" class="uppercase flip tracking-widest text-8xl font-bold text-zinc-900 dark:text-white">
                    AWARDS
                </p>
            </div>
            <div class="flex gap-x-4 marquee-child">
                <p v-for="n in 10" class="uppercase tracking-widest text-8xl font-bold text-zinc-900 dark:text-white">
                    AWARDS
                </p>
            </div>
        </div>
        <EventBox
            ref="box"
            :events="events"
            :activeIndex="activeIndex"
            :offsets="offsets"
        />
    </div>
</template>
<style scoped>
.flip {
    transform: scale(-1, 1);
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
}
.marquee-child{
    /* position: absolute; */
    width: 100%;
    height: 100%;
    margin: 0;
    /* line-height: 50px; */
    text-align: center;
    /* -moz-transform: translateX(100%); */
    /* -webkit-transform: translateX(100%); */
    transform: translateX(v-bind(offsetLeft));
    /* -moz-animation: scroll-left 2s ease-in-out infinite;
    -webkit-animation: scroll-left 2s ease-in-out infinite;
    animation: scroll-left 20s ease-in-out infinite;
    animation-fill-mode: forwards; */
}
.marquee-child-right{
    width: 100%;
    height: 100%;
    text-align: center;
    /* -moz-transform: translateX(100%); */
    /* -webkit-transform: translateX(100%); */
    /* transform: translateX(100%); */
    /* -moz-animation: scroll-right 2s ease-in-out infinite;
    -webkit-animation: scroll-right 2s ease-in-out infinite;
    animation: scroll-right 20s ease-in-out infinite;
    animation-fill-mode: forwards; */
}
@keyframes scroll-left {
    0% {
        -moz-transform: translateX(0%);
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }
    100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
}
@keyframes scroll-right {
    0%,100% {
        -moz-transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }
    60% {
        -moz-transform: translateX(0%);
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }
}
</style>