<script>
  import github from "../assets/github.svg";
  import twitter from "../assets/twitter.svg";
  import instagram from "../assets/instagram.svg";
</script>

<footer>
  <div class="text"><h4>Website Made By: Daniel Contreras</h4></div>
  <div class="logos">
    <a href=""><img class="tw" src={twitter} alt="" /></a>
    <a href=""><img class="gh" src={github} alt="" /></a>
    <a href=""><img class="ig" src={instagram} alt="" /></a>
  </div>
</footer>

<style lang="scss">
  footer {
    height: 10vh;
    background: #132248;
    color: cornsilk;
    font-family: "Prompt", sans-serif;
    display: flex;
    align-items: center;
    .text {
      margin-left: 15px;
    }
    .logos {
      display: flex;
      margin-left: auto;
      a {
        width: 5vw;
        height: 5vh;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: 0.4s ease-in-out;
        }
        .tw:hover {
          box-shadow: 2px 2px 3px rgb(35, 168, 230);
        }
        .gh:hover {
          box-shadow: 2px 2px 3px rgb(106, 111, 114);
        }
        .ig:hover {
          box-shadow: 2px 2px 3px rgb(223, 106, 10);
        }
      }
    }
  }
</style>
