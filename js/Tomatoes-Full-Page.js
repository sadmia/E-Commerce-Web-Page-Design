"use strict";


let pagent_price = "30.00";
let past_old_price = "50.00";


// *********** ^^ Input ^^ **************

let price = document.getElementById('price');
let old_price = document.getElementById('old-price');
let diskaunt = document.getElementById('diskaunt');

let full_images = document.getElementById("full-images");

let btn_img_1 = document.getElementById("btn-img-1");
let btn_img_2 = document.getElementById("btn-img-2");
let btn_img_3 = document.getElementById("btn-img-3");
let btn_img_4 = document.getElementById("btn-img-4");


price.innerHTML = pagent_price;
old_price.innerHTML = past_old_price;


let price_bad = past_old_price - pagent_price;
let price_prsent = price_bad * 100 / past_old_price;

diskaunt.innerHTML = Math.floor(price_prsent);


let border_selec_1 = document.getElementById("border-selec-1");
let border_selec_2 = document.getElementById("border-selec-2");
let border_selec_3 = document.getElementById("border-selec-3");
let border_selec_4 = document.getElementById("border-selec-4");


btn_img_1.addEventListener("click", function() {
	full_images.src = "images/Tomato/1.png";
	border_selec_1.classList.add("select-bor");
	border_selec_2.classList.remove("select-bor");
	border_selec_3.classList.remove("select-bor");
	border_selec_4.classList.remove("select-bor");

	border_selec_1.classList.remove("br-1px");
	border_selec_2.classList.add("br-1px");
	border_selec_3.classList.add("br-1px");
})

btn_img_2.addEventListener("click", function() {
	full_images.src = "images/Tomato/2.png";
	border_selec_2.classList.add("select-bor");
	border_selec_1.classList.remove("select-bor");
	border_selec_3.classList.remove("select-bor");
	border_selec_4.classList.remove("select-bor");

	border_selec_2.classList.remove("br-1px");
	border_selec_3.classList.add("br-1px");
	border_selec_1.classList.remove("br-1px");

})

btn_img_3.addEventListener("click", function() {
	full_images.src = "images/Tomato/3.png";
	border_selec_3.classList.add("select-bor");
	border_selec_2.classList.remove("select-bor");
	border_selec_1.classList.remove("select-bor");
	border_selec_4.classList.remove("select-bor");

	border_selec_3.classList.remove("br-1px");
	border_selec_1.classList.add("br-1px");
	border_selec_2.classList.remove("br-1px");
})

btn_img_4.addEventListener("click", function() {
	full_images.src = "images/Tomato/4.png";
	border_selec_4.classList.add("select-bor");
	border_selec_2.classList.remove("select-bor");
	border_selec_3.classList.remove("select-bor");
	border_selec_1.classList.remove("select-bor");

	border_selec_4.classList.remove("br-1px");
	border_selec_1.classList.add("br-1px");
	border_selec_2.classList.add("br-1px");
	border_selec_3.classList.remove("br-1px");
})


let count_value = document.getElementById("Count-value");

let count_btn_p = document.getElementById("count_btn_p");
let count_btn_m = document.getElementById("count_btn_m");

let count_value_in = count_value.value = Number("1");
let count_number = 1;

// count_btn_m.addEventListener('click', function() {
// 	count_value.innerHTML = count_value_in - 1;
// })





count_btn_p.addEventListener('click', function() {
	count_number +=1;
	count_value.innerHTML = count_number;
})

count_btn_m.addEventListener('click', function() {

	if (count_number < 2) {
		count_value.innerHTML = "1";
	} else {

	count_number -=1;
	count_value.innerHTML = count_number;
	}



})