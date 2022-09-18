<template>
    <div class="about-us-point about-us-point1">
        <img :src="getImage" alt="Brain icon from icons8">
        <h5 class="card-title"><slot name="card-title"></slot></h5>
        <h6><slot name="card-description"></slot></h6>
      </div>
</template>
<style scoped>
.card-title{
    margin-top: 9px
}
</style>
<script setup>   
import { computed } from 'vue';
    const props = defineProps({
        cardImage: {
            type: String,
            required: true
        }
    })

    const getImage = computed(()=>  {
        return new URL(`../../assets/icons/${props.cardImage}`, import.meta.url).href
    })
    
</script>
