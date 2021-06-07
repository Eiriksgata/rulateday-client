import Axios from "axios";
import moment from "moment";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ViewStatisticsList extends Vue {

  feedbackList = [];
  activeIndex = '2';


  /**
   * 初始运行
   */
  mounted() {
    this.queryAllFeedback();
  }

  stamp2DateFormat(timestamp: number) {
    return moment(timestamp).format("yyyy-MM-DD");
  }

  deleteFeedback(id: number) {
    const _this = this;

    Axios({
      url: '/feedback/delete',
      method: 'post',
      data: {
        "id": id
      }
    }).then(function (response) {
      if (response.data.code === 0) {
        _this.$notify({
          title: 'Success',
          type: 'success',
          message: '操作成功'
        });
        _this.queryAllFeedback();

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


  queryAllFeedback() {
    const _this = this;
    Axios({
      url: '/feedback/query',
      method: 'post',
      data: {
        "data": "",
        "pageNumber": 0,
        "pageSize": 100
      }
    }).then(function (response) {
      if (response.data.code === 0) {


        _this.feedbackList = response.data.data.list;

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

  handleSelect(key: string, keyPath: any) {
    switch (key) {
      case '1':
        this.$router.push('/exception/commit');
        return;
      case '2':
        this.$router.push('/exception/list');
        return;
      case '3':
        window.open("https://rulateday-api.herokuapp.com/doc.html#/home", "_blank");
        return;
    }
  }


}