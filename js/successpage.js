// JavaScript Document

	



	$(document).one('pageshow', '#success_page', function(e){  
	
				 assignProfileValues();

				$(document).off('click', '#success_create').on('click','#success_create',function(e1){
						

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
	
				$(document).off('click', '#success_update').on('click','#success_update',function(e){
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

				$(document).off('click', '#success_signout').on('click', '#success_signout', function() {
					sessionStorage.clear(); 
					// alert('testing update page');
					$.mobile.changePage("index.html", { transition: "slide", changeHash: true, reverse: false }); 
					return false;
				});
					
					
					
					
	});
	
	
	
	
	

	
	
	$(document).off('click', '#success_logo').on('click', '#success_logo', function(e) { 
								$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 
								return true;
	
	
	
	});
	
	
					
	


	
			
		function assignProfileValues(){
			//alert('test page');
			userobject = 	JSON.parse(sessionStorage.getItem("user_data"));
			$('#success_employee_name').text(userobject.firstname);
			$('#success_employee_id').text('Emp Id :' + userobject.username);
				



		}
