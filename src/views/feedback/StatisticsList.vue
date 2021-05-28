<template>
  <div class="statistics-list">
    <el-card class="card-style" v-for="item in feedbackList" :key="item.id">
      <div slot="header">
        <span>{{ item.title }}</span>
        <i class="el-icon-delete icon-delete" @click="deleteFeedback(item.id)"></i>
      </div>
      <el-input type="textarea" autosize :value="item.content" />
      <div class="cards-time">
        {{ stamp2DateFormat(item.createdTimestamp) }}
      </div>
    </el-card>
  </div>
</template>



<script lang="ts">
import ViewStatisticsList from "./statisticsList";
export default ViewStatisticsList;
</script>

<style scoped>
.card-style {
  max-width: 250px;
  width: 100%;
  float: left;
  margin: 10px;
}

.cards-time {
  float: right;
  color: #bdc3c7;
  font-size: 10px;
  margin: 5px;
}

.icon-delete{
  float: right;
}
</style>