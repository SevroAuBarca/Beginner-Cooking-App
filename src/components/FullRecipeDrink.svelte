<script>
  export let strDrink;
  export let strDrinkThumb;
  export let strInstructions;
  export let strTags;
  export let strCategory;
  export let ingredients;

  import { createEventDispatcher } from "svelte";
  import ico from "../assets/x-circle.svg";

  let dispatch = createEventDispatcher();
  let flag = true;

  const instructions = strInstructions
    .split("\r\n")
    .filter((data) => data !== "\r\n");

  const myCustom = () => {
    dispatch("hideCard");
  };
  const changeIng = () => {
    flag = true;
  };
  const changeIns = () => {
    flag = false;
  };
  const createPDFDrink = () => {
    let dd = {
      info: {
        title: strDrink,
      },
      content: [
        { text: strDrink, style: "header" },
        {
          columns: [
            [
              {
                // if you specify both width and height - image will be stretched
                image: "img",
                width: 200,
                height: 250,
                margin: [2, 10],
              },
              { text: "Ingredients", fontSize: 18, bold: true },
              {
                ul: [ingredients],
                margin: [2, 10],
              },
              {
                text: `Tags: ${strTags}\n\nCategory: ${strCategory}`,
                margin: [2, 5],
              },
            ],
            [
              { text: "Instructions\n", fontSize: 18, bold: true },
              { text: strInstructions, margin: [0, 10] },
            ],
          ],
          columnGap: 10,
        },
      ],
      footer: {
        columns: [
          { text: "Coocking app", margin: [10, 0], color: "gray" },
          {
            text: "App Made By Daniel Contreras",
            alignment: "right",
            margin: [10, 0],
            color: "gray",
          },
        ],
      },
      images: {
        img: strDrinkThumb,
      },
      styles: {
        header: {
          fontSize: 22,
          bold: true,
        },
        defaultStyle: {
          fontSize: 15,
          bold: false,
        },
      },
    };
    pdfMake.createPdf(dd).open();
  };
</script>

<div class="container__recipe ">
  <div class="recipe__card ">
    <div class="title_and_return">
      <h1>{strDrink}</h1>
      <img on:click={myCustom} src={ico} alt="return" />
    </div>
    <hr />
    <div class="data_recipe">
      <div class="img_container">
        <img loading:lazy class="img_meal" src={strDrinkThumb} alt="" />
        <p>Category: {strCategory}</p>
      </div>

      <article>
        <ul>
          <li on:click={changeIng}>Ingredients</li>
          <li on:click={changeIns}>Instructions</li>
        </ul>
        <hr />
        {#if flag}
          <section class="ingredients_section">
            {#each ingredients as ingredient}
              <span>{ingredient}</span>
            {/each}
          </section>
        {:else}
          <section class="instruction_section">
            {#each instructions as instruction}
              <p>{instruction}</p>
            {/each}
          </section>
        {/if}
        <div class="button">
          <button on:click={createPDFDrink}>Download Recipe</button>
        </div>
      </article>
    </div>
  </div>
</div>

<style type="scss">
  .container__recipe {
    font-family: "Prompt", sans-serif;
    color: cornsilk;
    text-shadow: 2px 2px 3px black;
    .recipe__card {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80vh;
      background: rgb(86, 199, 101);
      z-index: 5;
      border-radius: 10px;
      padding: 10px;
      .title_and_return {
        display: flex;
        height: 5vh;
        width: 100%;
        align-items: center;

        h1 {
          color: cornsilk;
          text-shadow: 2px 2px 3px black;
          font-size: 1.5em;
        }
        img {
          box-shadow: 2px 2px 3px black;
          margin-left: auto;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
      }
      .data_recipe {
        display: flex;
        .img_container {
          width: 45%;
          height: 50vh;
          .img_meal {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        article {
          width: 100%;
          height: 100%;
          overflow: hidden;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            li {
              list-style: none;
              font-size: 1.2em;
              cursor: pointer;
            }
          }
          .instruction_section,
          .ingredients_section {
            padding-left: 30px;
            padding-right: 30px;
            font-size: 1em;
            overflow: hidden;
            overflow-y: scroll;
            height: 50vh;
          }

          .ingredients_section {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
          .button {
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
              padding: 20px 30px;
              border: none;
              border-radius: 10px;
              font-size: 0.9em;
              background-color: #132248;
              color: cornsilk;
            }
            button:hover {
              background-color: rgb(43, 75, 156);
              transition: 00.3s ease;
            }
            button:active {
              background-color: rgb(88, 112, 172);
              transition: 00.3s ease;
            }
          }
        }
      }
    }
  }
  .container__recipe::before {
    content: "";
    position: fixed;
    background: rgb(19, 18, 18);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 4;
  }
</style>
