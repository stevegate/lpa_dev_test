// JavaScript Document
	$(document).on('pagecreate', '#pageone', function(){ 
        //alert('test'); 

        if(sessionStorage.getItem("logged_in")=="1"){
              $.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 
        }



        $(document).off('click', '#submit').on('click', '#submit', function() { // catch the form's submit event

            if($('#username').val().length > 0 && $('#password').val().length > 0){
				console.log($('#check-user').serialize());
                    $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dev/indextest.php',
                        data:$('#check-user').serialize(),
                        type: 'post',                   
                        async: 'true',
						crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                            //$.mobile.showPageLoadingMsg(true); // This will show ajax spinner
							$('body').addClass('ui-loading');
							//$.mobile.loading('show', {theme:"a",text: "Verifying..",textonly: true,textVisible: true});
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                           // $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
						 //  $.mobile.loading('hide', {theme:"a",text: "Verifying..",textonly: true,textVisible: false});

                        },
                        success: function (result) {
							console.log(result);
							//console.log(result[1].firstname);
							if(result[0]){
                            sessionStorage.setItem("logged_in","1");
    
							sessionStorage.setItem("user_data",JSON.stringify(result[1]));
                            sessionStorage.setItem("plant_data",JSON.stringify(result[2]));
                           // alert(sessionStorage.getItem("plant_data"));
							sessionStorage.setItem("category_data",JSON.stringify(result[3]));
							sessionStorage.setItem("activity_data",JSON.stringify(result[4]));
							$.mobile.loading().hide();

								$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 
							}else {
															$.mobile.loading().hide();

								alert("username or password entered is invalid");	
							}
							//$.mobile.loadPage( "three.html");

							//$( "body" ).pagecontainer( "load", "three.html", { transition: "slide" });

							return false;
                        },
                        error: function (request,error) {
				console.log(error);
				console.log(request);
                            // This callback function will trigger on unsuccessful action                
                            alert('Network error has occurred please try again!');
                        }
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }           
            return false; // cancel original event to prevent form submitting
        });    
		
		
		 $(document).off('click', '#forgot_btn').on('click', '#forgot_btn', function() { // catch the form's submit event
			//alert('test');
            if($('#username1').val().length > 0 && $('#contactnumber').val().length > 0 && $('#information').val().length > 0){
				console.log($('#forgot').serialize());
                    $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dev/index2.php',
                        data:$('#forgot').serialize(),
                        type: 'post',                   
                        async: 'true',
						crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
							$('body').addClass('ui-loading');

                        },
                        complete: function() {
							$.mobile.loading().hide();// This will hide ajax spinner
                        },
                        success: function (result) {
							//console.log(result);
							if(result[0]){
								alert('details submitted successfully');
								$("#forgot").trigger('reset');
								$('#popupLogin').popup('close'); 
							}else {
								alert('incorrect details provided');
							}
							return false;
                        },
                        error: function (request,error) {
						console.log(error);
						console.log(request);
                        alert('Network error has occurred please try again!');
                        }
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }           
            return false; // cancel original event to prevent form submitting
        });    
		
		

		
});




       
		

		

