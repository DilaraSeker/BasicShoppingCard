<template>
  <div class="itemInCart">
    <div class="width-25">
      <img :src="product.image" alt="">
    </div>
    <div class="width-25">
      <h3>{{ product.price }} $</h3>
    </div>
    <div class="width-25">
      <button class="addSubtractButton" @click="addToCartAction(product)">+</button>
      <h3>{{ countProduct(product.id) }}</h3>
      <button class="addSubtractButton" @click="removeFromCartAction(product)">-</button>
    </div>
   
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "CartProduct",
  props: ['product'],
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['addToCartAction', 'removeFromCartAction']),
    countProduct(productID) {
      let filteredArr = this.cart.filter((e) => e.id === productID)
      return filteredArr.length
    }
  },
  updated() {
    this.$store.dispatch('filterUniqueItems')
  }
}
</script>

<style scoped>

.itemInCart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px gray;
}
.itemInCart div {
  display: flex;
  justify-content: center;
}
h3{
    font-size: 28px;
    margin: 5px;
}
.addSubtractButton {
  font-size: 22px;
  font-weight: bold;
  
  width: 50px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background: rgb(50, 114, 173);
}
.width-25 {
  width: 25%;
}

img {
  width: 100px;
  height: 100px;
  padding: 5px;
}

</style>