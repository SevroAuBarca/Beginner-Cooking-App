<script>
  import { push } from "svelte-spa-router";
  export let img;
  export let data;
  export let page;

  const handleSelect = () => {
    push(`/${page}`);
  };
</script>

<div style="--img: url({img})" class="bt" on:click={handleSelect}>
  <h3>{data}</h3>
</div>

<style>
  div {
    width: 100%;
    height: 100%;

    border-radius: 5px;
    background: var(--img);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s ease all;
    position: relative;
    overflow: hidden;
  }
  div.bt::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(86, 199, 101);
    position: absolute;
    z-index: 1;
    top: -420px;
    left: 0;
    transition: 0.3s ease-in-out all;
    border-radius: 0 0 5px 5px;
    opacity: 0.5;
  }
  div.bt:hover::after {
    top: 0;
  }
  div h3 {
    position: relative;
    z-index: 2;
    transition: 0.3s ease all;
  }
  h3 {
    color: oldlace;
    text-shadow: 2px 2px 3px black;
    font-size: 1.5em;
    font-family: "Prompt", sans-serif;
  }
</style>
