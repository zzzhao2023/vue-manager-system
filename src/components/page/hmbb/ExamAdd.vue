<template>
    <div>

        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="编号" label-width="80px">
                <el-input v-model="form.markNum"/>
            </el-form-item>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="课程">
                        <el-select v-model="form.courseName">
                            <el-option v-for="item in course" :lable="item.name" :value="item.name"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="章节">
                        <el-select v-model="form.chaptName">
                            <el-option v-for="item in chapter" :lable="item.name" :value="item.name"/>
                        </el-select>
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="难易">
                        <el-select v-model="form.sInfo" placeholder="请选择">
                            <el-option label="容易" value="容易"></el-option>
                            <el-option label="困难" value="困难"></el-option>
                        </el-select>
                    </el-form-item>

                </el-col>
                <el-col :span="12">
                    <el-form-item label="模式">
                        <el-select v-model="form.sMode" placeholder="请选择">
                            <el-option label="考试" value="考试"></el-option>
                            <el-option label="练习" value="练习"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="选择题数">
                        <el-input v-model="form.singleNum"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="选择题分数">
                        <el-input v-model="form.singleScore"></el-input>
                    </el-form-item>

                </el-col>
            </el-row>
            <el-row :gutter="20">

                <el-col :span="12">
                    <el-form-item label="判断题数量">
                        <el-input v-model="form.judgeNum"></el-input>
                    </el-form-item>

                </el-col>
                <el-col :span="12">
                    <el-form-item label="判断题分数">
                        <el-input v-model="form.judgeScore"></el-input>
                    </el-form-item>

                </el-col>

            </el-row>


            <el-row :gutter="20">

                <el-col :span="12">

                    <el-form-item label="填空题数量">
                        <el-input v-model="form.emptyNum"></el-input>
                    </el-form-item>

                </el-col>
                <el-col :span="12">
                    <el-form-item label="填空题分数">
                        <el-input v-model="form.emptyScore"></el-input>
                    </el-form-item>
                </el-col>

            </el-row>


            <el-row :gutter="20">

                <el-col :span="12">
                    <el-form-item label="问答题数量">
                        <el-input v-model="form.answerNum"></el-input>
                    </el-form-item>

                </el-col>
                <el-col :span="12">
                    <el-form-item label="问答题分数">
                        <el-input v-model="form.answerScore"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!--各个题目详情-->

            <el-form-item label="填空题">
                <el-row v-for="(item,index) in form.emptyInfoList">
                    <el-col :span="1">{{index+1}} ：</el-col>
                    <el-col :span="23">{{item.question}} （）</el-col>
                </el-row>
            </el-form-item>


            <el-form-item label="判断题">
                <el-row v-for="(item,index) in form.judgeInfoList">
                    <el-col :span="1">{{index+1}} ：</el-col>
                    <el-col :span="23">{{item.question}} （）</el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="选择题">
                <el-row v-for="(item,index) in form.singleInfoList">
                    <el-col :span="1">{{index+1}} ：</el-col>
                    <el-col :span="23">{{item.question}} （）</el-col>
                    <el-col :span="6">A:{{item.optionA}}</el-col>
                    <el-col :span="6">B:{{item.optionB}}</el-col>
                    <el-col :span="6">C:{{item.optionC}}</el-col>
                    <el-col :span="6">D:{{item.optionD}}</el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="问答题">
                <el-row v-for="(item,index) in form.answerInfoList">
                    <el-col :span="1">{{index+1}} ：</el-col>
                    <el-col :span="23">{{item.question}} （）</el-col>
                </el-row>
            </el-form-item>


            <el-form-item>
                <el-button v-if="!isQuery" type="primary" @click="save()">添加</el-button>
                <el-button v-if="isQuery" type="primary" @click="download()">下载</el-button>
                <el-button @click="goback()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    import {addExamination, downloadUrl, getChapter, getCourse, getExaminationDetail} from "../../../api/aliyun";

    export default {
        name: "ExamAdd",
        data() {
            return {
                form: {
                    markNum: '',
                    courseName: '',
                    chaptName: '',
                    sInfo: '',
                    sMode: '',
                    singleInfoList: [],
                    emptyInfoList: [],
                    answerInfoList: [],
                    judgeInfoList: [],
                    singleNum: '',
                    singleScore: '',
                    emptyNum: '',
                    emptyScore: '',
                    judgeNum: '',
                    judgeScore: '',
                    answerNum: '',
                    answerScore: '',
                    createAt: '',
                    updateAt: '',
                    type: '',
                    id: this.$route.query.id,
                },
                course: [],
                chapter: [],
                isQuery: this.$route.query.id,
            }
        },
        created() {

            this.getChapters();
            console.log(this.chapter);
            this.getCourses();
            if (this.form.id) {
                this.getItemDetail();
            }


        },
        methods: {
            getCourses() {
                getCourse().then(res => {
                    if (res.rescode == '0') {
                        this.course = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

            getChapters() {
                getChapter().then(res => {
                    console.log(res);
                    if (res.rescode == '0') {
                        this.chapter = res.data.infos.list;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

            getItemDetail() {
                var obj = {
                    id: this.form.id,
                    type: this.$route.query.type,
                };
                getExaminationDetail(obj).then(res => {

                    if (res.rescode == '0') {
                        this.form = res.data.info;
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

            download() {
                //本窗口打卡下载
                window.location.href = downloadUrl + this.form.id;
                // window.open(downloadUrl + this.form.id,'_blank')
                /*     var obj={
                         id:this.form.id,
                     }
                     downloadExamination(obj);*/

            },
            save() {

                console.log(this.form);
                addExamination(this.form).then(res => {
                    if (res.rescode == '0') {
                        this.goback();
                    } else {
                        this.$message.error(res.info.resultMsg);
                    }
                });
            },

            goback() {
                this.$router.push({path: '/Exam'});
            },


        }


    }
</script>

<style scoped>

</style>