<template>
  <div>
    <div class=" bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
      v-if="data">
      <!-- 左 -->
      <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
        <!-- 横向柱状图 -->
        <HorizontalBar class=" h-1/3 box-border pb-4" :data="data.regionData"></HorizontalBar>
        <!-- 雷达图 -->
        <RadarBar class=" h-1/3 box-border pb-4" :data="data.riskData"></RadarBar>
        <!-- 关系图 -->
        <Relation class=" h-1/3" :data="data.relationData"></Relation>
      </div>
      <!-- 中 -->
      <div class="w-1/2 mr-5 flex flex-col bg-slate-800 bg-opacity-50">
        <!-- 数据总览 -->
        <TotalData class=" bg-opacity-50 bg-slate-800 p-3" :data="data.totalData"></TotalData>
        <!-- 地图可视化 -->
        <MapChart class=" bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" :data="data.mapData"></MapChart>
      </div>
      <!-- 右 -->
      <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
        <!-- 竖向柱状图 -->
        <VerticalBar class=" h-2/3 box-border pb-4" :data="data.serverData"></VerticalBar>
        <!-- 环形图 -->
        <RingBar class=" h-1/3 box-border pb-4" :data="data.abnormalData"></RingBar>
        <!-- 文档云图 -->
        <WordCloud class=" h-2/3" :data="data.wordCloudData"></WordCloud>
      </div>
    </div>
  </div>
</template>
<script setup>
import HorizontalBar from './components/HorizontalBar.vue';
import RadarBar from './components/RadarBar.vue';
import Relation from './components/Relation.vue';
import TotalData from './components/TotalData.vue';
import MapChart from './components/MapChart.vue';
import VerticalBar from './components/VerticalBar.vue';
import RingBar from './components/RingBar.vue';
import WordCloud from './components/WordCloud.vue';

import { ref } from 'vue'
import { getVisualization } from './api/visualization'

const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
}
loadData()
// setInterval(() => {
//   loadData()
// }, 3000)

</script>
<style lang="scss" scoped></style>