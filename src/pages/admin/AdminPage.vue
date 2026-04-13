<script setup>
import AdminSidebar from '../../components/AdminSidebar.vue';
import GlobalSearchBar from '../../components/GlobalSearchBar.vue';

</script>


<template>
        <div class="min-h-screen flex">
            <AdminSidebar/>
            <div class="mx-auto w-full">
            <RouterView></RouterView>
            </div>
        </div>
</template>