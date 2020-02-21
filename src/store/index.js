import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currencies: {
            2017: {
                "baseEUR": {
                    "EUR": 1,
                    "USD": 1.06,
                    "UAH": 28.57,
                    "RUB": 62.72
                },
                "baseUSD": {
                    "EUR": 0.95,
                    "USD": 1,
                    "UAH": 27.13,
                    "RUB": 59.56
                },
                "baseUAH": {
                    "EUR": 0.034,
                    "USD": 0.036,
                    "UAH": 1,
                    "RUB": 2.14
                },
                "baseRUB": {
                    "EUR": 0.016,
                    "USD": 0.017,
                    "UAH": 0.46,
                    "RUB": 1
                }
            },
            2018: {
                "baseEUR": {
                    "EUR": 1,
                    "USD": 1.22,
                    "UAH": 34.28,
                    "RUB": 68.36
                },
                "baseUSD": {
                    "EUR": 0.83,
                    "USD": 1,
                    "UAH": 27.98,
                    "RUB": 56.61
                },
                "baseUAH": {
                    "EUR": 0.029,
                    "USD": 0.034,
                    "UAH": 1,
                    "RUB": 2.00
                },
                "baseRUB": {
                    "EUR": 0.014,
                    "USD": 0.018,
                    "UAH": 0.49,
                    "RUB": 1
                }
            },
            2019: {
                "baseEUR": {
                    "EUR": 1,
                    "USD": 1.14,
                    "UAH": 31.30,
                    "RUB": 77.11
                },
                "baseUSD": {
                    "EUR": 0.88,
                    "USD": 1,
                    "UAH": 27.47,
                    "RUB": 67.18
                },
                "baseUAH": {
                    "EUR": 0.031,
                    "USD": 0.035,
                    "UAH": 1,
                    "RUB": 2.36
                },
                "baseRUB": {
                    "EUR": 0.013,
                    "USD": 0.015,
                    "UAH": 0.41,
                    "RUB": 1
                }
            },
            2020: {
                "baseEUR": {
                    "EUR": 1,
                    "USD": 1.09,
                    "UAH": 26.65,
                    "RUB": 68.72
                },
                "baseUSD": {
                    "EUR": 0.92,
                    "USD": 1,
                    "UAH": 24.42,
                    "RUB": 62.98
                },
                "baseUAH": {
                    "EUR": 0.038,
                    "USD": 0.041,
                    "UAH": 1,
                    "RUB": 2.58
                },
                "baseRUB": {
                    "EUR": 0.015,
                    "USD": 0.016,
                    "UAH": 0.39,
                    "RUB": 1
                }
            }
        }
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
});