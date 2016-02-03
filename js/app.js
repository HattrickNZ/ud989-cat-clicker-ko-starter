var initialCats=[
{
	clickCount: 0,
	name: 'Tabby',
	imgSrc: 'img/1413379559_412a540d29_z.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nickNames: ['nm1','nm2'],
	clickCountStages: ['baby','infant']
},
{
	clickCount: 0,
	name: 'Tabby2',
	imgSrc: 'img/22252709_010df3379e_z.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nickNames: ['nm1','nm2_2'],
	clickCountStages: ['baby','infant']
},
{
	clickCount: 0,
	name: 'Tabby3',
	imgSrc: 'img/4154543904_6e2428c421_z.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nickNames: ['nm1','nm2_3'],
	clickCountStages: ['baby','infant']
},
{
	clickCount: 0,
	name: 'Tabby4',
	imgSrc: 'img/434164568_fea0ad4013_z.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nickNames: ['nm1','nm2_4'],
	clickCountStages: ['baby','infant']
},
{
	clickCount: 0,
	name: 'Tabby5',
	imgSrc: 'img/9648464288_2516b35537_z.jpg',
	imgAttribution: 'https://www.flickr.com/photos/big',
	nickNames: ['nm1','nm2_5'],
	clickCountStages: ['baby','infant']
},
]

var Cat = function(data) {
	
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc)
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);
	this.clickCountStages = ko.observableArray(data.clickCountStages);
	
	this.clickCountStagesFunc = ko.computed(function() {
		    var clicks = this.clickCount();
			if(clicks<10)
			{return this.clickCountStages()[0]}
			else {return this.clickCountStages()[1]}
    }, this);
	
}


var ViewModel = function() {
	var self=this;
	
	this.catList = ko.observableArray([]);
	
	// create the diff cats and store them in catList
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	
	//show the first cat on startup
	this.currentCat= ko.observable(this.catList()[0] );
	
	this.incrementCounter = function() {
		//this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.selectCat=function(clickedCat,j,k) {
		// listen for whcih cat is selected 
		// change the cat in the view that was selected 
		console.log("this",this);
		console.log("clickedCat",clickedCat);
		
		self.currentCat(clickedCat)
	};
	
}

ko.applyBindings(new ViewModel());

