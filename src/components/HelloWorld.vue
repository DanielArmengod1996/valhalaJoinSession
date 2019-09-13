<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Bienvenido a Valhala Proyect 2.0, esté es el formulario para iniciar sesion.
    </p>
    <form id="app" @submit="checkJoinned" action="/something" method="post">
      <p>
        <label for="username">User Name</label>
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
        >
      </p>
            <p>
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
        >
      </p>
      <p>
        <input value="submit" type="submit"/>
      </p>
    </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    potato: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  padding: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img {
  height: 90px;
}
</style>
