<template>
    <v-navigation-drawer app mini-variant-width="300" permanent
        style="height:100%;border: hidden;background-color: #E0F7FA;" v-if="$vuetify.breakpoint.lgAndUp">

        <template>
            <h1>
                Kyi
            </h1>
            <v-list
            >
                <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-title @click="scrollToContent('Home')">
                            <v-card-subtitle style="text-align: center;font-size: 20px;" >
                                Home
                            </v-card-subtitle>
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider dark inset width="120px" style="padding-bottom:30px;"></v-divider>
                    <v-list-item>
                        <v-list-item-title @click="scrollToContent('ECommerce')">
                            <v-card-subtitle style="text-align: center;font-size: 20px;padding-bottom: 50px;">
                                Ecommerce
                            </v-card-subtitle>
                        </v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-title @click.stop="dialog=true">
                            <v-card-subtitle style="text-align: center;font-size: 20px;padding-bottom: 50px;">
                                <v-icon large color="black darken-2" style="padding: 50px 100px;">
                                    mdi-cart
                                </v-icon>
                            </v-card-subtitle>
                        </v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
            <dialogList v-model="dialog"></dialogList>
        </template>
    </v-navigation-drawer>
    <v-card v-else="$vuetify.breakpoint.lgAndUp">
        <v-navigation-drawer v-model="drawer" app>

            <template>
                <v-btn icon small color="black darken-2" @click="drawer = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-list>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <v-list-item-title @click="scrollToContent('Home')">
                                Home
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click="scrollToContent('ECommerce')">Ecommerce</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </template>
        </v-navigation-drawer>

        <v-app-bar color="#64B5F6" dark flat app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Kyi</v-toolbar-title>

            <v-spacer></v-spacer>            
            <v-card outlined color="transparent" style="margin: 20px;padding-top: 10px;">
                <v-badge color="#BBDEFB" content="4" small>
                    <v-btn small icon @click.stop="mobiledialog=true">
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    
                </v-badge>
                <MobileDialogList v-model="mobiledialog"></MobileDialogList>                
            </v-card>
        </v-app-bar>
        
    </v-card>
   
</template>
<script>
import dialogList from '@/components/dialogList.vue'
import MobileDialogList from '@/components/MobileDialoglist.vue'
export default {
    name: 'Navbar',
    data() {
        return {
            drawer: false,
            CartImages: require('@/assets/blueJeanPant.jpg'),
            dialog:false,
            mobiledialog:false,
        }
    },
    methods: {
      scrollToContent(value) {
      window.scrollTo(0,document.getElementById(value).getBoundingClientRect().y + window.scrollY -120);
    },
    },
    components:{
        dialogList,
        MobileDialogList
    }

}
</script>
<style scoped>
h1 {
    text-align: center;
    padding: 50px;
}

.v-navigation-drawer>>>.v-navigation-drawer__border {
    display: none
}
</style>
