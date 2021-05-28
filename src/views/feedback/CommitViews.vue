<template>
  <div class="feedback-commit">
    <el-container>
      <el-main>
        <el-card class="card-style">
          <el-form label-position="top">
            <el-form-item label="出错的指令格式,或者描述问题">
              <el-input
                v-model="form.title"
                placeholder=""
                autofocus
                clearable
                type="textarea"
              ></el-input>
            </el-form-item>

            <el-form-item label="系统报错内容">
              <el-input
                v-model="form.content"
                placeholder=""
                autofocus
                clearable
                class="line-height-spacing"
                type="textarea"
                rows="5"
              ></el-input>
            </el-form-item>

            <el-form-item label="QQ">
              <el-input
                v-model="form.qqId"
                placeholder=""
                autofocus
                clearable
                class="line-height-spacing"
                type="number"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-row class="line-height-spacing">
            <el-button @click="commitForm()" type="primary">提交</el-button>
          </el-row>
        </el-card>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import ViewFeedbackCommit from "./commitViews";
export default ViewFeedbackCommit;
</script>

<style scoped>
.card-style {
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
}

.el-button {
  width: 100%;
}

.line-height-spacing {
  margin-top: 0px;
}

.feedback-commit {
  background-color: #bbe6d6;
  height: 100%;
}
</style>