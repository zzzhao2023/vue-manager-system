<template>
    <div class="container">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="创建时间">
                <el-input v-model="form.createAt"></el-input>
            </el-form-item>

            <el-form-item label="修改时间">
                <el-input v-model="form.updateAt"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button @click="goback">返回</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "TableItem",
        props: ['form'],
        methods:{
            save(){
                this.$emit('save');
            },
            goback(){
                this.$emit('goback');
            }
        }

    }
</script>

<style scoped>

</style>