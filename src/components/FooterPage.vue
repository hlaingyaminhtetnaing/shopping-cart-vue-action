<template>
    <v-footer app inset class="py-12 footer" width="auto" color="#BBDEFB">
        <v-container>
            <v-row justify="center" no-gutters>
                
                <v-btn color="white" text rounded v-on:click="BHome">
                    <v-card-subtitle>
                        Home
                    </v-card-subtitle>
                </v-btn>
                <v-btn color="white" text rounded v-on:click="BEcommerce">
                    <v-card-subtitle>
                        ECommerce
                    </v-card-subtitle>
                </v-btn>
                <!--<v-btn small icon fab right top >
                    <v-icon large color="blue darken-2">
                        mdi-message-processing-outline
                    </v-icon>
                </v-btn>-->
                <v-col class="text-center white--text" cols="12">
                    <v-card-subtitle>
                        Copyright &copy; 2022 All rights reserved - Kyi
                    </v-card-subtitle>

                </v-col>
                <v-col class=" text-center white--text" cols="12">
                    <v-card-subtitle>
                        Powered By SITE123 - Website maker
                    </v-card-subtitle>

                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script>
export default {
    name: 'FooterPage',
    data() {
        return {
        }
    },
    methods:{
        BHome(){
            this.$router.push('/');
        },
        BEcommerce(){
            this.$router.push('/ecommerce');
        }
    }
}
</script>
<style scoped>
.footer {
    bottom: 0;
    color: #707070;
    left: 0;
    position: relative;
    font-size: small;
    width: 100%;
}
</style>
