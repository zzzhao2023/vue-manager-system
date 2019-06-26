<template>
    <div>
        <el-row>
            <el-button @click="count++"> you clicked me {{count}} times</el-button>
        </el-row>

        <el-row>
            <el-button @click="doButton(message)"> 保存 </el-button>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['post', 'message'],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            doButton(param) {
                return this.$emit('save', param)
            }

        }

    }
</script>

<style scoped>

</style>