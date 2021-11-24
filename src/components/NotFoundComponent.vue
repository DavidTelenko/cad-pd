<template>
  <div>
    <section class="notFound">
      <div class="img">
        <router-link to="/">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
        /></router-link>
        <img
          src="https://assets.codepen.io/5647096/Delorean.png"
          alt="El Delorean, El Doc y Marti McFly"
        />
      </div>
      <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <router-link to="/">YES</router-link>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NO</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Not Found",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Press Start 2P";
  color: #ffffff;
  text-align: center;
}

section.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
  height: 100vh;
}

section.notFound h1 {
  color: red;
  font-size: 100px;
}

section.notFound h2 {
  font-size: 50px;
}

section.notFound h1,
h2,
h3 {
  margin-bottom: 40px;
}

div.text {
  height: 50vh;
}

div.text a {
  text-decoration: none;
  margin-right: 20px;
}

div.text a:hover {
  color: red;
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  section.notFound {
    flex-direction: column;
    justify-content: space-around;
  }
  section.notFound div.img img {
    width: 70vw;
    height: auto;
  }
  section.notFound h1 {
    font-size: 50px;
  }
  section.notFound h2 {
    font-size: 25px;
  }
  div.text a:active {
    color: red;
    text-decoration: underline;
  }
}
</style>