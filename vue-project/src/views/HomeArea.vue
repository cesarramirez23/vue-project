
<script setup>
import TababableTextarea from  "@/components/TabbableTextarea.vue";
import { ref } from "vue";

let comment = ref('rest value');
</script>

<template>
    <main>
        <form>
            <!--<textarea ref="textArea" @keydown.tab="onTab" style="width: 100%; height: 300px;"> Hi</textarea>-->
            <TababableTextarea v-model="comment" style="width: 100%; height: 300px;"></TababableTextarea>
        </form>
    </main>
</template>