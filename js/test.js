// JavaScript Document
$(document).ready(function() {
	 $region = $('#region'),
		$plant = $('#plant'),
		$country = $('#country'),
		theAjaxCall = $.ajax({
			url: 'http://staging.eimpressive.com/slimrestapi-dev/test.php',
			type: 'post',
			async: 'true',
			crossDomain: true,
			dataType: 'json'
		});

	theAjaxCall.done(function(result) {
		result.forEach(function(currentResult) {
                var currregion = currentResult.region;
                var appendFlag = false;
                $('#region option').each(function () {
                    if (this.text == currregion) appendFlag = true;
                });
                if (appendFlag == false) $region.append($('<option>', {
				value: currentResult.region, text: currentResult.region }));
		});
	});


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
    	$('#plant-button span').empty();
    	$('#plant-button span').append('-Select Plant-');



		theAjaxCall.done(function(result) {
			var newCountryList = result.filter(function(currentResult) {
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
	});
    
    
    $('#country').on('change', function() {
		var currentCountry = $(this).val();
        $plant.empty();
        var newOption = $('<option>-Select Plant-</option>');
        $('#plant-button span').empty();
    	$('#plant-button span').append('-Select Plant-');
    $plant.append(newOption);
		theAjaxCall.done(function(result) {
			var newPlantList = result.filter(function(currentResult) {
				return currentResult.country === currentCountry;
			});

			newPlantList.forEach(function(currentPlant) {
                var currplant = currentPlant.plant_name;
                var appendFlag = false;
                $('#plant option').each(function () {
                    if (this.text == currplant) appendFlag = true;
                });
                if (appendFlag == false) $plant.append($('<option>', {
				value: currentPlant.plant_name, text: currentPlant.plant_name }));

			});
		});
	});

	theAjaxCall.fail(function(request, error) {
		console.log(error);
		console.log(request);
		// This callback function will trigger on unsuccessful action
		alert('Network error has occurred please try again!');
	});


});