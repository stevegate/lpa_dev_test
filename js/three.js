// JavaScript Document


	$(document).one('pageshow', '#pagethree', function(e, data){ 
	      	 $.mobile.hashListeningEnabled = false;
       		 $.mobile.pushStateEnabled = false;
			 $.mobile.changePage.defaults.changeHash = false;
			 $.mobile.defaultPageTransition = 'none';
			 //alert(sessionStorage.getItem("plant_data"));
					//alert('test pageshow'); 	
					assignValues();
					$(document).off('click', '#next1').on('click', '#next1', function(e2) {
						//$('#basic').popup('close'); 
						
						if($("#plant_name").val()!="0" && $("#partno").val().length>0 && $("#shift").val()!="0"){ 
						sessionStorage.setItem("plant_name",JSON.stringify($("#plant_name").val()));

						sessionStorage.setItem("partno",JSON.stringify($("#partno").val()));
						sessionStorage.setItem("datepicker",JSON.stringify($("#datepicker").val()));
						sessionStorage.setItem("shift",JSON.stringify($("#shift").val()));
			 			//$.mobile.changePage("/five.html");
						$.mobile.changePage("five.html", { transition: "slide", changeHash: false, reverse: false ,reloadPage:false});
						}else {
							//alert(' please check whether you\'ve filled plant name ,partno and shift')	;
							$( "#popupcreatelpa" ).popup("open");
						}
						e.preventDefault();
						e.stopPropagation();

						return false;
			 
					});
					
					
					
					
					$(document).off('click', '#page_three_create').on('click','#page_three_create',function(e1){
							$.mobile.changePage("three.html", { transition: "slide", changeHash: false, reverse: false });
							return false;

					});
					$(document).off('click', '#lpa_update_two').on('click', '#lpa_update_two', function(e1) { 
						$.mobile.changePage("update_one.html", { transition: "slide", changeHash: true, reverse: false }); 
						return false;
					});
					
					
				   e.preventDefault();
            	  e.stopPropagation();


					
					
			});
	
			$(document).off('click', '#page_three_profile').on('click','#page_three_profile', function(e1){
								//alert('profile click');
								//$('#profile').remove();
								$.mobile.changePage("profile.html", { transition: "slide", changeHash: false, reverse: false });
				   				//e1.preventDefault();
            	  				//e1.stopPropagation();
								return false;
			});
		  
		  
		
		/*var on = false;  
		$("html").click( function( e )
		{
		if( $(".ui-panel").hasClass("ui-panel-open") == true  && !on){
				on = true
		}else{
				on = false;
				$( "#three_overlayPanel" ).panel( "close" );        
		}		
		});*/

		  
	$(document).off('click', '#three_logo').on('click', '#three_logo', function(e) { 
			$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 												            return true;
	});
	  
	$(document).off('click', '#three_update').on('click', '#three_update', function(e) { 
			$.mobile.changePage("update_one.html", { transition: "slide", changeHash: true, reverse: false }); 												            return true;
	});


	$(document).off('click', '#three_signout').on('click', '#three_signout', function() {
			sessionStorage.clear(); 
			// alert('testing update page');
			$.mobile.changePage("index.html", { transition: "slide", changeHash: true, reverse: false }); 
			return false;
	});
	  

		function assignValues(){
			$region = $('#region'),
			$plant = $('#plant_name'),
			$country = $('#country')
			//alert('test page');
			userobject = JSON.parse(sessionStorage.getItem("user_data"));

			plant_array = 	JSON.parse(sessionStorage.getItem("plant_data"));
			// alert(JSON.stringify(plant_array));
			category_array = 	sessionStorage.getItem("category_data");	
			response4 = 	sessionStorage.getItem("activity_data");	
			$('#employee_name_three').text(''+userobject.firstname+' '+userobject.lastname);
			$('#employee_id_three').text(userobject.username);
			var cont='<span class="mo" >'+userobject.firstname+'</span> <span class="mo" id="employeeid">   Id :'+userobject.firstname+'</span>'
			//$('#datepicker').datepicker();
			

			console.log('page2');
			console.log('userobject.firstname' + userobject.firstname);


			var today = new Date();   
		        var dd = today.getDate();

		        var mm = today.getMonth()+1; //January is 0!
			if(mm<=9){
				mm ='0'+mm;
			}				
        	        var yyyy = today.getFullYear();    
			// alert(dd + '-' + mm + '-' + yyyy);

			$('#datepicker').val(yyyy + '-' + mm + '-' + dd);
			//$('#datepicker').datepicker('setDate', 'today');


			
			 
			 

		plant_array.forEach(function(currentResult) {
                var currregion = currentResult.region;
                var appendFlag = false;
                $('#region option').each(function () {
                    if (this.text == currregion) appendFlag = true;
                });
                if (appendFlag == false)  $region.append($('<option>', {
				value: currentResult.region, text: currentResult.region }));

		});

// alert(userobject.region);
 $('#region').val(userobject.region).attr('selected', true);
 $('#region').selectmenu("refresh", true);

 			var currentRegion = $("#region option:selected" ).val();
 			//alert(currentRegion);
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



		// alert(userobject.country);
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

		 	

			/*for(a=0;a<plant_array.length;a++){
				 plant_obj = plant_array[a];
				 var opt;
				 if(plant_obj.plant_id==userobject.plant_line){
					 opt='';
				 }else {
				 	opt='<option value='+plant_obj.plant_id+'>'+plant_obj.region+'</option>';
				 	opt='<option value='+plant_obj.plant_id+'>'+plant_obj.country+'</option>';
				 	 opt='<option value='+plant_obj.plant_id+'>'+plant_obj.plant_name+'</option>';
				 }
				 $('#region').append('<option value='+plant_obj.plant_id+' >'+plant_obj.region+'</option>');
				  $('#country').append('<option value='+plant_obj.plant_id+' >'+plant_obj.country+'</option>');
				   $('#plant_name').append('<option value='+plant_obj.plant_id+' >'+plant_obj.plant_name+'</option>');
			}
			
			 $('#region').val(userobject.plant_line).attr('selected', true);
			 $('#region').selectmenu("refresh", true);
			  $('#country').val(userobject.plant_line).attr('selected', true);
			 $('#country').selectmenu("refresh", true);
			  $('#plant_name').val(userobject.plant_line).attr('selected', true);
			 $('#plant_name').selectmenu("refresh", true);*/




		}
