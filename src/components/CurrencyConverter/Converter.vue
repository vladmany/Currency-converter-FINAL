<template>
    <div id="converter-form">
        <div class="conv-wrapper">
            <div class="input-form">
                <select @change="switchCounterCurrency(inputSelect)" v-model="inputSelect" class="dropdown">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>UAH</option>
                    <option>RUB</option>
                </select>
                <input type="text" v-model="inputField" @keyup="convert">
            </div>
            <div class="switch-form">
                <button @click="switchData()">⇄</button>
            </div>
            <div class="output-form">
                <select v-model="outputSelect" class="dropdown">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>UAH</option>
                    <option>RUB</option>
                </select>
                <input type="text" v-model="outputField" disabled>
            </div>
        </div>
    </div>
</template>

<script>

    import { outputBus } from '../../main.js'
    import { chart } from '../../main.js'


export default {
    name: "ConverterForm",
    props: {
        currency : {
            type: String
        },
        currencies: {
            type: Object
        }
    },
    data() {
        return {
            inputField: 1,
            outputField: 0,
            inputSelect: "EUR",
            outputSelect: "USD",
            tmp: "",
            outputCurrency: ""
        }
    },
    methods: {
        switchData() {
            this.tmp = this.inputField
            this.inputField = this.outputField
            this.outputField = this.tmp
            this.tmp = this.inputSelect
            this.inputSelect = this.outputSelect
            this.outputSelect = this.tmp
        },
        convert() {
            this.outputField = (this.currencies['base' + this.inputSelect][this.outputSelect] * +this.inputField).toFixed(2)
        },
        switchCounterCurrency(inputSelect) {
            this.$emit('switchCounterCurrency',inputSelect)
        },
        updateChart(){
            chart.$emit('updateChart', {input: this.inputSelect,output: this.outputSelect})
        }
    },
    created() {
        this.convert()
        outputBus.$on("switchOutputCurrency", data => {
            this.outputCurrency = data
        })
    },
    watch: {
        outputCurrency: function () {
            this.outputSelect = this.outputCurrency
        },
        inputSelect: function () {
            this.convert()
            chart.$emit('updateChart', {input: this.inputSelect,output: this.outputSelect})
        },
        outputSelect: function () {
            this.convert()
            chart.$emit('updateChart', {input: this.inputSelect,output: this.outputSelect})
        }
    }
}
</script>

<style scoped>
    input[type=text], select {
        padding-left: 4px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        min-height: 30px;
        font-size: 15px;
    }
    .conv-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        max-width: 500px;
        /*height: 300px;*/
        borber: 3px solid black;
    }
    .input-form {
        display: flex;
        flex-direction: column;
    }
    .input-form input {
        margin-top: 20px;
    }
    .switch-form button {
        height: 60px;
        width: 60px;
        font-size: 30px;
        margin-top: 10px;
    }
    .output-form {
        display: flex;
        flex-direction: column;
    }
    .output-form input {
        margin-top: 20px;
    }

    * {
        outline: 0;
        font-family: sans-serif
    }
    /*Styling Selectbox*/
    .dropdown {
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