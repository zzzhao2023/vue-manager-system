<template>
    <div>
        <h1>{{post.title}}</h1>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        props:['post'],

    }
</script>

<style scoped>

</style>