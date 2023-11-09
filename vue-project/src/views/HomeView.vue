<script setup>
import { ref } from "vue";
  let show = ref(false);
  let imgs = ref("https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png");

  // called when the enter transition has finished.
  function onAfterEnter(el) {

    console.log("onAfterEnter");
    imgs.value= "https://media.geeksforgeeks.org/wp-content/uploads/20200318142254/html9.png";

  }


  // called when the leave transition has finished and the
  // element has been removed from the DOM.
  function onAfterLeave(el) {
    console.log("onAfterLeave");
    imgs.value = "https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png";
  }

</script>

<template>
  <main>
    

    <!--
    <div >
      <Transition >
          <button>But1</button>
        <button>But2</button>
        <button>But3</button>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png" />
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200318142309/php7.png" />
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200318142254/html9.png"  />
      </Transition>
    </div> 
  -->

  <button @click="show = !show">Toggle</button>
    <div class="btn-container" style="width: 768px; height:256px ; ">
      <img v-bind:src="imgs" class="mt-2" style="float:right; margin: 0%;"/>    
      <Transition
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"

      enter-from-class="scale-y-0"
       enter-to-class="scale-y-100"
       enter-active-class="transition duration-300"
       leave-active-class="transition duration-200"
       leave-from-class=" scale-y-100"
       leave-to-class=" scale-y-0"


      >
        <div v-if="show" style="background-color: red;width: 100%; height:100%; position:relative;"/>      
      </Transition>
    </div> 


    <img v-bind:src="imgs" />   

  </main>
</template> 