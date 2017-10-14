Vue.component ('temphouse', {

	template: "#temphouse",

	props: ['name', 'description', 'message', "currenthouse", "showing", "showstuff", 
	'id','crest', "showhouse", 'isHouseShowing', 'startsort', 'welcome', 'startbutton',
	'why']
});


var sortinghat = new Vue({ 

	el: '#main',


	data: {

		why: true,

		startbutton: true,

		isHouseShowing: false,

		welcome: false,

		currenthouse: '',

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
		      	crest:"./images/Rav.png"
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
			this.why=false;
			console.log('showstuff is hit');
		},

		showhouse:function() {
			this.isHouseShowing = true;
			this.welcome = false;

		},

		startsort: function () {
			this.welcome = true;
			this.startbutton = false;
			setTimeout(function () { this.showhouse() }.bind(this), 5000);
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
		
	},



	
		


	


});