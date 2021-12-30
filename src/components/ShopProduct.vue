<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <img
      class="product_image"
      :src="product.image" 
      :alt="product.name"
      height="125"
      width="125"
    > 
    <p>{{ product.price }} $</p>
          
    <button
      @click="removeFromCart(product)"
      class="addSubtractButton"
    > - </button>
    <span>{{ countProduct(product.id) }}</span>
    <button
      @click="addToCart(product)"
      class="addSubtractButton"
    > + </button>      
  </div>     
</template>

<script>
  import {mapMutations,mapState} from "vuex";
  export default {
    name: 'ShopProduct',
    props: ['product'],
    computed: {
    ...mapState(['cart']),
  },
    methods: {
    ...mapMutations(['addToCart','removeFromCart']),
    countProduct(productID) {
      let filteredArr = this.cart.filter((e) => e.id === productID)
      return filteredArr.length
    }
  }
        /*
        data() {
            return {
                products: [
                {
                    id: 1,
                    name: 'Product 1',
                    description: '1st product',
                    quantity: 0,
                    image:
                    "https://cdn03.ciceksepeti.com/cicek/kc213466-1/XL/makyajli-pasta-kc213466-1-3.jpg"
                },
                {
                    id: 2,
                    name: 'Product 2',
                    description: '2nd product',
                    quantity: 0,
                    image:
                    "https://www.pastamburada.com/img/m/1/nutella-pasta-1588.jpg"
                },
                {
                    id: 3,
                    name: 'Product 3',
                    description: '3th product',
                    quantity: 0,
                    image:
                    "https://www.droetker.com.tr/Recipe/Recipes/droetker.com.tr/tr-tr/baking/image-thumb__55886__RecipeDetailsLightBox/gokkusagi-pasta.jpg"
                }
                ],
           
            };
        
        },
        
        //<div v-for="product in products" :key="product.id" class="product">
        methods: {
            updateCart(product, updateType) {      
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].id === product.id) {
                        if (updateType === 'subtract') {
                            if (this.products[i].quantity !== 0) {
                                this.products[i].quantity--;
                            }
                        } else {
                        this.products[i].quantity++;
                        } 
                        break;
                    }
                }
            }
        }
      */
    
    }
</script>

<style>
  .product{
    border:rgb(0, 0, 0); 
    margin:30px;  
    padding:30px;
    background-color: rgb(50, 114, 173);
  }
  .addSubtractButton{
    margin:5px; 
    font-size: 15px;
    cursor: pointer;
    background: #aacdff;
    border: none;
  }
</style>