<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const {isAuthenticated, logout} = useAuth();

const router = useRouter();

const loggingOut = () => {
    logout()
    router.push("/");
}
</script>

<template>
<div class="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-blue-50 font-medium">	
    <div class="container mx-auto flex justify-between items-center">
        <h1 class="tracking-tight text-3xl font-thin">Family<span class="font-normal">Tree</span>
        </h1>
        <nav>
            <ul class="flex space-x-4 w-full">
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Home</li></router-link>
                <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">About</li></router-link>
                <router-link v-if="!isAuthenticated" to="/login"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Login</li></router-link>
                <div v-else class="flex">
                <router-link :to="{name: 'AccountProfile'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Account Profile</li></router-link>
                <router-link  :to="{name: 'FamilyHistory'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Family History</li></router-link>
                <router-link :to="{name: 'FamilyMember'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Family Member</li>
                </router-link>

                <button  @click="loggingOut"><li class="py-8 px-4 hover:cursor-pointer hover:bg-blue-50 hover:text-pink-700">Logout</li>
                </button>
                </div>
            </ul>
        </nav>
    </div>
</div>

</template>
