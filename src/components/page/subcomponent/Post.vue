<template>
    <div>
        <el-row>
            <el-button @click="count++"> you clicked me {{count}} times</el-button>
        </el-row>

        <el-row>
            <el-button @click="save"> 保存</el-button>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['post',],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            save() {
                return this.$emit('save')
            }

        }

    }
</script>

<style scoped>

</style>