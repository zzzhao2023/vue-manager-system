<template>
    <div>
        <h4>填空题</h4>
        <question-table
                v-bind:tableData="questions"
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
    import QuestionTable from './QuestionTable.vue'
    import {getQuestionList} from "../../../api/aliyun";

    export default {
        name: "Answers",
        data() {
            return {
                questions: [],
                pageNum: 1,
                pageSize: 5,
                search1: '',
                uData: {}
            }
        },
        components: {QuestionTable},

        created() {

            this.getQuestions();
        },

        methods: {
            getQuestions() {
                var obj = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    question: this.search1,
                    type: 'answer',
                };

                getQuestionList(obj).then(res => {
                    if (res.rescode == '0') {
                        this.uData = res.data.infos;
                        this.questions = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });

            },
            addevent() {
                this.$router.push({path: '/AnswersAdd',query:{type:'course'}})
            },
            handleeditevent(index, obj) {
                this.$router.push({path: '/AnswersAdd', query: {id: obj.id,type:'course'}});
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