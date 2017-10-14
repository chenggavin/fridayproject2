Vue.component ('temphouse', {

	template: "#temphouse",

	props: ['name', 'description', 'message', "currenthouse", "showing", "showstuff", 
	'id','crest', "showhouse", 'isHouseShowing', 'startsort', 'welcome', 'startbutton',
	'why', 'changeHouse', 'potentialHouse', 'doubtshow', 'doubtcounter']
});


var sortinghat = new Vue({ 

	el: '#main',


	data: {

		doubtcounter: 0,

		doubtshow: false,

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
			if ( this.doubtcounter !== 1){
				this.doubtshow=true;
			}
			this.doubtcounter = 1;
			
		},

		showhouse:function() {
			this.isHouseShowing = true;
			this.welcome = false;

		},

		startsort: function () {
			this.welcome = true;
			this.startbutton = false;
			setTimeout(function () { this.showhouse(); }.bind(this), 10000);
		},

	    loadHouse: function() {

	     	this.currenthouse = localStorage.getItem('this.currenthouse');
	     

	    },

		saveHouse: function() {

		    localStorage.setItem('this.currenthouse', JSON.stringify(this.currenthouse));

		},

		changeHouse: function () {

			for (i=0; i<100;i++) {
				var potentialHouse = this.houses[Math.floor(Math.random() * this.houses.length)];
				if (this.currenthouse !== potentialHouse) {
				this.currenthouse = potentialHouse;
				this.why=true;
				this.showing = false;
				this.doubtshow=false;
				break;
				}

			
			} 
					
		},

	},

	beforeMount: function() {


		this.currenthouse = this.houses[Math.floor(Math.random() * this.houses.length)];
		
	},



	
		


	


});