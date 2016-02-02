

var Cat = function() {
	
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.clickCountStages = ko.observableArray(['baby','infant']);
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg2')
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
	this.nickNames = ko.observableArray(['nm1','nm2']);
	

	this.firstName = ko.observable('Bob');
    this.lastName = ko.observable('Smith');
	
	this.clickCountStagesFunc = ko.computed(function() {
		    var clicks = this.clickCount();
			if(clicks<10)
			{return this.clickCountStages()[0]}
			else {return this.clickCountStages()[1]}
    }, this);
	
}


var ViewModel = function() {
	//var self=this;

	
	this.currentCat= ko.observable(new Cat() );
	
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		//self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		//this.clickCount(this.clickCount() + 1);
	};
	
}

ko.applyBindings(new ViewModel());

