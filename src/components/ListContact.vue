<template>
  <div id="user-table">
    <b-table-simple bordered  hover>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Id</b-th>
          <b-th>First Name</b-th>
          <b-th>Last Name</b-th>
          <b-th>email</b-th>
          <b-th>Country</b-th>
          <b-th>City</b-th>
          <b-th>Street</b-th>
          <b-th>House nr</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="contact in contacts" :key="contact.id">
          <td>{{contact.id}}</td>
          <td>{{contact.firstName}}</td>
          <td>{{contact.lastName}}</td>
          <td>{{contact.email}}</td>
          <td>{{contact.address.country}}</td>
          <td>{{contact.address.city}}</td>
          <td>{{contact.address.street}}</td>
          <td>{{contact.address.houseNr}}</td>
         
          <td>
            <b-button @click="selectContact(contact)">Select</b-button>
            <b-button @click="deleteContact(contact.address.id)">Delete</b-button>
            
          </td>
        </b-tr>
      
        
      </b-tbody>
       
    </b-table-simple>
  </div>
  <!--<div>
    <form>
         <label>Update contact</label>
        
         <input type="text" name="firstName" v-model="firstName"/>
         <input type="text" name="lastName" v-model="lastName"/>
         <input type="text" name="emailName" v-model="email"/>
         <input type="text" name="country" v-model="country"/>
         <input type="text" name="city" v-model="city"/>
         <input type="text" name="street" v-model="street"/>
         <input type="number" name="hause number" v-model="email"/>
         <input v-if="id" type="button" @click="updateContact(id, firstName, lastName, email)" value="Update">
       </form>
  </div>-->
</template>

<script>
import gql from "graphql-tag";


const DEL_CONTACT = gql`
   mutation delete_addresses($id: uuid!) {
     delete_addresses(where: { id: { _eq: $id } }) {
       affected_rows
      
     }
   }
 `;
const GET_CONTACTS = gql`
  subscription getContacts {
    contacts  (order_by: {id: asc}){
      id
      firstName
      lastName
      email
      address {
        id
        country
        city
        street
        houseNr
      }
    }
  }
`;
const UPDATE_CONTACT = gql`
  mutation update_contacts($id: Int!, $firstName: String!, $lastName: String!, $email: String!){
    update_contacts(where: { id: {_eq: $id}}, _set:{firstName : $firstName, lastName: $lastName, email: $email}){
      affected_rows
    }
  }
`;


  export default {
    name: 'user-table',
  
  data(){
  return {
          contacts:{},
        
          id:null,
          firstName:'',
          lastName:'',
          email:'',
          country:'',
          city: '',
          street:'',
          houseNr:'',

           
          
  }
},
apollo:{
    $subscribe:{
        contacts: {
        query: GET_CONTACTS,
       result(data){
       this.contacts = data.data.contacts;
}
        }
           
           
        },
    
},
methods: {
 

  deleteContact(id){
         
          this.$apollo.mutate({
              mutation:  DEL_CONTACT,
              variables:{
                id: id,
                
                },
            }
          )
      
        },    
  updateContact(id, firstName, lastName, email){
    this.$apollo.mutate({
      mutation: UPDATE_CONTACT,
      variables:{
        id:id,
        firstName: firstName,
        lastName: lastName,
        email:email,
      },
    })
  },
  selectContact(contact){
          this.id = contact.id;
          this.firstName = contact.firstName;
          this.lastName = contact.lastName;
          this.email = contact.email;
          this.country= contact.address.country;
          this.city= contact.address.city;
          this.street= contact.address.street;
          this.houseNr= contact.address.houseNr;
    },
    clearForm(){
      this.id = null;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }    
    }
  }
</script>

<style scoped>

</style>