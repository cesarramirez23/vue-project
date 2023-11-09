<template>
    <header class="flex justify-between">
        <div>
            <button 
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            :disabled="!team.spotsRemaining"
            @click="$emit('add')"
            >Add Member ({{ team.spotsRemaining}} spots left)</button>
        </div>

        <Teleport to="body">
            <Modal :show="showModal" @close="showModal = false">
                <!--<template #header>
                    <h1>Header Slot</h1>
                </template>-->
                <template #default><!--default body-->            
                    <p>Need to add a new member to your team?</p>                    
                    <form class="mt-6">
                        <div class="flex gap-2">
                            <input type="email" placeholder="Email address" class="flex-1">
                            <button >Add</button>
                        </div>
                    </form>
                </template>
            </Modal>
        </Teleport>

    </header>
</template>


<script setup>
    /*defineProps({
        team: Object,
    })*/
    import { useTeamStore } from "@/stores/TeamStore.js";
    let team = useTeamStore();
    team.fill();

    import Modal from "@/components/Modal.vue";
    import { ref } from "vue";
    let showModal = ref(false);
</script>

