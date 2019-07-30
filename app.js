new Vue({
	el: '#app',

	data: {
		currencies: {}
	},
	/*mounted(){
		axios.get('https://free.currconv.com/api/v7/currencies?apiKey=sample-key-do-not-use')
		.then(response => {
			//console.log(response);
			this.currencies = response.data.results;

		});
	}*/


	mounted(){
		this.getCurrencies();
	},

	computed: {

		formatedCurrencies(){
			return Object.values(this.currencies);
		}

	},

	methods: {
		getCurrencies(){

			const currencies = localStorage.getItem('currencies');

			if(currencies) {

				this.currencies = JSON.parse(currencies);

				return;
			}

			axios.get('https://free.currconv.com/api/v7/currencies?apiKey=sample-key-do-not-use')
			.then(response => {
			//console.log(response);
			this.currencies = response.data.results;
			localStorage.setItem('currencies', JSON.stringify(response.data.results))

		});
		}
	}

})