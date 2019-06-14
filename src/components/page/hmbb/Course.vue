<template>
    <div class="container">
        <p>课程管理</p>
        <home-table v-bind:tableData="course"
                    v-bind:total="uData1.total"
                    v-bind:page-num="pageNum1"
                    v-bind:page-size="pageSize1"
                    v-bind:search="search1"
                    @addevent="addevent"
                    @handleeditevent="handleeditevent"
                    @handlecurrentchange="handleCurrentChange1"
                    @searchevent="searchevent"
        />
        <p>章节管理</p>
        <home-table v-bind:tableData="chapter"
                    v-bind:total="uData2.total"
                    v-bind:page-num="pageNum2"
                    v-bind:page-size="pageSize2"
                    v-bind:search="search2"
                    @addevent="addevent2"
                    @handleeditevent="handleeditevent2"
                    @handlecurrentchange="handleCurrentChange2"
                    @searchevent="searchevent2"
        />
    </div>

</template>

<script>

    import HomeTable from './HomeTable';
    import {getCourseOrChapter} from "../../../api/aliyun";


    export default {
        name: "Course",
        components: {HomeTable},
        data() {
            return {
                course: [],
                chapter: [],
                pageNum1: 1,
                pageSize1: 5,
                pageNum2: 1,
                pageSize2: 5,
                search1: '',
                search2: '',
                uData1: {},
                uData2: {},

            }
        },
        created() {
            //获取课程
            this.getCourseData();
            //获取章节
            this.getChapterData();
        },
        methods: {
            //课程
            getCourseData() {
                var obj = {
                    pageSize: this.pageSize1,
                    pageNum: this.pageNum1,
                    name: this.search1,
                    type: 'course',
                };
                getCourseOrChapter(obj).then(res => {
                    if (res.rescode == '0') {
                        this.uData1 = res.data.infos;
                        this.course = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },
            //章节
            getChapterData() {
                var obj = {
                    pageSize: this.pageSize2,
                    pageNum: this.pageNum2,
                    name: this.search2,
                    type: 'chapter',
                };
                getCourseOrChapter(obj).then(res => {
                    if (res.rescode == '0') {
                        this.uData2 = res.data.infos;
                        this.chapter = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },


            ///////////////////有关课程
            addevent() {
                this.$router.push({path: '/CourseAdd',query:{type:'course'}})
            },
            handleeditevent(index, obj) {
                this.$router.push({path: '/CourseAdd', query: {id: obj.id,type:'course'}});
            },
            searchevent() {
                this.getCourseData();
            },
            //翻页
            handleCurrentChange1(val) {
                this.pageNum1 = val;
                this.getCourseData();
            },
            ////////////有关章节

            addevent2() {
                this.$router.push({path: '/CourseAdd',query:{type:'chapter'}})
            },
            handleeditevent2(index, obj) {
                this.$router.push({path: '/CourseAdd', query: {id: obj.id,type:'chapter'}});
            },
            searchevent2() {
                this.getChapterData();
            },
            handleCurrentChange2(val) {
                this.pageNum2 = val;
                this.getChapterData();
            },
        }
    }
</script>

<style scoped>

</style>