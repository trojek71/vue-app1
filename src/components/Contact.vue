<template>
<div id="Contact">
  <div class="contact">
    <div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
       <li>
          <router-link to="/">Moje Kontakty</router-link>
        </li>
        <li>
          <router-link to="/lista">Lista kontaktów</router-link>
        </li>
        <li>
          <router-link to="/dodaj">Dodaj kontakt</router-link>
        </li>
        <li>
          <router-link to="/kasuj">Kasuj kontakt</router-link>
        </li>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-text>
        <router-view />
      </b-card-text>

      <b-button variant="primary">Go somewhere</b-button>
    </b-card-body>
  </b-card>
</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
