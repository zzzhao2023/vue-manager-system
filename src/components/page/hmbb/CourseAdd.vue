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
                <el-button type="primary" @click="save()">保存</el-button>
                <el-button @click="goback()">返回</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {addCourseOrChapter, getCourseOrChapter} from "../../../api/aliyun";

    export default {
        name: "TeacherAdd",
        data() {
            return {
                form: {
                    name: '',
                    createAt: '',
                    updateAt: '',
            
                    id:this.$route.query.id,
                }
            }
        },
        created() {
            if(this.form.id){
                this.getItemDetail();
            }
        },

        methods: {
            getItemDetail(){
                var obj={
                    id:this.form.id,
                };
                getCourseOrChapter(obj).then(res =>{
                    console.log(res);
                    if (res.rescode == '0') {
                        this.form = res.data.infos.list[0];
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },
            goBack(){
                this.$router.push({path: '/Course'});
            },
            save() {

                addCourseOrChapter(this.form).then(res => {
                    if (res.rescode == '0') {
                        goBack();
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

        }

    }
</script>

<style scoped>

</style>