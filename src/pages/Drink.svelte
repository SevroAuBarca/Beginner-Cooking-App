<script>
  import Loader from "../components/Loader.svelte";
  import RecIpeCardDrinks from "../components/RecIpeCardDrinks.svelte";
  let letters = [
    { id: 1, data: "A" },
    { id: 2, data: "B" },
    { id: 3, data: "C" },
    { id: 4, data: "D" },
    { id: 5, data: "E" },
    { id: 6, data: "F" },
    { id: 7, data: "G" },
    { id: 8, data: "H" },
    { id: 9, data: "I" },
    { id: 10, data: "J" },
    { id: 11, data: "K" },
    { id: 12, data: "L" },
    { id: 13, data: "M" },
    { id: 14, data: "N" },
    { id: 15, data: "O" },
    { id: 16, data: "P" },
    { id: 17, data: "Q" },
    { id: 18, data: "R" },
    { id: 19, data: "S" },
    { id: 20, data: "T" },
    { id: 21, data: "U" },
    { id: 22, data: "V" },
    { id: 23, data: "W" },
    { id: 24, data: "X" },
    { id: 26, data: "Z" },
    { id: 25, data: "Y" },
  ];
  let selected;

  const getRecipeData = async (data = "A") => {
    const {
      data: { drinks },
    } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${data.toLowerCase()}`
    );
    console.log(drinks);
    return drinks;
  };
  const handleSubmit = (data) => {
    promise = getRecipeData(data);
  };

  let promise = getRecipeData();
</script>

<div class="content">
  <div class="form__container">
    <h1>Drinks</h1>
    <form>
      <select bind:value={selected} on:change={handleSubmit(selected.data)}>
        {#each letters as letter}
          <option value={letter}>
            {letter.data}
          </option>
        {/each}
      </select>
    </form>
  </div>
  <div class="cards__container">
    {#await promise}
      <div class="load">
        <Loader />
      </div>
    {:then drinks}
      {#each drinks as drink}
        <RecIpeCardDrinks {drink} />
      {/each}
    {/await}
  </div>
</div>

<style lang="scss">
  .content {
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;
    .form__container {
      width: 80%;
      height: 10vh;
      display: flex;
      align-items: center;
      h1 {
        margin-right: auto;
        color: oldlace;
        padding: 0 5px;
        text-shadow: 2px 2px 3px black;
        font-size: 1.5em;
        font-family: "Prompt", sans-serif;
      }
      form {
        margin-left: auto;
      }
    }
    .cards__container {
      width: 75%;
      height: 80vh;
      position: relative;
      overflow: hidden;
      overflow-y: scroll;
      padding: 15px;
      border: 1px solid gray;
      display: grid;
      gap: 1rem;
      grid-auto-flow: dense;
      grid-auto-rows: 22rem;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
      .load {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
