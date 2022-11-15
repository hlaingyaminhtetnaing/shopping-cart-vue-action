
<template>
    <div :items="Cart[$route.params.id]">
        <v-row class="text-start" no-gutters>
            <div style="cursor: pointer;" v-on:click="HomeClick">
                <v-card-subtitle>
                    Home
                </v-card-subtitle>
            </div>

            <v-card-subtitle>&nbsp;/
            </v-card-subtitle>
            <div style="cursor: pointer;" v-on:click="ECommerceClick">
                <v-card-subtitle>
                    Ecommerce
                </v-card-subtitle>
            </div>

            <v-card-subtitle>&nbsp;/
            </v-card-subtitle>
            <v-card-subtitle>
                {{Cart[$route.params.id].itemName}}
            </v-card-subtitle>

        </v-row>
        <h1 style="text-align:center;font-style: oblique;padding:20px;">{{Cart[$route.params.id].itemName}}</h1>
        <hr class="titleClass">
        <!--
            <v-divider inset width="200px" style="margin:0px 620px;padding-bottom:30px;"></v-divider>
        -->
        <v-container class="justify-center">
            <v-row no-gutters style="height: 150px;" cols="12" sm="4" md="4" lg="4" xl="3">
                <v-col>
                    <v-card class="mx-auto" max-width="380" outlined color="transparent">
                        <v-img :src="Cart[$route.params.id].images" height="470px" width="350px"
                            style="border-radius: 2%;" class="white--text align-top">
                            <v-card-subtitle v-text="Cart[$route.params.id].title"></v-card-subtitle>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto" max-width="600" outlined color="transparent">
                        <v-card-subtitle>{{Cart[$route.params.id].Details}}</v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-title style="padding-top: 30px;">{{Cart[$route.params.id].price}} &nbsp;&nbsp;&nbsp;
                            <span class="text-decoration-line-through" style="font-size:17px;"
                                v-show="Cart[$route.params.id].id === 1111">$95</span>
                            <span style="color: red;font-size:14px;"
                                v-show="Cart[$route.params.id].id === 1111">(-16.84%)</span>
                        </v-card-title>
                        <v-card-subtitle style="padding-top: 30px;padding-bottom: 30px;">Shipping: <span
                                style="color: green;">{{Cart[$route.params.id].shipping}}</span></v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card>
                        </v-card>
                        <v-card style="padding-top: 30px;" outlined color="transparent">
                            <v-row>
                                <v-col>
                                    <v-card-actions style="padding: 0px 10px;border-radius: 5%;" min-height="10">
                                        <v-btn small @click="itemQualtity--" :disabled="itemQualtity  <= 1">
                                            <v-icon color="black" dark left>
                                                mdi-minus
                                            </v-icon>
                                        </v-btn>
                                        <v-card-text style="color:black;text-align: center;">
                                            {{itemQualtity}}
                                        </v-card-text>
                                        <v-btn small @click="itemQualtity++">
                                            <v-icon color="black" dark>
                                                mdi-plus
                                            </v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-col>
                                <v-col style="padding: 15px;">
                                    <v-btn color="secondary" dark large @click="addToCart($route.params.id)">Add to Cart
                                    </v-btn>
                                    <dialogList v-model="dialog" v-if="$vuetify.breakpoint.lgAndUp"></dialogList>
                                    <MobileDialoglist v-model="dialog" v-else="$vuetify.breakpoint.lgAndUp">
                                    </MobileDialoglist>
                                </v-col>
                                <v-col></v-col>
                            </v-row>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import dialogList from '@/components/dialogList.vue'
import MobileDialoglist from '@/components/MobileDialoglist.vue'
export default {
    name: 'CardList',
    props: ['item'],
    data() {
        return {

            Cart: [
                {
                    images: require('@/assets/blueJeanPant.jpg'),
                    itemName: 'Blue Pants', price: '$79', title: 'On Sale',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1111
                },
                {
                    images: require('@/assets/brownJacket.jpg'),
                    itemName: 'Brown Jacket', price: '$158', title: 'New',
                    shipping: 'Free Shipping', Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1112
                },
                {
                    images: require('@/assets/green.jpg'),
                    itemName: 'Green Bag', price: '$89', title: 'New',
                    shipping: 'Free Shipping',
                    Details: 'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1113
                },
                {
                    images: require('@/assets/turquoiseDress.jpg'),
                    itemName: 'Turquoise Dress', price: '$120', title: 'New',
                    shipping: 'Free Shipping',
                    Details:
                        'These blue pants for men stand out as fashionable attire that any man would be proud to wear.', id: 1114
                }
            ],
            itemQualtity: 1,
            addCart: [],
            dialog: false,




        }

    },
    methods: {
        HomeClick() {
            this.$router.push('/');
        },
        ECommerceClick() {
            this.$router.push('/ecommerce');
        },
        addToCart(index) {
            this.dialog = !this.dialog;
            if (this.addCart == null) {
                this.addCart.push({
                    images: this.Cart[index].images,
                    price: this.Cart[index].price,
                    itemName: this.Cart[index].itemName,
                    itemQualtity: this.itemQualtity,
                });
                localStorage.setItem("addCart", JSON.stringify(this.addCart));
            } else {

                var getCurrentCart = localStorage.getItem("addCart");
                var currentCart = JSON.parse(getCurrentCart);

                var item = currentCart.find(item => item.itemName == this.Cart[index].itemName);
                if (item) {
                    item.itemQualtity += 1;
                }
                else {
                    currentCart.push({
                        images: this.Cart[index].images,
                        price: this.Cart[index].price,
                        itemName: this.Cart[index].itemName,
                        itemQualtity: this.itemQualtity,
                    });
                }
                localStorage.setItem("addCart", JSON.stringify(currentCart));


            }

        }

    },
    components: {
        dialogList,
        MobileDialoglist
    }
}
</script>
<style scoped>
hr.titleClass {
    border: 1px solid black;
    width: 15%;
    margin: auto;
    margin-bottom: 50px;
}
</style>

