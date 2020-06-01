import {
    Button,
    message,
    Icon
} from 'ant-design-vue';

const ant = {
    install: function (Vue) {
        Vue.use(message);
        Vue.component(Button.name, Button);
        Vue.component(Icon.name, Icon);
        Vue.prototype.$message = message;
    }
};
export default ant