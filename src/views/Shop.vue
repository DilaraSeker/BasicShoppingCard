<template>
  <div class="body">
    <div class="shoppingList">
      <ShopProduct v-for="(item,index) in products" :key="index" :product="item" class="product"/>
    </div>

  </div>
</template>

<script>
import ShopProduct from "@/components/ShopProduct";
import {mapState} from "vuex";

export default {
  name: "Shop",
  components: {ShopProduct},
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style scoped>
  .shoppingList {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .products{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>

