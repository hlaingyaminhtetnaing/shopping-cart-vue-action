<template>
    <v-dialog persistent v-model="show" hide-overlay transition="scroll-x-transition">
        <v-card min-height="80%">
            <v-card style="background-color:#BBDEFB ;">
                <v-toolbar style="background-color:#C5CAE9">
                    <v-toolbar-title>Your Cart</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon dark @click.stop="show=false" large color="black darken-2">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card>
            <v-card class="mx-auto" justify="center" max-height="220"
                style="margin: 15px;background-color:#C5CAE9;padding:10px;" width="80%" v-for="(items,index) in item"
                :key="index">
                <v-row>
                    <v-col>
                        <v-img :src="items.images" height="180" width="100"
                            style="border-radius: 5%;margin-top: 10px;margin-left: 10px;" class="white--text align-top">
                        </v-img>
                    </v-col>
                    <v-col height="100" justify="center">
                        <v-card-subtitle>
                            {{items.itemName}}
                        </v-card-subtitle>
                        <v-card-subtitle>
                            {{items.price}}
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn x-small @click="items.itemQualtity--">
                                <v-icon color="black" dark left>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-card-text style="color:black;text-align: center;">{{items.itemQualtity}}</v-card-text>
                            <v-btn x-small @click="items.itemQualtity++">
                                <v-icon color="black" dark small>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-btn icon small color="gray darken-2" right @click="removeItem(index)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
        <v-footer color="#C5CAE9" dark>
            <v-row justify="center" class="my-4 text-center">
                <v-card-title style="color:#455A64 ;">
                    Total:$
                </v-card-title>
                <v-card-title style="color:#455A64 ;" >
                    {{totalPrice}}
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn small color="#64B5F6">
                    Empty Cart
                </v-btn>
                <v-col cols="12">
                    <v-btn color="#FF80AB" dark small >Make an Order</v-btn>
                </v-col>
                <v-col cols="12">
                    <v-btn color="#EA80FC" dark small @click.stop="show=false">CONTINUE SHOPPING</v-btn>
                </v-col>
            </v-row>
        </v-footer>       
    </v-dialog>
       
</template>
<script>
//import EmptyCart from './emptyCart.vue';

export default {
    name: "CardList",
    data() {
        return {
            item: [],
            start:"",
        };
    },
    props: {
        value: Boolean,
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        },
        totalPrice() {
            let total = 0;
            if(this.item !=null)
            for (let p of this.item) {
                var itemPrice = p.price.split("$");
                console.log(itemPrice);
                var priceItem = parseInt(itemPrice[1]);
                //console.log(priceItem) 
                total += (priceItem * p.itemQualtity);
            }
            return total;
        },
    },
    created() {
        this.item = JSON.parse(localStorage.getItem("addCart"));
        this.start=this.item.length;
    },
    methods: {
      //  emptyCart() {
        //    this.item.splice(itemRemove, item.length);
        //    localStorage.setItem("addCart", JSON.stringify(this.item));;
       // },
        removeItem(itemRemove) {
            this.item.splice(itemRemove, 1);
            localStorage.setItem("addCart", JSON.stringify(this.item));
        },
    },
   // components: { EmptyCart }
}
</script>


<style scoped>
>>>.v-dialog {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30%;
    margin: 0 auto;
    max-height: 100% !important;
}
</style>