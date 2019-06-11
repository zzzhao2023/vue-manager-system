<template>
    <div>
        <p class="welcome">欢迎{{name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'dashboard2',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
            }
        },

    }

</script>


<style scoped>

    .welcome {
        font-size: 30px;
        text-align: center;
        padding-top: 300px;
        color: #409eff;
    }

</style>
