<template>
     <table class="table-fixed border-spacing-2 border-separate">
            <thead>
                <th class="text-left px-6 py-2">Name</th>
                <th class="text-left px-6 py-2">Email</th>
                <th class="text-left px-6 py-2">Status</th>
            </thead>
            
            <tbody>
                <TeamMember v-for="member in team.members" :name="member.name" :email="member.email" :status="member.status"/>
            </tbody>
        </table>
        <p class="text-right text-gray-100 py-4 italic" v-show="!team.spotsRemaining">There are no remaining team sports. Upgrade to add more.</p>
</template>


<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue"; 
    /*defineProps({
        team: Object
    });*/
    import { useTeamStore } from "@/stores/TeamStore.js";
    let team = useTeamStore();
    team.fill();
</script>