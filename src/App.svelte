<script lang="ts">
  import Router from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./routes/router";
</script>

<div class="container">
  <Navbar />
  <Router {routes} />
  <Footer />
</div>

<style lang="scss">
  .container {
    width: 100%;
    background: rgb(217, 228, 217);
  }
</style>
