<script setup>
    import {ref} from "vue";
    const props = defineProps({
        imgs:  Array,
    });

    let currentIndex = 0;
    let currentImg = ref("https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o");
    let show = ref(false);

      // called when the enter transition has finished.
    function onAfterEnter() {
      console.log("onAfterEnter");
      currentIndex +=1;
      currentImg.value = props.imgs[currentIndex];
        show.value = !show.value;    
    }

    // called before the element is inserted into the DOM.
    // use this to set the "enter-from" state of the element
    function onBeforeEnter() {
        //el.style.opacity =0;
    }

    // called when the leave transition has finished and the
    // element has been removed from the DOM.
    function onAfterLeave() {
    console.log("onAfterLeave");
        //imgs.value = "https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png";
    }

</script>

<template>
    <div class="btn-container" style=" position: relative; ">
      <img v-bind:src="currentImg" class="mt-2" style=" margin: 0%; display: block;"/>    
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
      
    </div> 
</template>