<template>

    <div>
        <h4>选择题</h4>
        <exam-table
                v-bind:tableData="exams"
                v-bind:total="uData.total"
                v-bind:page-num="pageNum"
                v-bind:page-size="pageSize"
                v-bind:search="search1"
                @addevent="addevent"
                @handleeditevent="handleeditevent"
                @handlecurrentchange="handleCurrentChange"
                @searchevent="searchevent"
        />
    </div>

</template>

<script>
    import ExamTable from './ExamTable.vue'
    import {getExamination} from "../../../api/aliyun";

    export default {
        name: "Exam",
        data() {
            return {
                exams: [],
                pageNum: 1,
                pageSize: 5,
                search1: '',
                uData: {}
            }
        },
        components: {ExamTable},

        created() {

            this.getQuestions();
        },

        methods: {
            getQuestions() {
                var obj = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    question: this.search1,
                    type: 'single',
                };

                getExamination(obj).then(res => {
                    if (res.rescode == '0') {
                        this.uData = res.data.infos;
                        this.exams = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });

            },
            addevent() {
                this.$router.push({path: '/ExamAdd'})
            },
            handleeditevent(index, obj) {
                this.$router.push({path: '/ExamAdd', query: {id: obj.id}});
            },
            searchevent() {
                this.getCourseData();
            },
            handleCurrentChange(val) {
                this.pageNum = val;
                this.getQuestions();
            },

        }
    }
</script>

<style scoped>

</style>