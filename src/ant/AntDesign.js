import { Button, message } from 'ant-design-vue';

const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.prototype.$message = message;
    }
};
export default ant