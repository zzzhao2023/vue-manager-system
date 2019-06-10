import axios from './axios'

//登录
export function login(data) {
    const url = "/examination/login";
    return axios.post(url,data);
}
//添加教师：
export function addUser(data) {
    const url="/examination/addUser";
    return axios.post(url,data);
}
//查询教师：
export function users(data) {
    const url="/examination/users";
    return axios.post(url,data);
}


//添加 课程 | 章节
export function addCourseOrChapter(data) {
    const url = "/examination/addCourseOrChapter";
    return axios.post(url, data);
}
//添加问答
export function addAnswer(data) {
    const url="/examination/addAnswer";
    return axios.post(url,data);
}
//添加填空
export function addEmpty(data) {
    const url="/examination/addEmpty";
    return axios.post(url,data);
}


//添加判断
export function addJudge(data) {
    const url = "/examination/addJudge";
    return axios.post(url, data);
}
//添加单选
export function addSingleQ(data) {
    const url="/examination/addSingleQ";
    return axios.post(url,data);
}


//获取题目详情
export function postQuestion(data) {
    const url="/examination/postQuestion";
    return axios.post(url,data);
}





//获取题目列表
export function postQuestionList(data) {
    const url="/examination/postQuestionList";
    return axios.post(url,data);
}
//生成试卷
export function addExamination(data) {
    const url="/examination/addExamination";
    return axios.post(url,data);
}


//试卷列表
export function postExamination(data) {
    const url = "/examination/postExamination";
    return axios.post(url, data);
}

//试卷详情
export function postExaminationDetail(data) {
    const url="/examination/postExaminationDetail";
    return axios.post(url,data);
}

//下载
export function downloadExamination(data) {
    const url="/examination/downloadExamination";
    return axios.post(url,data);
}



