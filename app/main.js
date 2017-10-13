Vue.component ('temphouse', {

	template: "#temphouse",

	props: ['name', 'description', 'message', "currenthouse", "showing", "showstuff", 'id']
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
		      	id: 'g',
		      	crest:"http://vignette2.wikia.nocookie.net/harrypotter/images/6/6b/Gryffindorcrest.png/revision/latest?cb=20110308010135"
		      	// color:scarlet
		    },
		    {
		      	name: 'Hufflepuff',
		      	description: 'Hard Work, Dedication, Patience, Loyalty, and Fair Play',
		      	showing: false,
		      	id: 'h',
		    },
		    {
		      	name: 'Ravenclaw',
		      	description: 'Intelligence, Knowledge, and Wit',
		      	showing: false,
		      	id: 'r',
		    },
		    {
		      	name: 'Slytherin',
		      	description: 'Ambition, Cunning and Resourcefulness',
		      	showing:false,
		      	id:'s',
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