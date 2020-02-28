<template>
  <!-- Material form login -->
  <form @submit="submit">
    <p class="h4 text-center mb-4">Add Contact</p>
    <div class="grey-text">
      <mdb-input label="First Name" icon="envelope" type="text" v-model="firstName"/>
      <mdb-input label="Last Name" icon="lock" type="text" v-model="lastName"/>
      <mdb-input label="Email" icon="at" type="text" v-model="email"/>
      <mdb-input label="Country" icon="globe-europe" type="text" v-model="country"/>
      <mdb-input label="City" icon="city" type="text" v-model="city"/>
      <mdb-input label="Street" icon="road" type="text" v-model="street"/>
      <mdb-input label="House nr" icon="home" type="number" v-model="houseNr"/>
    </div>
     <input class="button-primary" type="submit" value="Send" />
  </form>
  <!-- Material form login -->
</template>
<script>
import { mdbInput } from 'mdbvue';
import gql from "graphql-tag";
//import { InMemoryCache } from "apollo-cache-inmemory";

const ADD_CONTACT = gql`
  mutation MyMutation($id: Int,$ad_id:uuid, $firstName: String!, $lastName: String!, $email: String!, $country: String, $city: String, $street: String, $houseNr: Int) {
  insert_contacts(objects: {address: {data: {city:$city, country: $country, houseNr: $houseNr, street: $street}}, email: $email, firstName: $firstName, lastName: $lastName}) {
    affected_rows
  }
}
`;



  
  export default {
    name: 'AddContact',


    components: {
      mdbInput,
      
    },
    data(){
  return {
          contacts:{},
        
          id:null,
          firstName:'',
          lastName:'',
          email:'',
          ad_id:null,        
          country:'',
          city: '',
          street:'',
          houseNr:'', 
  }
},
  apollo: {},
  methods: {
    submit(e) {
      e.preventDefault();
      const { firstName, lastName, email, country, city, street, houseNr} = this.$data;
      this.$apollo.mutate({
        mutation: ADD_CONTACT,
        variables: {
          firstName,
          lastName,
          email,
          country,
          city,
          street,
          houseNr
        },
       
      });
    }
  }
  }
</script>



