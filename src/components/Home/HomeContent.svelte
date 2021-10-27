<script>
  import "animate.css";
  import chef from "../../assets/hat.png";
</script>

<div
  class="content__home animate__animated animate__backInDown animate__backInDown"
>
  <div class="text__content">
    <img src={chef} alt="" />
    <h1>A Recipe App For Everyone</h1>
    <p>discover your new favorite dish here!!</p>
    <p>look for the dishes below and discover the flavor</p>
  </div>
  <div class="img__content" />
</div>

<style type="text/scss">
  .content__home {
    height: 90vh;
    background: rgb(86, 199, 101);
    border-radius: 0 0 50px 50px;
    display: flex;
    font-family: "Prompt", sans-serif;
    text-align: center;
    .text__content {
      padding: 4rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      color: cornsilk;
      img {
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 0;
        opacity: 0.6;
      }
      h1 {
        margin-top: 0;
        font-weight: 600;
        font-size: 3em;
        z-index: 1;
      }
      p {
        font-size: 1.5em;
        font-weight: 500;
        z-index: 1;
      }
    }
    .img__content {
      width: 50%;
      background: url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      border-radius: 0 0 50px 0;
    }
  }
</style>
