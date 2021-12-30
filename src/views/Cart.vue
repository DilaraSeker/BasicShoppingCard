<template>
  <div>

    <h1 class="borderBottom">CART</h1>
    <div class="borderBottom cartTopBar">
      <div class="width-25">
        <h2>Product</h2>
      </div>
      <div class="width-25">
        <h2>Price</h2>
      </div>
      <div class="width-25">
        <h2>Amount</h2>
      </div>
    </div>

    <div  v-if="uniqueItemsInCart.length > 0">
      <CartProduct v-for="(item,index) in uniqueItemsInCart" :key="index" :product="item"/>
      <div class="borderBottom">
        <h1>Total Price: {{totalPrice}} $</h1>
      </div>
    </div>
    <div class= "borderBottom" v-if="uniqueItemsInCart.length <= 0">
      <h2>NO PRODUCT</h2>
    </div>
  </div>

</template>
<script>
import CartProduct from "@/components/CartProduct";
import {mapState} from "vuex";

export default {
  name: 'Cart',
  components: {
    CartProduct
  },
  computed: {
    ...mapState(['cart','uniqueItemsInCart','totalPrice']),
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('filterUniqueItems')
    this.$store.dispatch('setTotalPrice')
  },
}
</script>

<style>
  h1{
    font-family: "Times New Roman", Times, serif;
  }
  .cartTopBar {
    display: flex;
    justify-content: space-around;
    font-family: "Times New Roman", Times, serif;
  }
  .cartTopBar div {
    display: flex;
    justify-content: center;
  }
  .width-25 {
    width: 25px;
  }
  .borderBottom {
    font-family: "Times New Roman", Times, serif;
    border-bottom: solid 3px gray;
  }
</style>

