// JS for the typing in the header

// Some line of code to make the typing function work, I havent learned a lot of this yet 7-22-2017
!function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var i=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],i+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+i)}if("html"===o.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}o.timeout=setTimeout(function(){if(s===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,o.loop===!1||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,s)},o.backDelay)}else{0===s&&o.options.preStringTyped(o.arrayPos);var e=t.substr(0,s+1);o.attr?o.el.attr(o.attr,e):o.isInput?o.el.val(e):"html"===o.contentType?o.el.html(e):o.el.text(e),s++,o.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s).charAt(0);)e-=t.substr(s).charAt(0),s--;s--,e+="<"}var r=t.substr(0,s);o.attr?o.el.attr(o.attr,r):o.isInput?o.el.val(r):"html"===o.contentType?o.el.html(r):o.el.text(r),s>o.stopNum?(s--,o.backspace(t,s)):s<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,o=t.length;if(o)for(;--o;)e=Math.floor(Math.random()*(o+1)),s=t[e],t[e]=t[o],t[o]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var o=t(this),r=o.data("typed"),i="object"==typeof e&&e;r||o.data("typed",r=new s(this,i)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

	// Typing of the header function

	$("#typed").typed({
    strings: ["Welcome To DSGIN", "Work With A Designer", "To Create Your Clothing", "Your Style", "DSGIN"],
    typeSpeed: 80,
    startDelay: 0,
    backSpeed: 5,
    backDelay: 300,
    loop: false,
    loopCount: false,
    showCursor: true,
    attr: null,
    contentType: 'html',
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  });
// ----------------------------------------------------------------------------


// Creating objects to sell
function shirts(image, name, price) {
	this.image = image;
	this.name = name;
	this.price = price;
};

// Storing each object as a variable
var shirt1 = new shirts("img/shirt1.jpg", "Rustic Tie Dye", "$35")
var shirt2 = new shirts("img/shirt2.jpg", "Peace", "$24")
var shirt3 = new shirts("img/shirt3.jpg", "Neverland", "$15")
var shirt4 = new shirts("img/shirt3.jpg", "Neverland", "$15")

// Putting each object into an array
var shirt_array = [shirt1, shirt2, shirt3, shirt4];

// Function to put objects on to the screen
for (var i = 0; i < shirt_array.length; i++) {
	// This a div for the objects info
	var box = document.createElement('div');
	box.className = 'object_box col-md-3 col-sm-3';

	// Puts the image into the box 
	var img = document.createElement('IMG');
	img.setAttribute('src', shirt_array[i].image)
	img.className = 'img';
	img.height = '350';
	img.width = '325'
	box.appendChild(img);

	// Creates div for the price and name properties
	var tag_div = document.createElement('div');
	tag_div.className = 'tag_div';
	box.appendChild(tag_div);

	// Creating name 
	var  namebox= document.createElement('h5');
	namebox.className = 'tags';
	var nametext = document.createTextNode(shirt_array[i].name);
	// Puts th price inside the tag box
	tag_div.appendChild(namebox);
	namebox.appendChild(nametext);

	// Creating price
	var pricebox = document.createElement('h5');
	pricebox.className = 'tags';
	var pricetext = document.createTextNode(shirt_array[i].price);
	// Puts th price inside the tag box
	tag_div.appendChild(pricebox);
	pricebox.appendChild(pricetext);







	// Puts the div of objects onto the page inside div id=shirts
	shirtid = document.getElementById('shirts');
	shirtid.appendChild(box);
	
}







