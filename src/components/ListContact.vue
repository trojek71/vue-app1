<template>
  <div id="user-table">
    <b-table-simple bordered>
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
            <b-button @click="selectContact(contact)" v-b-modal.modal-1>Edit</b-button>
            
            <b-button @click="deleteContact(contact.address.ad_id)">Delete</b-button>
            
          </td>
        </b-tr>
      
        
      </b-tbody>
       
    </b-table-simple>
  
  <b-modal  hide-footer id="modal-1" ref="myCancel" title="Update contact" >
    <form>
         <label>Update contact</label>
        <b-container fluid>
          <b-row class="my-1">
         <b-form-input type="text" name="firstName" id="input-small" size="sm" placeholder="Enter your name" v-model="firstName"/>
          </b-row>
         <b-form-input type="text" name="lastName" v-model="lastName"/>
         <b-form-input type="text" name="emailName" v-model="email"/>
         <b-form-input type="text" name="country" v-model="country"/>
         <b-form-input type="text" name="city" v-model="city"/>
         <b-form-input type="text" name="street" v-model="street"/>
         <b-form-input type="number" name="hause number" v-model="houseNr"/>
        </b-container>
       </form>
       <b-button variant="success"   @click="updateContact(id, firstName, lastName, email, ad_id, country, city, street, houseNr)" value="Update">Update</b-button>
       <b-button variant="danger"   @click="hideModal">Cancel</b-button>
  </b-modal>
  </div>
</template>

<script>
import gql from "graphql-tag";


const DEL_CONTACT = gql`
   mutation delete_addresses($ad_id: uuid!) {
     delete_addresses(where: { ad_id: { _eq: $ad_id } }) {
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
        ad_id
        country
        city
        street
        houseNr
      }
    }
  }
`;
const UPDATE_CONTACT = gql`
  mutation update_contacts($id: Int!, $firstName: String!, $lastName: String!, $email: String!, $ad_id: uuid, $country: String, $city:String, $street:String, $houseNr:Int ){
    update_contacts(where: { id: {_eq: $id}}, _set:{firstName : $firstName, lastName: $lastName, email: $email}){
      affected_rows
    }
    update_addresses(where:{ad_id: {_eq: $ad_id}}, _set:{country: $country, city: $city, street: $street, houseNr: $houseNr}){
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
          ad_id:null,        
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
 

  deleteContact(ad_id){
         
          this.$apollo.mutate({
              mutation:  DEL_CONTACT,
              variables:{
                ad_id: ad_id,
                
                },
            }
          )
      
        },    
  updateContact(id, firstName, lastName, email, ad_id, country, city, street, houseNr){
    this.$apollo.mutate({
      mutation: UPDATE_CONTACT,
      variables:{
        id:id,
        firstName: firstName,
        lastName: lastName,
        email:email,
        ad_id:ad_id,
        country: country,
        city:city,
        street:street,
        houseNr:houseNr

      },
    })
    this.hideModal()
  },
 hideModal() {
        this.$refs.myCancel.hide()
 },
  selectContact(contact){
          this.id = contact.id;
          this.firstName = contact.firstName;
          this.lastName = contact.lastName;
          this.email = contact.email;
          this.ad_id = contact.address.ad_id
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
      this.ad_id ='';
      this.country ='';
      this.city= '';
      this.street='';
      this.houseNr='';
    }    
    }
  }
</script>

<style>
modal
{
  padding: 12px;
  border: 2px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  margin:10px;
}
</style>