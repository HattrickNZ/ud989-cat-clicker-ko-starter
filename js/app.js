

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

	
	this.currentCat= ko.observable(new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg2',
		imgAttribution: 'https://www.flickr.com/photos/big',
		nickNames: ['nm1','nm2'],
		clickCountStages: ['baby','infant']
	}) );
	
	this.incrementCounter = function() {
		//this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
}

ko.applyBindings(new ViewModel());

