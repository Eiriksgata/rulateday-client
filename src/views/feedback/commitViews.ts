import Axios from 'axios';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class ViewFeedbackCommit extends Vue {

  form = {
    qqId: '',
    title: '',
    content: ''
  }

  commitForm() {
    const _this = this;
    Axios({
      url: '/feedback/exception',
      method: 'post',
      data: this.form
    }).then(function (response) {
      if (response.data.code === 0) {
        _this.$notify({
          title: 'Success',
          type: 'success',
          message: '操作成功'
        });
      } else {
        _this.$notify({
          title: response.data.code,
          type: 'error',
          message: response.data.message
        });
      }
    }).catch(function (err) {
      _this.$notify({
        title: 'Client Error',
        type: 'error',
        message: err
      });
    });

  }


}