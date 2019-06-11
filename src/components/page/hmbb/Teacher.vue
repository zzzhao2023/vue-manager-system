<template>
    <div class="container">
        <div>
            <el-button type="primary" @click="addTeachers()" style="width: 5%">添加教师</el-button>
        </div>

        <div>
            <el-row>
                <el-input v-model="search" placeholder="用户名" style="width: 20%"></el-input>
                <el-button type="primary" @click="searchByName()" style="width: 5%">搜索</el-button>
            </el-row>
        </div>
        <div>
            <el-table
                    :data="users.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <!--<el-table-column prop="id" label="序号"></el-table-column>-->
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="teachLevel" label="职称"></el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column prop="birthDay" label="生日"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="remark" label="备注"></el-table-column>
                <el-table-column
                        align="right">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">查看
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
            <!--分页器-->
            <nav class="text-center">
                <div class="block pagination">
                    <el-pagination
                            layout="prev, pager, next"
                            :current-page="pageNum"
                            @current-change="handleCurrentChange"
                            :total="uData.total">
                    </el-pagination>
                </div>
            </nav>

        </div>

    </div>
</template>

<script>
    import {users} from "../../../api/aliyun";

    export default {
        name: "Teacher",
        data() {
            return {
                users: [],
                pageNum: 1,
                pageSize: 10,
                search: '',
                uData: {},
            }
        },
        created() {

            this.getUsers();
        },
        methods: {
            getUsers() {
                var obj = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    name: this.search,
                };
                users(obj).then(res => {
                    if (res.rescode == '0') {
                        this.uData = res.data.users;
                        this.users = res.data.users.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

            handleCurrentChange(val) {
                this.pageNum = val;
                getUsers();
            },

            addTeachers() {
                this.$router.push({path: '/addTeachers'})
            },
            handleEdit(index, obj) {
                this.$router.push({path: '/addTeachers', query: {id: obj.id}});
            },
            searchByName() {
                console.log(111);
                this.getUsers();
            }
        }
    }
</script>

<style scoped>

</style>