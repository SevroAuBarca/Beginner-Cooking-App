<script>
  import FullRecipe from "./FullRecipe.svelte";

  export let meal;
  const { strMeal, strMealThumb, strInstructions, strTags, strCategory } = meal;
  let flag = false;
  let ingredients = [];

  const showCard = () => {
    ingredients = breakData(meal);
    flag = !flag;
  };

  const hideCard = () => {
    flag = !flag;
  };

  const breakData = (meals) => {
    const ingredientes = [];
    let count = 1;
    while (count <= 20) {
      if (meals[`strIngredient${count}`]) {
        ingredientes.push(
          `${count}.- ${meals[`strIngredient${count}`]} - ${
            meals[`strMeasure${count}`]
          }`
        );
      }
      count++;
    }

    return ingredientes;
  };
</script>

<div
  loading="lazy"
  style="--img: url({strMealThumb})"
  class="recipe_class bt animate__animated animate__zoomIn"
  on:click={showCard}
>
  <h1>{strMeal}</h1>
</div>
{#if flag}
  <div class="full__recipe ">
    <FullRecipe
      {strMeal}
      {strMealThumb}
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
