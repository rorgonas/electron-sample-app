<template>
    <div class="reddit-list">
        <v-card>
            <v-list>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item v-for="post in posts"
                                 :key="post.data.id"
                                 @click="openImage(post.data.url)">
                        <v-list-item-avatar>
                            <v-img :src="post.data.thumbnail" alt="thumb"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="post.data.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    import { ipcRenderer } from 'electron';
    const axios = window.axios;

    export default {
        name: 'RedditList',
        props: {
            msg: String
        },
        data(){
            return {
                posts: []
            }
        },
        created() {
            //get reddit list
            axios.get('https://www.reddit.com/r/aww.json')
                .then((response) => {
                    this.posts = response.data.data.children;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        methods: {
            openImage(image){
                console.log('image:', image);
                ipcRenderer.send('toggle-image', image);
            }
        }
    }
</script>

<style scoped>
    .v-list-item__title {
        text-align: left;
        margin-left: 20px;
    }
</style>
