import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 需要将message挂载到vue上面才可以生效,$message是自定义的，可以叫别的名称
Vue.prototype.$message = Message
