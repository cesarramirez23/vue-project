<template>
    <textarea  
        @keydown.tab.prevent="onTab" 
        @keyup="update"
        v-text="modelValue"
        />
</template>

<script setup>

defineProps({
    modelValue: String,
});

let emit = defineEmits(['update:modelValue']);

function update()
{
    //this.$emit('update:modelValue', e.target.value);   
    emit('update:modelValue', e.target.value);   
}
function onTab(e){ //only tabs
//function onKeyDown(e){ //for all keys
    
    //let t = textArea.value;//with textarea ref
    let textArea = e.target;
    //if(e.keyCode == 9) //verify if tab was pressed
    //{
        let val = textArea.value,
          start = textArea.selectionStart,
          end   = textArea.selectionEnd;
            
          // set textarea value to: text before caret + tab + text after caret
          textArea.value = val.substring(0,start) +  "\t" + val.substring(end);

          //put caret at right position again
          textArea.selectionStart = textArea.selectionEnd = start + 1;
          //e.preventDefault();
    //}
};
</script>
