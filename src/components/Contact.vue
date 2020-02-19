<template>
<div id="Contact">
  <div class="contact">
    <div>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
       <b-nav-item to="/" exact exact-active-class="active">Moje Kontakty</b-nav-item>       
       <b-nav-item to="/lista" exact exact-active-class="active">Lista kontaktów</b-nav-item>
       <b-nav-item to="/dodaj" exact exact-active-class="active">Dodaj kontakt</b-nav-item>
       <b-nav-item to="/kasuj" exact exact-active-class="active">Kasuj kontakt</b-nav-item>
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

</style>
