<template>
    <div class="image">
        <v-img :src="imageURL" alt="image" height="400"
               class="grey darken-4"/>
    </div>
</template>

<script>
    import { ipcRenderer } from 'electron';

    export default {
        name: 'Image',
        props: {
            msg: String
        },
        data() {
            return {
                imageURL: ''
            }
        },
        created() {
            ipcRenderer.on('image', (event, arg)=> {
                this.imageURL = arg;
            })
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>
