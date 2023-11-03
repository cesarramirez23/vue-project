

<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">{{ team.spotsRemaining }} Member Team</h5>
    </footer>
</template>

<script setup>
/*defineProps({
    team: Object
})*/
    import { useTeamStore } from "@/stores/TeamStore.js";
    let team = useTeamStore();
    team.fill();
</script>