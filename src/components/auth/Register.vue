<template lang="html">
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="5"></sui-grid-column>
      <sui-grid-column :width="6">
        <sui-segment raised id="user-form-col">
          <sui-header size="large" :textAlign="'center'" id="loginHeader">{{headerText}}</sui-header>
          <sui-header size="tiny" :textAlign="'center'" id="loginSubHeader">{{subheaderText}}</sui-header>
          <sui-form>
            <sui-form-field>
              <sui-input v-model="email" placeholder="Email Address" icon="user" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="password" placeholder="Password" icon="lock" type="password" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="cpassword" placeholder="Confirm Password" icon="lock" type="password" />
            </sui-form-field>
            <!-- <sui-form-field>
              <sui-checkbox label="I agree to the Terms and Conditions" />
            </sui-form-field> -->
            <sui-button type="button" v-on:click="doAuth" :fluid=true id="authSubmitBtn">{{actionBtnText}}</sui-button>
          </sui-form>
          <sui-divider horizontal>Or</sui-divider>
          <router-link to="/login">
            <div class="ui teal labeled icon button fluid">
              {{secondActionText}}
              <i v-bind:class="secondActionIcon + ' icon'"></i>
            </div>
          </router-link>
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column :width="5"></sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      cpassword: '',
      headerText: 'Register New Gooey Account',
      subheaderText: 'The P5 Playground Thing',
      actionBtnText: 'Register Account!',
      secondActionText: 'Login To Your Account',
      secondActionIcon: 'user'
    }
  },
  methods: {
    doAuth: function () {
      if (this.password !== this.cpassword) {
        alert('Hard Fail! Those passwords do not match, like at all...')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // alert('You logged in!')
          this.$router.replace('/')
        },
        (error) => {
          alert(`Hard Fail! ${error.message}`)
        }
      )
    }
  }
}
</script>

<style lang="css">
#user-form-col {
  margin: 50px 0 0 0;
}
</style>
