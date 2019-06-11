<template>
    <div class="container">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="form.pwd"></el-input>
            </el-form-item>

            <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="编号">
                <el-input v-model="form.markNum"></el-input>
            </el-form-item>

            <!--<el-form-item label="年级标识">-->
            <!--<el-input v-model="form.classID"></el-input>-->
            <!--</el-form-item>-->

            <el-form-item label="职称">
                <el-input v-model="form.teachLevel"></el-input>
            </el-form-item>

            <el-form-item label="手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDay"
                                format="yyyy-MM-dd HH:mm:ss"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                style="width: 100%;"></el-date-picker>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goBack()">返回</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {addUser, users} from "../../../api/aliyun";

    export default {
        name: "TeacherAdd",
        data() {
            return {
                form: {
                    name: '',
                    pwd: '',
                    markNum: '',
                    sex: '男',
                    classID: '1',
                    teachLevel: '',
                    email: '',
                    remak: '',
                    phone: '',
                    birthDay: '',
                    id:this.$route.query.id,
                }
            }
        },
        created() {
            if(this.form.id){
                this.getUserDetail();
            }
        },

        methods: {
            getUserDetail(){
                var obj={
                    id:this.form.id,
                };
                users(obj).then(res =>{
                    console.log(res);
                    if (res.rescode == '0') {
                        this.form = res.data.users.list[0];
                        console.log(this.form);
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },
            goBack(){
                this.$router.push({path: '/Teacher'});
                // window.location.href = document.referrer;
                // window.history.back(-1);
            },
            onSubmit() {
                console.log(this.form);
                addUser(this.form).then(res => {
                        console.log(res);
                        if (res.rescode == '0') {
                            this.$router.push({path: '/Teacher'})
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