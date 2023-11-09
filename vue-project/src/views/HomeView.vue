<script setup>
  import Slide from "@/components/SlideComponent.vue";
//import {ref } from "vue";
  /*let show = ref(false);
  let timeStart = ref(4000);
  let strStart = computed(()=>{
    return "transition duration-"+ timeStart.value ;
  });*/
  let imgsStr = [
    "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
    "https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
  ];



</script>

<template>
  <main>
    <Slide :imgs="imgsStr" style="width: 300px;height: 300px;"></Slide>
  <!--<button @click="show = !show">Toggle</button>-->
    <!--<div class="btn-container" style="width: 100%; height:100% ; position: relative; ">
      <img v-bind:src="imgs" class="mt-2" style=" margin: 0%; display: block;"/>    
      <Transition
        @after-enter="onAfterEnter"
        @after-leave="onAfterLeave"
        @before-enter="onBeforeEnter"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition duration-1000"
        leave-active-class="transition duration-1000"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="show" style="background-color: black;width: 100%; height: 100%;bottom: 0;  position: absolute;"/>      
      </Transition>
    </div> -->


  </main>
</template> 