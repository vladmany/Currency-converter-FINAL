<template>
	<div id="counter">
		<div class="change-currency">
			<span>Your currency: </span>
			<select v-model="currency">
				<option>EUR</option>
				<option>USD</option>
				<option>UAH</option>
				<option>RUB</option>
			</select>
		</div>
		<div class="counters-wrapper">
			<button @click="outputCurrency = 'EUR'">
				<span>EUR</span>
				<span>{{ currencies['base' + currency].EUR }}</span>
			</button>
			<button @click="outputCurrency = 'USD'">
				<span>USD</span>
				<span>{{ currencies['base' + currency].USD }}</span>
			</button>
			<button @click="outputCurrency = 'UAH'">
				<span>UAH</span>
				<span>{{ currencies['base' + currency].UAH }}</span>
			</button>
			<button>
				<span @click="outputCurrency = 'RUB'">RUB</span>
				<span>{{ currencies['base' + currency].RUB }}</span>
			</button>
		</div>
		<converter-form :currency="currency" :currencies="currencies" @switchCounterCurrency="switchCounterCurrency"></converter-form>
		<chart></chart>
	</div>
</template>

<script>
import ConverterForm from "./Converter"
import Chart from "./Chart"
import { outputBus } from '../../main.js'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


export default {
	components: {ConverterForm, Chart},
  name: "Counter",
  data() {
	return {
		currency: "EUR",
		currencies: this.$store.state.currencies["2020"],
		outputCurrency: ""
	}
  },
  methods: {
	switchCounterCurrency(inputSelect) {
		this.currency = inputSelect
	}
  },
	watch: {
		outputCurrency: function () {
			outputBus.$emit("switchOutputCurrency",this.outputCurrency)
		}
	}
}
</script>

<style type="text/css" scoped>
	.change-currency {
		max-width: 500px;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 50px;
	}	
	.change-currenct span {
		/*float: right;*/
	}
	.counters-wrapper {
		display: flex;
		max-width: 500px;
		justify-content: center;
	}
	.counters-wrapper button {
		display: flex;
		flex-direction: column;
		width: 60px;
		height: 40px;
		align-items: center;
		justify-content: center;
		border-radius: 15px;
		border-width: 0px;
		background-color: gray;
		margin-right: 25px;
		outline: none;
		user-select: none;
	}
	.counters-wrapper button:hover {
		cursor: pointer;
	}
	.counters-wrapper button span {
		color: #00FF00;
		font-weight: bold;
	}
	* {
		outline: 0;
		font-family: sans-serif
	}
	/*Styling Selectbox*/
	select {
		/*width: 300px;*/
		display: inline-block;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 2px rgb(204, 204, 204);
		transition: all .5s ease;
		position: relative;
		font-size: 14px;
		color: #474747;
		height: 100%;
		text-align: left
	}
</style>