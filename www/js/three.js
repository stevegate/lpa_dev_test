$(document).one('pageshow', '#pagethree',function(e, data){ 

	

assignValues();
$(document).off('click', '#next1').on('click', '#next1', function(e2) {
	if($("#plant_name").val()!="0" && $("#partno").val().length>0 && $("#shift").val()!="0"){ 
		sessionStorage.setItem("plant_name",JSON.stringify($("#plant_name").val()));
		sessionStorage.setItem("partno",JSON.stringify($("#partno").val()));
		sessionStorage.setItem("datepicker",JSON.stringify($("#datepicker").val()));
		sessionStorage.setItem("shift",JSON.stringify($("#shift").val()));
		$.mobile.changePage("five.html", { transition: "slide", changeHash: true, reverse: false ,reloadPage:false});
	}else {
		$( "#popupcreatelpa" ).popup("open");
	}
	e.preventDefault();
	e.stopPropagation();
});

$(document).off('click', '#page_three_profile').on('click','#page_three_profile', function(e1){
	$.mobile.changePage("profile.html", { transition: "slide", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#three_logo').on('click', '#three_logo', function(e) { 
	$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#three_update').on('click','#three_update',function(e2){
		$('#update_one').remove();
		$.mobile.changePage("update_one.html", { transition: "slide", changeHash: true, reverse: false });							 						
		e2.stopPropagation();
		e2.preventDefault();
		return false;

});
$(document).off('click', '#three_signout').on('click', '#three_signout', function() {
	sessionStorage.clear(); 
	$.mobile.changePage("index.html", { transition: "slide", changeHash: true, reverse: false }); 
return false;
});
e.preventDefault();
e.stopPropagation();
var picker = $( "input[type='text']", this );
			picker.mobipick();
alert("hi123");
			picker.on( "change", function() {
					var date = $( this ).val();

					// formatted date					
					var dateObject = $( this ).mobipick( "option", "date" );
			});
});
function assignValues(){
	$region = $('#region'),
	$plant = $('#plant_name'),
	$country = $('#country')
	userobject = JSON.parse(sessionStorage.getItem("user_data"));
	plant_array = 	JSON.parse(sessionStorage.getItem("plant_data"));
	category_array = 	sessionStorage.getItem("category_data");	
	response4 = 	sessionStorage.getItem("activity_data");	
	$('#employee_name_three').text(''+userobject.firstname+' '+userobject.lastname);
	$('#employee_id_three').text(userobject.username);
	var cont='<span class="mo" >'+userobject.firstname+'</span> <span class="mo" id="employeeid">   Id :'+userobject.firstname+'</span>'
	console.log('page2');
	console.log('userobject.firstname' + userobject.firstname);
/*	
	var today = new Date();   
	var dd = today.getDate();
var mm = today.getMonth()+1; 
if(mm<=9){
	mm ='0'+mm;
}				
var yyyy = today.getFullYear();    

$('#datepicker').val(yyyy + '-' + mm + '-' + dd);*/



plant_array.forEach(function(currentResult) {
	var currregion = currentResult.region;
	var appendFlag = false;
	$('#region option').each(function () {
		if (this.text == currregion) appendFlag = true;
	});
	if (appendFlag == false)  $region.append($('<option>', {
		value: currentResult.region, text: currentResult.region }));

});
$('#region').val(userobject.region).attr('selected', true);
$('#region').selectmenu("refresh", true);
var currentRegion = $("#region option:selected" ).val();
var newCountryList = plant_array.filter(function(currentResult) {
	return currentResult.region === currentRegion;
});
newCountryList.forEach(function(currentCountry) {
	var currcountry = currentCountry.country;
	var appendFlag = false;
	$('#country option').each(function () {
		if (this.text == currcountry) appendFlag = true;
	});
	if (appendFlag == false) $country.append($('<option>', {
		value: currentCountry.country, text: currentCountry.country }));
});
$('#country').val(userobject.country).attr('selected', true);
$('#country').selectmenu("refresh", true);
var currentCountry = $("#country option:selected" ).val();
var newPlantList = plant_array.filter(function(currentResult) {
	return currentResult.country === currentCountry;
});
newPlantList.forEach(function(currentPlant) {
	var currplant = currentPlant.plant_name;
	var appendFlag = false;
	$('#plant option').each(function () {
		if (this.text == currplant) appendFlag = true;
	});
	if (appendFlag == false) $plant.append($('<option>', {
		value: currentPlant.plant_id, text: currentPlant.plant_name }));
});
$('#plant_name').val(userobject.plant_line).attr('selected', true);
$('#plant_name').selectmenu("refresh", true);
$('#region').on('change', function() {
	var currentRegion = $(this).val();
	$country.empty();
	$plant.empty();
	$country.trigger("chosen:updated");
	$plant.trigger("chosen:updated");
	var newOption = $('<option>-Select Country-</option>');
	$country.append(newOption);
	$('#country-button span').empty();
	$('#country-button span').append('-Select Country-');
	var newPlant = $('<option>-Select Plant-</option>');
	$plant.append(newPlant);
	$('#plant_name-button span').empty();
	$('#plant_name-button span').append('-Select Plant-');
	var newCountryList = plant_array.filter(function(currentResult) {
		return currentResult.region === currentRegion;
	});
	newCountryList.forEach(function(currentCountry) {
		var currcountry = currentCountry.country;
		var appendFlag = false;
		$('#country option').each(function () {
			if (this.text == currcountry) appendFlag = true;
		});
		if (appendFlag == false) $country.append($('<option>', {
			value: currentCountry.country, text: currentCountry.country }));
	});
});
$('#country').on('change', function() {
	var currentCountry = $(this).val();
	$plant.empty();
	var newOption = $('<option>-Select Plant-</option>');
	$('#plant_name-button span').empty();
	$('#plant_name-button span').append('-Select Plant-');
	$plant.append(newOption);

	var newPlantList = plant_array.filter(function(currentResult) {
		return currentResult.country === currentCountry;
	});

	newPlantList.forEach(function(currentPlant) {
		var currplant = currentPlant.plant_name;
		var appendFlag = false;
		$('#plant option').each(function () {
			if (this.text == currplant) appendFlag = true;
		});
		if (appendFlag == false) $plant.append($('<option>', {
			value: currentPlant.plant_id, text: currentPlant.plant_name }));

	});
});


}

