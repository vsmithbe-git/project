<script setup>

import {ref} from "vue";
import {useRouter} from "vue-router";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

import useAuth from '../composable/useAuth';
import useError from "../composable/useError";
import { useTimeout, promiseTimeout } from '@vueuse/core';

const schema = yup.object({
      username: yup.string().required().email().label("Email"),
      password: yup.string().required().min(8).label("Password"),
    });

     useForm({
      validationSchema: schema,
    });

const { value: username, errorMessage: emailError } = useField('username');
const { value: password, errorMessage: passwordError } = useField('password');


const {isAuthenticated,  login, signup, googleLogin} = useAuth();

const router = useRouter();

const logginIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
 };

const google = async () => {
  await googleLogin();
  goToHome();
 };

const goToHome = () => {
   if(isAuthenticated.value){
    router.push("/");
  } else {
    setError("Invalid user name and/or password");
    start();
  }
};

const {error, setError} = useError();


const { ready, start } = useTimeout(3000, { controls: true }, false);


</script>

<template>
<div class="">
  <h2 class="flex font-extralight text-6xl tracking-tight  justify-center items-center">Account Profile</h2>
  </div>
<div class=" flex items-center justify-center p-8" >

  <div class=" flex-row space-y-4">
    <img class = "h-64" src="../assets/bglogin.png" alt="Login BG">
         </div>
    <div>
  <form  class="flex flex-col p-4 space-y-4">
      <input 
      name="firstname"
      type="text" 
      class="border-2 p-2 rounded-lg"
      placeholder="First Name" 
      v-model = "firstname"
      />
      <input 
      name="lastname"
      type="text" 
      class="border-2 p-2 rounded-lg"
      placeholder="Last Name" 
      v-model = "lastname"
      />

      <input 
      name="dateofbirth"
      type="date" 
      class="border-2 p-2 rounded-lg"
      placeholder="Last Name" 
      v-model = "dateofbirth"
      />
    
      </form>
 
      </div>
      </div>
  
</template>