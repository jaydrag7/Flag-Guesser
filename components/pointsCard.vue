<template>
    <v-row justify-lg="center" style="justify-content: center; align-content: center;">
        <v-card elevation="24" color="#FBDD00" width="300" height="500" class="mt-10  rounded-xl" align="center">
            <v-card-text class="text-h6 mt-5">
                You acquired <span class="font-weight-bold">{{ points }} points</span> !
            </v-card-text>
            <v-card-text class="text-h6 mt-5">
                A Royal Attempt. I think you dropped this <v-img src="crown.png"/>
            </v-card-text>
        </v-card>
    </v-row>

</template>
<script setup>
    const props = defineProps({
        points: Number,
    })
</script>