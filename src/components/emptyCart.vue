<template>
    <v-dialog persistent v-model="show" hide-overlay transition="scroll-x-transition">
        <v-card height="80%">
            <v-card style="background-color:#BBDEFB ;">
                <v-toolbar style="background-color:#C5CAE9">
                    <v-toolbar-title>Your Cart</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon dark @click.stop="show=false" large color="black darken-2">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-card>
        </v-card>
        <h1>Your shopping cart is empty</h1>
        <v-btn color="#EA80FC" dark small @click.stop="show=false">CONTINUE SHOPPING</v-btn>
        
    </v-dialog>
</template>
<script>
export default {
    name: 'CardList',
    data() {
        return {

        }
    },
    props: {
        value: Boolean,
    },
    computed: {
        show: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    },

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