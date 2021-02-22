import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currencies: {
            "baseEUR": {
                "EUR": 1,
                "USD": 1.21,
                "UAH": 33.76,
                "RUB": 90.08
            },
            "baseUSD": {
                "EUR": 0.83,
                "USD": 1,
                "UAH": 27.88,
                "RUB": 74.37
            },
            "baseUAH": {
                "EUR": 0.030,
                "USD": 0.036,
                "UAH": 1,
                "RUB": 2.67
            },
            "baseRUB": {
                "EUR": 0.011,
                "USD": 0.013,
                "UAH": 0.37,
                "RUB": 1
            }
        }
    },

    getters: {
        getCurrencies: state => {
            return state.currencies
        }
    },

    mutations: {

    },

    actions: {

    }
});