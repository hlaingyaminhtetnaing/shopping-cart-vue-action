<template>
    <v-dialog  persistent v-model="mobileShow" hide-overlay transition="scroll-x-transition"
       >
        <v-card height="80%">
            <v-card style="background-color:#BBDEFB ;">
                <v-toolbar style="background-color:#C5CAE9">
                    <v-toolbar-title>Your Cart</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon dark @click.stop="mobileShow=false" large color="black darken-2">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card>
            <v-card class="mx-auto" justify="center" 
                style="margin: 15px;background-color:#C5CAE9;padding:10px;" width="80%" v-for="(cartItems,index) in cartItem" :key="index">
                <v-row>
                    <v-col>
                        <v-img :src="cartItems.images" height="180" width="100"
                            style="border-radius: 5%;margin-top: 10px;margin-left: 10px;" class="white--text align-top">
                        </v-img>
                    </v-col>
                    <v-col height="100" justify="center">
                        <v-card-subtitle>
                            {{cartItems.itemName}}
                        </v-card-subtitle>
                        <v-card-subtitle>
                            ${{cartItems.price}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn x-small>
                                <v-icon color="black" dark left @click="cartItems.itemQualtity--">
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-card-text style="color:black;text-align: center;">{{cartItems.itemQualtity}}</v-card-text>
                            <v-btn x-small>
                                <v-icon color="black" dark small @click="cartItems.itemQualtity++">
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-col>
                        <v-btn icon x-small color="gray darken-2" right @click.stop="mobileShow=false">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
        <v-footer color="#C5CAE9" dark>
            <v-row justify="center" class="my-4 text-center">
                <v-card-title style="color:#455A64 ;">
                    Total:$79
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn small color="#64B5F6">
                    Empty Cart
                </v-btn>
                <v-col cols="12">
                    <v-btn color="#FF80AB" dark small>Make an Order</v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn color="#EA80FC" dark small>CONTINUE SHOPPING</v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </v-dialog>
</template>
<script>
export default {
    name: 'CardList',
    data() {
        return {
            cartItem:[]
        }
    },
    props: {
        value: Boolean
    },
    computed: {
        mobileShow: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },
    created() {
        this.cartItem = JSON.parse(localStorage.getItem("addCart"));
    },

}
</script>


<style scoped>
>>>.v-dialog {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width:100%;
    margin: 0 auto;
    max-height: 100% !important;
}
</style>