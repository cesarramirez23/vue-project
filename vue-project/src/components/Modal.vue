<script setup>
    defineProps({
        show: Boolean
    });
</script>

<template>
    <Transition
        enter-from-class="opacity-0 scale-125"
       enter-to-class="opacity-100 scale-100"
       enter-active-class="transition duration-300"
       leave-active-class="transition duration-200"
       leave-from-class="opacity-100 scale-100"
       leave-to-class=" opacity-0 scale-125"
    >
   <!--
       enter-from-class="transition duration-1000 opacity-0"
       enter-to-class="transition duration-1000 opacity-100"
       leave-from-class="transition duration-1000 opacity-100"
       leave-to-class="transition duration-1000 opacity-0"
       >
    -->
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <!--<header>
                    <slot name="header"> default header </slot>
                </header>-->
                
                <div>
                    <slot > defalt body</slot>
                </div>
                
                
                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')" > default Close Button</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>




<style>

.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 12px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}

.modal-footer button{
    background: #ddd;
    padding: .25rem .75rem;
    border-radius: 20px;
}

.modal-footer button:hover{
    background: #9e9b9b;
}
</style>
