<template>
    <div class="user-profile">
        <v-card>
            <v-card-title>
                <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Email" v-model="email"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        data(){
            return {
                email: ""
            }
        },
        created() {
            const user = this.$store.getters.getUser;
            this.email = user.email;
        }
    };
</script>
