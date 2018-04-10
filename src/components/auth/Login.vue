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
              <sui-input v-model="email" placeholder="Username" icon="user" />
            </sui-form-field>
            <sui-form-field>
              <sui-input v-model="password" placeholder="Password" icon="lock" type="password" />
            </sui-form-field>
            <!-- <sui-form-field>
              <sui-checkbox label="I agree to the Terms and Conditions" />
            </sui-form-field> -->
            <sui-button type="button" v-on:click="doAuth" :fluid=true id="authSubmitBtn">{{actionBtnText}}</sui-button>
          </sui-form>
          <sui-divider horizontal>Or</sui-divider>
          <router-link to="/register">
            <div class="ui teal labeled icon button fluid">
              {{secondActionText}}
              <i v-bind:class="secondActionIcon + ' icon'"></i>
            </div>
          </router-link>
          <sui-divider horizontal>You Should Know...</sui-divider>
          <sui-container>
            <p>This project is inspired by the hard work of Daniel Schiffman, who is most likely the best human being you'll ever meet.  You should check out his Youtube channel and become a Patreon.</p>
          </sui-container>
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
      headerText: 'Login to Gooey',
      subheaderText: 'The P5 Playground Thing',
      actionBtnText: 'Connect!',
      secondActionText: 'Create New Gooey Account',
      secondActionIcon: 'add'
    }
  },
  methods: {
    doAuth: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
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
