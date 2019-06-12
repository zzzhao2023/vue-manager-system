<template>
    <div>
        <div>
            <el-button type="primary" v-on:click="addevent" style="width: 5%">添加</el-button>
        </div>

        <div>
            <el-row>
                <el-input v-model="search" placeholder="名称" style="width: 20%"></el-input>
                <el-button type="primary" @click="searchevent" style="width: 5%">搜索</el-button>
            </el-row>
        </div>

        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <!--<el-table-column prop="id" label="序号"></el-table-column>-->
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="createAt" label="创建时间"></el-table-column>
            <el-table-column prop="updateAt" label="修改时间"></el-table-column>
            <el-table-column
                    align="right">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleeditevent(scope.$index, scope.row)">查看
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
                        :page-size="pageSize"
                        @current-change="handlecurrentchange"
                        :total="total">
                </el-pagination>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "HomeTable",
        props: ['tableData', 'total','pageNum','search','pageSize'],
        data: function () {
            return {

            }
        },
        methods:{
            addevent(){
                this.$emit('addevent');
            },
            searchevent(){
                this.$emit('searchevent');
            },
            handleeditevent(index,item){
                this.$emit('handleeditevent',index,item);
            },
            handlecurrentchange(param){
                this.$emit('handlecurrentchange',param);
            }

        }

    }
</script>

<style scoped>

</style>