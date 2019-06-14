<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="userFrom" ref="userFrom" label-width="0px" class="ms-content">

                <el-form-item prop="role" label="">
                    <!--<el-row>-->
                        <el-button icon="el-icon-lx-people"> 角色</el-button>
                        <el-select v-model="userFrom.role" icon="el-icon-lx-people">
                            <el-option v-for="item in roles" :value="item.name" :label="item.desc"></el-option>
                        </el-select>
                    <!--</el-row>-->
                </el-form-item>


                <el-form-item prop="username">
                    <el-input v-model="userFrom.phone" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"> 用户</el-button>
                    </el-input>
                </el-form-item>


                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="userFrom.pwd">
                        <el-button slot="prepend" icon="el-icon-lx-lock"> 密码</el-button>
                    </el-input>
                </el-form-item>


                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from "../../api/aliyun";

    export default {
        data() {
            return {
                roles: [
                    {
                        name: 'manager',
                        desc: "管理员",
                    },
                    {
                        name: 'teacher',
                        desc: "教师",
                    },

                ]
                ,
                userFrom: {
                    phone: '18500001212',
                    pwd: '123456',
                    role: 'manager'
                }
            }
        },
        methods: {
            submitForm() {
                login(this.userFrom).then(res => {
                    if (res.rescode == '0') {
                        localStorage.setItem('ms_username', this.userFrom.phone);
                        localStorage.setItem('ms_role', this.userFrom.role);
                        this.$router.push('/');
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

        }
    }
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/login-bg.jpg);
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>