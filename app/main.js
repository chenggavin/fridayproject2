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
		},

	    loadContacts: function() {

	     	this.currenthouse = localStorage.getItem('currenthouse');
	     

	    },

		saveContacts: function() {

		    localStorage.setItem('currenthouse', JSON.stringify(this.currenthouse));

	

		},
	},


	beforeMount: function() {


		this.currenthouse = this.houses[Math.floor(Math.random() * this.houses.length)];
		console.log(this.crest);
	}

		


	


});

var houseswitch = new Vue ({


	



	data: {

		Questions: [

		    { 
		      text: 'What is your favorite color?',
		      answers: [
		        {
		          text: 'Scarlet',
		          house: 'Gryffindor'
		        },
		        {
		          text: 'Yellow',
		          house: 'Hufflepuff'
		        },
		        {
		          text: 'Blue',
		          house: 'Ravenclaw'
		        },
		        {
		          text: 'Green',
		          house: 'Slytherin'
		        }
		      ]
		    },
		    { 
		      text: 'What is your favorite animal?',
		      answers: [
		        {
		          text: 'Lion',
		          house: 'Gryffindor'
		        },
		        {
		          text: 'Badger',
		          house: 'Hufflepuff'
		        },
		        {
		          text: 'Eagle',
		          house: 'Ravenclaw'
		        },
		        {
		          text: 'Snake',
		          house: 'Slytherin'
		        }
		      ]
		    },
		    { 
		      text: 'What kind of person do you try to be?',
		      answers: [
		        {
		          text: 'Brave',
		          house: 'Gryffindor'
		        },
		        {
		          text: 'Loyal',
		          house: 'Hufflepuff'
		        },
		        {
		          text: 'Witty',
		          house: 'Ravenclaw'
		        },
		        {
		          text: 'Cunning',
		          house: 'Slytherin'
		        }
		      ]
		    },
		    { 
		      text: 'Who is your favorite witch or wizard?',
		      answers: [
		        {
		          text: 'Albus Dumbledore',
		          house: 'Gryffindor'
		        },
		        {
		          text: 'Newt Scamander',
		          house: 'Hufflepuff'
		        },
		        {
		          text: 'Garrick Ollivander',
		          house: 'Ravenclaw'
		        },
		        {
		          text: 'Tom Riddle',
		          house: 'Slytherin'
		        }
		      ]
		    },
		    { 
		      text: 'What is your favorite Berty Bott\'s flavor?',
		      answers: [
		        {
		          text: 'Grape',
		          house: 'Gryffindor'
		        },
		        {
		          text: 'Horseradish',
		          house: 'Hufflepuff'
		        },
		        {
		          text: 'Roast Beef',
		          house: 'Ravenclaw'
		        },
		        {
		          text: 'Spinach',
		          house: 'Slytherin'
		        }
		      ]
		    }

		]
	}

});


















