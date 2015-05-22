// JavaScript Document

	



	$(document).one('pageshow', '#profile', function(e){  
	
				 assignProfileValues();

				$(document).off('click', '#profile_create').on('click','#profile_create',function(e1){
						$('#pagethree').remove();
						$('#profile').remove();
						

						$.mobile.changePage("three.html", { transition: "slide", changeHash: false, reverse: false });							 						
						//e.handled=true;
						e1.stopPropagation();
		   				e1.preventDefault();
								
						return false;


						/*if(!e.handled){
						$('#pagethree').remove();
						
						
		   				e.preventDefault();
						}*/


				});
	
				$(document).off('click', '#profile_update').on('click','#profile_update',function(e){
						//console.log('profile ' + e.handled);
						if(!e.handled){
						$('#pagethree').remove();
						//alert('click');
						$.mobile.changePage("update_one.html", { transition: "slide", changeHash: false, reverse: false });							 						e.handled=true;
						//e.stopPropagation();
						
						
		   				//e.preventDefault();
						}

						return false;

				});	

				$(document).off('click', '#profile_signout').on('click', '#profile_signout', function() {
					sessionStorage.clear(); 
					// alert('testing update page');
					$.mobile.changePage("index.html", { transition: "slide", changeHash: true, reverse: false }); 
					return false;
				});
					
					
					
					
	});
	
	
	
	
	

	
	
	$(document).off('click', '#profile_logo').on('click', '#profile_logo', function(e) { 
								$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 
								return true;
	
	
	
	});
	
	
					
	$(document).off('click', '#lpa_update_two').on('click', '#lpa_update_two', function(e) { 
					if(e.handled !== true) // This will prevent event triggering more then once
			        {
            			//alert('Clicked');
			            e.handled = true;
			        }
						$.mobile.changePage("update_one.html", { transition: "slide", changeHash: true, reverse: false }); 
						return false;
	});


	
			
		function assignProfileValues(){
			//alert('test page');
			userobject = 	JSON.parse(sessionStorage.getItem("user_data"));
			$('#profile_employee_name').text(''+userobject.firstname+' '+userobject.lastname);
			$('#profile_employee_id').text(userobject.username);
				
			$('#profile_empid').text('Employee Id    : '+userobject.username+'');
			$('#profile_first_name').text("FirstName : "+userobject.firstname);
			$('#profile_last_name').text("LastName   : "+userobject.lastname);
			$('#profile_location').text("Location    :"+userobject.plant_name);
			$('#profile_country').text("Country      :"+userobject.country);



		}
