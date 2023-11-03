<template>
    <header class="flex justify-between">
        <div>
            <button 
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            :disabled="!team.spotsRemaining"
            @click="$emit('add')"
            >Add Member ({{ team.spotsRemaining}} spots left)</button>
        </div>
    </header>
</template>


<script setup>
    /*defineProps({
        team: Object,
    })*/
    import { useTeamStore } from "@/stores/TeamStore.js";
    let team = useTeamStore();
    team.fill();
</script>

