Vue.component ('temphouse', {

	template: "#temphouse",

	props: ['name', 'description', 'message', "currenthouse", "showing", "showstuff"]
});




var sortinghat = new Vue({ 

	el: '#main',


	data: {

		message: 'this works',

		currenthouse: 'saf',

	 	houses: [

		    {
		      	name: 'Gryffindor',
		      	description: 'Bravery, Daring, Nerve, and Chivalry',
		      	showing: false,
		      	// color:scarlet
		    },
		    {
		      	name: 'Hufflepuff',
		      	description: 'Hard Work, Dedication, Patience, Loyalty, and Fair Play',
		      	showing: false,
		    },
		    {
		      	name: 'Ravenclaw',
		      	description: 'Intelligence, Knowledge, and Wit',
		      	showing: false
		    },
		    {
		      	name: 'Slytherin',
		      	description: 'Ambition, Cunning and Resourcefulness',
		      	showing:false,
		    }

		  ],



	},



	methods: {

		showstuff: function() {
			this.currenthouse.showing = true;
			console.log('showstuff is hit');
		}

	

},

	beforeMount: function() {


		this.currenthouse = this.houses[Math.floor(Math.random() * this.houses.length)];
		console.log(this.curenthouse);
	}

		


	


});