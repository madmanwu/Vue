import '../style/common/header.css';
export default {
    template: '<header>这是header内容<button @click="fn">click</button></header>',
    methods: {
        fn () {
            alert(1)
        }
    }
};