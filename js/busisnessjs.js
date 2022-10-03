var images = ["images/cupcakes1.jpg", "images/cupcakes2.jpg", "images/cupcakes3.jpg", "images/cupcakes4.jpg"];
var index = 0;
var numImages = images.length;
var timer;
        
function changeImage() {
    if (index < numImages - 1) {
        index++;
        } else {
            index = 0;
     }
    document.getElementById("carousel-img").src = images[index];
}
        
function play() {
    timer = setInterval(changeImage, 2000);
    document.getElementById("tint").style.display = "none";
}

function checkName() {
    var namebox = document.getElementById("name");
    var name = namebox.value;
    if (name.length > 7) {
        // Valid
        namebox.style.borderColor = "green";              
    } else {
        // Invalid.
        namebox.style.borderColor = "red";
    }
}

function checkEmail() {
    var emailbox = document.getElementById("email");
    var email = emailbox.value;
    var pattern = /.+@.+\..+/;
    
    if (pattern.test(email)) {
        // Valid
        emailbox.style.borderColor = "green";              
    } else {
        // Invalid.
        emailbox.style.borderColor = "red";
    }
}

function checkReason () {
    var cb = document.getElementById("reason");
    var opts = cb.options;
    var si = cb.selectedIndex;
    var sel = opts[si];
                
    if (sel.index == 0) {
        // Invalid.
        cb.style.borderColor = "red";
                    
    } else {
        // Valid.
        cb.style.borderColor = "green";      
    }
    var reason = document.getElementById("reason");
    var product = document.getElementById("product");
    product.style.display = reason.value == "P" ? "block": "none";
}


function checkID() {
    var productbox = document.getElementById("txtProductID");
    var prodID = productbox.value;
    if (prodID == "123456CPB" || prodID == "234567CVS" || prodID == "345678SCC" || prodID == "456789GFB" || prodID == "567891SAC" || prodID == "678912CAC") {
        productbox.style.borderColor = "green";
    } else {
        productbox.style.borderColor = "red";
    }
}


function checkMessage() {
    var messagebox = document.getElementById("message");
    var message = messagebox.value;
    if (message.length > 10 && message.length < 30) {
        // Valid
        messagebox.style.borderColor = "green";              
    } else {
        // Invalid.
        messagebox.style.borderColor = "red";
    }
}
function scroll() {
    var scroll = window.scrollY;
	
    var bake = document.getElementById("bake");

    if (scroll > 150) {
        bake.style.transform = "scale(1.5, 1.5)";
    }	
    var outer = document.getElementById("back");
    var inner = document.getElementById("word");
				
	var m = -0.25;
	var b = 100;
				
	var newTop = m*scroll + b;
	inner.style.top = newTop + "px";
    
}

