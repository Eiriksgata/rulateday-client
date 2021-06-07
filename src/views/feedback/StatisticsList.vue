<template>
  <div class="statistics-list">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1" >反馈BUG</el-menu-item>
          <el-menu-item index="2">反馈墙</el-menu-item>
          <el-menu-item index="3">API</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-card class="card-style" v-for="item in feedbackList" :key="item.id">
          <div slot="header">
            <span>{{ item.title }}</span>
            <i
              class="el-icon-delete icon-delete"
              @click="deleteFeedback(item.id)"
            ></i>
          </div>
          <el-input type="textarea" rows=10 :value="item.content" />
          <div class="cards-time">
            {{ stamp2DateFormat(item.createdTimestamp) }}
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import ViewStatisticsList from "./statisticsList";
export default ViewStatisticsList;
</script>

<style scoped>
.card-style {
  max-width: 700px;
  width: 100%;
  float: left;
  margin: 5px;
}

.cards-time {
  float: right;
  color: #bdc3c7;
  font-size: 10px;
  margin: 5px;
}

.icon-delete {
  float: right;
}
</style>