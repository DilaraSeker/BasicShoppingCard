<template>
  <nav class="nav">

    <router-link to="/">
      <button class="nav-productButton"><h1>PRODUCTS</h1></button>
    </router-link>
    <div>

      <div>
        <router-link to="/cart">
          <button class="nav-cartButton">
            <span class="total-quantity"> {{cart.length}}</span>
          </button>
        </router-link>  
      </div>  
          
    </div>
  </nav>
</template>
<script>

import {mapState} from "vuex";
export default {
  name: 'Header',
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style >
  nav {
    padding: 30px;
    background-color: rgb(50, 114, 173);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav-productButton {
    background-color:rgb(50, 114, 173);
    color: rgb(0, 0, 0);
    padding: 15px;
    text-align: center;
    font-size: 25px;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    border: unset;
    cursor: pointer;
  }

  .nav-cartButton{
    background: #aacdff;
    color: rgb(0, 0, 0);
    padding: 10px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    width: 50px;
    height: 50px;
    border: unset;
    border-radius: 45%;
    cursor: pointer;
  }
  .nav-cartButton:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>


