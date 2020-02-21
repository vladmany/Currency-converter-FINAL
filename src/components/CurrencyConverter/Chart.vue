<template>
    <div class="chart">
        <GChart
                type="AreaChart"
                :data="chartData"
                :options="chartOptions"
        />
        <div>{{this.$store.getters.inputCurrency}}</div>
    </div>
</template>

<script>
    import { GChart } from 'vue-google-charts'
    import Vuex from 'vuex'
    import Vue from 'vue'

    import {chart} from "../../main";

    Vue.use(Vuex)
    export default {
        components: {
            GChart
        },
        data () {
            return {
                chartData: [
                    ['Year', 'EUR to USD'],
                    ['2017', this.$store.state.currencies["2017"].baseEUR.USD],
                    ['2018', this.$store.state.currencies["2018"].baseEUR.USD],
                    ['2019', this.$store.state.currencies["2019"].baseEUR.USD],
                    ['2020', this.$store.state.currencies["2020"].baseEUR.USD]
                ],
            }
        },
        created() {
            chart.$on("updateChart", data => {
                this.chartData = [
                    ['Year', data.input + " to " + data.output],
                    ['2017', this.$store.state.currencies["2017"]['base' + data.input][data.output]],
                    ['2018', this.$store.state.currencies["2018"]['base' + data.input][data.output]],
                    ['2019', this.$store.state.currencies["2019"]['base' + data.input][data.output]],
                    ['2020', this.$store.state.currencies["2020"]['base' + data.input][data.output]]
                ]
            })

        }
    }
</script>

<style scoped>
    .chart {
        max-width: 500px;
    }
</style>