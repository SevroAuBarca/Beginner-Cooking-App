<script>
  import FullRecipeDrink from "./FullRecipeDrink.svelte";

  export let drink;
  const { strDrink, strDrinkThumb, strInstructions, strTags, strCategory } =
    drink;
  let flag = false;
  let ingredients = [];

  const showCard = () => {
    ingredients = breakData(drink);
    flag = !flag;
  };

  const hideCard = () => {
    flag = !flag;
  };

  const breakData = (drink) => {
    const ingredientes = [];
    let count = 1;
    while (count <= 20) {
      if (drink[`strIngredient${count}`]) {
        ingredientes.push(
          `${drink[`strIngredient${count}`]} - ${drink[`strMeasure${count}`]}`
        );
      }
      count++;
    }

    return ingredientes;
  };
</script>

<div
  style="--img: url({strDrinkThumb})"
  class="recipe_class bt"
  on:click={showCard}
>
  <h1>{strDrink}</h1>
</div>
{#if flag}
  <div class="full__recipe">
    <FullRecipeDrink
      {strDrink}
      {strDrinkThumb}
      {strInstructions}
      {strTags}
      {strCategory}
      {ingredients}
      on:hideCard={hideCard}
    />
  </div>
{/if}

<style lang="scss">
  .recipe_class {
    border-radius: 5px;
    background: var(--img);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    color: oldlace;
    display: flex;
    align-items: flex-end;
    z-index: 2;
    transition: 0.3s ease all;
    position: relative;
    overflow: hidden;

    h1 {
      padding: 0 5px;
      text-shadow: 2px 2px 3px black;
      font-size: 1.5em;
      font-family: "Prompt", sans-serif;
    }
  }
  .recipe_class.bt::after {
    content: "Click To See The Recipe";
    width: 100%;
    height: 100%;
    background: rgb(86, 199, 101);
    position: absolute;
    z-index: 1;
    top: -420px;
    left: 0;
    transition: 0.3s ease-in-out all;
    border-radius: 0 0 5px 5px;
    opacity: 0.7;
    padding: 0 5px;
    text-shadow: 2px 2px 3px black;
    font-size: 1.5em;
    font-family: "Prompt", sans-serif;
    color: oldlace;
  }
  .recipe_class.bt:hover::after {
    top: 0;
  }
  .recipe_class h1 {
    position: relative;
    z-index: 2;
    transition: 0.3s ease all;
  }
  .full__recipe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
</style>
