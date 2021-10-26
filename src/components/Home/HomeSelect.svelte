<script>
  import CardHome from "./CardHome.svelte";
  const food =
    "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const drink =
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
</script>

<div class="container">
  <h1>Select The recipes</h1>
  <div class="grid__cards">
    <div class="data1">
      <CardHome img={food} data={"Food"} page={"food"} />
    </div>
    <div class="data2">
      <CardHome img={drink} data={"Drinks"} page={"drink"} />
    </div>
  </div>
</div>

<style type="text/scss">
  .container {
    padding: 15px;
    h1 {
      text-align: center;
      font-family: "Dancing Script";
      font-size: 4em;
      color: cornsilk;
      text-shadow: 2px 2px 3px black;
    }
    .grid__cards {
      display: grid;
      gap: 1rem;
      grid-auto-flow: dense;
      grid-auto-rows: 22rem;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

      .data1 {
        grid-column: 2/3;
      }
      .data2 {
        grid-column: 4/5;
      }
    }
  }
</style>
