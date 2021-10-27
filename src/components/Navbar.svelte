<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<nav class="navbar">
  <h1>Cooking App</h1>

  <ul class="ul">
    <li class="li "><a class="bt" use:link href="/"><span>Home</span> </a></li>
    <li class="li ">
      <a class="bt" use:link href="/food"><span>Foods</span></a>
    </li>
    <li class="li ">
      <a class="bt" use:link href="/drink"><span>Drinks</span></a>
    </li>
  </ul>
</nav>

<style type="text/scss">
  .navbar {
    position: fixed;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    background: #132248;
    z-index: 4;
    h1 {
      margin-left: 3em;
      font-family: "Dancing Script";
      color: cornsilk;
      font-size: 2em;
    }
    .ul {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: auto;
      display: flex;
      align-items: center;
      list-style: none;
      width: 30%;
      padding: 0;
      .li {
        margin-right: 5px;
        font-size: 1.5em;
        font-family: "Prompt", sans-serif;
        a {
          cursor: pointer;
          overflow: hidden;
          padding: 20px 30px;
          position: relative;
          text-decoration: none;
          color: cornsilk;
          z-index: 2;
          transition: 0.3s ease all;
        }
        a.bt::after {
          content: "";
          width: 100%;
          height: 100%;
          background: rgb(86, 199, 101);
          position: absolute;
          z-index: 1;
          top: -80px;
          left: 0;
          transition: 0.3s ease-in-out all;
          border-radius: 0 0 5px 5px;
        }
        a span {
          position: relative;
          z-index: 2;
          transition: 0.3s ease all;
        }
        a.bt:hover::after {
          top: 0;
        }
      }
    }
  }
</style>
