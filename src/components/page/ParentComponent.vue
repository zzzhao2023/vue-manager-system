<template>
    <div>
        <div class="container">
            <el-row>
                msg:
                <el-input v-model="msg"></el-input>
            </el-row>
            reversedMsg:<p>{{reversedMsg}}</p>
        </div>
        <post @save="save"></post>
    </div>


</template>

<script>
    import Post from './subcomponent/Post.vue';

    export default {
        name: "ParentComponent",
        components: {'post':Post},
        data() {
            return {
                msg: "",
            }
        },

        //计算属性
        computed: {
            reversedMsg: function () {
                return this.msg.split('').reverse().join('');
            }
        },

        //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        beforeCreate(){

        },
        //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
        created() {

        },
        //在挂载开始之前被调用：相关的 render 函数首次被调用。
        beforeMount(){

        },
        //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
        updated(){

        },
        methods: {
            save(){
                this.$message.success("save ....");
            }
        }
    }

</script>

<style scoped>

</style>