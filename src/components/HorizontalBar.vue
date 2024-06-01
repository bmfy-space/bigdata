<template>
    <div>
        <div>【大区数据信息】</div>
        <div ref="target" class="h-full"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
// 1.初始化echarts实例
let mChart = null
const target = ref(null)

onMounted(() => {
    mChart = echarts.init(target.value)
    renderChart()
})

watch(() => props.data, () => {
    renderChart()
})

// 2.构建option配置对象
const renderChart = () => {
    const options = {
        // x轴的展示数据
        xAxis: {
            show: false,
            type: 'value',
            max: function (value) {
                return parseInt(value.max * 1.2)
            },
        },
        // y轴的展示数据
        yAxis: {
            type: 'category',
            data: props.data.regions.map(item => item.name),
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLable: {
                color: '#9eb1c8'
            },
        },
        // 图标绘制的位置，对应 上下左右
        grid: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            containLabel: true
        },
        // 核心配置
        series: [
            {
                type: 'bar',
                data: props.data.regions.map(item => ({
                    name: item.name,
                    value: item.value
                })),
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180,180,180,0.2)'
                },
                itemStyle: {
                    color: '#479AD3',
                    barBorderRadius: 5,
                    shadowColor: 'rgba(0,0,0,0,3)',
                    shadowBlur: 5
                },
                barWidth: 12,
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ]
    }
    // 3.通过 实例.setOptions(option)
    mChart.setOption(options)
}
</script>

<style lang="scss" scoped></style>