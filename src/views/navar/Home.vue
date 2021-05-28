<template>
  <div class="home">
    <el-container>
      <el-header></el-header>
      <el-main
        ><el-card class="card-style">
          <div slot="header">
            <span>导航列表</span>
          </div>

          <el-row>
            <el-col :span="24">
              <el-button type="warning" @click="$router.push('/exception/commit')">
                反馈BUG
              </el-button>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="$router.push('/exception/list')">
                反馈墙
              </el-button>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-button type="info" @click="openApiPage()">
                查看API
              </el-button>
            </el-col>
          </el-row>
        </el-card></el-main
      >
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  openApiPage() {
    window.open("https://rulateday-api.herokuapp.com/doc.html#/home", "_blank");
  }
}
</script>

<style >
.el-row {
  margin-bottom: 20px;
}
.el-button {
  width: 100%;
}
</style>

<style scoped>
.card-style {
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
}


.home {
  background-color: #bbe6d6;
  height: 100%;
  width: 100%;
}
</style>