<template>
    <div id="Home" transition="dialog-bottom-transition">
        <v-img :src="Homeimage">
            <v-card-title primary-title class="justify-center" style="margin-top: 130px;">
                <div class="text-center" style="font-size: 50px;color:black;font-style: italic;font-weight: bolder;">
                    Clothing & Fashion
                </div>
            </v-card-title>
            <v-card-title primary-title class="justify-center">
                <div class="text-center" style="font-size: 30px;color:brown;font-style: oblique;font-weight: bold;">
                    A Ladies Clothing Store Boutique
                </div>
            </v-card-title>
        </v-img>
    </div>
</template>
<script>
export default {
    name: 'HomeList',
    data() {
        return {
            Homeimage: require('@/assets/homme.jpg'),
        }
    }
}
</script>
<style scoped>

</style>