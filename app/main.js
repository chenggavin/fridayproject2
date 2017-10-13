Vue.component ('temphouse', {

	template: "#temphouse",

	props: ['name', 'description', 'message', "currenthouse", "showing", "showstuff", 'id','crest']
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
		      	crest:"./images/Gryffindorcrest.png"
		      	// color:scarlet
		    },
		    {
		      	name: 'Hufflepuff',
		      	description: 'Hard Work, Dedication, Patience, Loyalty, and Fair Play',
		      	showing: false,
		      	id: 'h',
		      	crest:"./images/Huff.png"
		    },
		    {
		      	name: 'Ravenclaw',
		      	description: 'Intelligence, Knowledge, and Wit',
		      	showing: false,
		      	id: 'r',
		      	crest:"./images/rav.png"
		    },
		    {
		      	name: 'Slytherin',
		      	description: 'Ambition, Cunning and Resourcefulness',
		      	showing:false,
		      	id:'s',
		      	crest:"./images/sly.png"
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
		console.log(this.crest);
	}

		


	


});