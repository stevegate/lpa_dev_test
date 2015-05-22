// JavaScript Document

	var currentpage=1;
	var pagelimit =5;
	var total = 0;
	var totalpage=0;
	



	$(document).one('pagecreate', '#page_five', function(){  
	
			
           // $("#page_five").live('pageinit', function() {
				assignValues();
				$(".ui-content").css('margin-bottom', $('#footer').height());

				$(document).off('click', '#lpa_create').on('click', '#lpa_create', function() { 
			 		//$.mobile.changePage("/five.html");
					//$.mobile.changePage("five.html", { transition: "slide", changeHash: false, reverse: false });
						//alert('testing ajax');
						var allvalues =  readvalues();
	                    $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dev/createlpa.php',
                        data:$('#lpaform').serialize(),
                        type: 'post',                   
                        async: 'true',
						crossDomain: true,
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                           // $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                           // $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                        },
                        success: function (result) {
							console.log(result);
							//alert('Data submitted succesfully 123');
							$('#basic').popup('open'); 

							//$.mobile.changePage("two.html", { transition: "slide", changeHash: false, reverse: false });
							return false;
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action     
							console.log(request);
							console.log(error);           
                            alert('Network error has occurred please try again!');
                        }
                    });
					
					
					
					
					
					
					return false;
			 
				});
				
				
				$( "#basic" ).bind({popupafterclose: function(event, ui) { 
						//alert('test');
						$.mobile.changePage("two.html", { transition: "slide", changeHash: false, reverse: false });
						return false;						
					}
				});

				
				$(document).off('click', '#page_five_profile').on('click','#page_five_profile',function(){
					//alert('test five');
					$.mobile.changePage("profile.html", { transition: "slide", changeHash: false, reverse: false });
					return false;

				});

				
				
				
				$(document).off('click', '#prev1').on('click', '#prev1', function() { 

						pagination1();
				});
				
				$(document).off('click', '#next6').on('click', '#next6', function() { 

						pagination2();
				});
				
				$(document).off('click', '#five_signout').on('click', '#five_signout', function() {
					sessionStorage.clear(); 
					// alert('testing update page');
					$.mobile.changePage("index.html", { transition: "slide", changeHash: true, reverse: false }); 
					return false;
				});

				
				
				
     });
	 
	 
		/*var on = false;  
		$("html").click( function( e )
		{
		if( $(".ui-panel").hasClass("ui-panel-open") == true  && !on){
				on = true
		}else{
				on = false;
				$( "#overlayPanel" ).panel( "close" );        
		}		
		});*/

		  
		$(document).off('click', '#five_logo').on('click', '#five_logo', function(e) { 
			$.mobile.changePage("two.html", { transition: "slide", changeHash: true, reverse: false }); 												            return true;
		});
	  
		$(document).off('click', '#page_five_create').on('click', '#page_five_create', function(e) { 
			$.mobile.changePage("three.html", { transition: "slide", changeHash: true, reverse: false }); 												            return true;
		});

	 
	 	$(document).off('click', '#page_five_update').on('click', '#page_five_update', function(e) { 
			$.mobile.changePage("update_one.html", { transition: "slide", changeHash: true, reverse: false }); 												            return true;
		});

	 
			
		function assignValues(){
			userobject = 	JSON.parse(sessionStorage.getItem("user_data"));	
			
			$('#emplyee_name_five').text(''+userobject.firstname+' '+userobject.lastname);
			$('#emplyee_id_five').text(userobject.username);
			
			plant_array = 	JSON.parse(sessionStorage.getItem("plant_data"));	
			category_array = 	JSON.parse(sessionStorage.getItem("category_data"));	
			activity_array = 	JSON.parse(sessionStorage.getItem("activity_data"));	
			//console.log('page3');

			var c=0;
			for(a=0;a<category_array.length;a++){
				//for(a=0;a<2;a++){
				category_obj = category_array[a];
				activity_arr = activity_array[a];
				var cat = '<p class="cen1" id="category'+c+'">'+category_obj.category+'</p>';
				$('#pagination').append(cat);
				for(b=0;b<activity_arr.length;b++){
					
					activityobj = activity_arr[b];
					/*var act = '<hr id="hr'+c+'"><p class="cen2" id="activity'+c+'">'+activityobj.activity+'</p>';
var div_val = '<div class="ui-grid-b ansgrid" id="checkbox'+c+'"><div class="ui-block-b "><label class="flo">Yes:</label><input type="checkbox" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="checkbox" id="result_no'+c+'" name="result_no'+c+'" value="no"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="checkbox" id="result_na'+c+'" name="result_na'+c+'" value="na"><br id="result_na_br'+c+'"></div></div><label id="find'+c+'">Findings</label><input type="text"   id="findings'+c+'" name="findings'+c+'"/><br id="findings_br'+c+'"><label id="resp'+c+'" for="responsibility'+c+'" class="select">Responsibility</label><select name="responsibility'+c+'" id="responsibility'+c+'"><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><br id="resp_br'+c+'"><label id="lbldate'+c+'">Date</label><input type="date"   id="datepicker'+c+'" name="datepicker'+c+'"/>'; */
					var act = '<hr id="hr'+c+'"><p class="cen2" id="activity'+c+'">'+activityobj.activity+'</p> ';
var div_val = '<div class="ui-grid-c vgb" id="checkbox'+c+'"><div class="ui-block-a "><label class="flo">Yes:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="no" class="marl"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="na" checked></div><div class="ui-block-d"><a href="#" class="ui-btn pls ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext"  id="add'+c+'" onclick="showfields('+c+');">Add</a><a href="#" id="minus'+c+'" class="ui-btn pls ui-shadow ui-corner-all ui-icon-minus ui-btn-icon-notext" style="display:none" onclick="hidefields('+c+');" >Minus</a><br id="result_na_br'+c+'" style="display:none;"></div></div><div class="paf"><input type="text"   id="findings'+c+'" name="findings'+c+'" placeholder="Findings" style="display:none;"><select name="responsibility'+c+'" id="responsibility'+c+'" onchange="enabledate('+c+');" ><option value="0">Choose Responsibility</option><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><input type="date" style="display:none;"  id="datepicker'+c+'" name="datepicker'+c+'"  disabled/></div>';
					c++;
   					$('#pagination').append(act+div_val);
					$('#pagination').enhanceWithin();
					//$('#result_yes'+c).val('na').attr("checked",true).checkboxradio("refresh");

				}
				
			}

			total = c;
		
			if((total+1)%5>0){
				totalpage = Math.floor((total+1)/5)+1;
			}else {
				totalpage = Math.floor((total+1)/5);
			}
			//alert('totalpage' + totalpage);
			//sessionStorage.setItem('totalpage',totalpage);
			//sessionStorage.setItem('totalitem',total);	
			//totalpage = (total+1)%5;
			hidestyle(0,total);
			applystyle(0,4);
			hidefield();
			//$("#prev1").addClass('ui-disabled');
			//$("#lpa_create").css({'display':'none'});
			disablebutton($("#prev1"),'',$("#lpa_create"));

			
		}
		
		
		function enabledate(c)
		{
				//alert('test' + $('#responsibility'+c).val());
				 if($('#responsibility'+c).val()!="0"){
					 //alert('test');
					$('#datepicker'+c).removeAttr('disabled');	
					$('#datepicker'+c).parent().removeClass('ui-state-disabled');	
					//ui-state-disabled
				 }else {
					 $('#datepicker'+c).attr('disabled','disabled');
					$('#datepicker'+c).parent().addClass('ui-state-disabled');	
					 
				 }
			
		}
		
		function showfields(rowid){
				$('#result_na_br'+rowid).css({'display':''});				
				$('#findings'+rowid).css({'display':''});
				$('#responsibility'+rowid+'-button').css({'display':''});
				$('#responsibility'+rowid).css({'display':''});
				$('#datepicker'+rowid).css({'display':''});
				$('#add'+rowid).css({'display':'none'});
				$('#minus'+rowid).css({'display':''});				
								
		}
		
		function hidefields(rowid){
				$('#result_na_br'+rowid).css({'display':'none'});				
				$('#findings'+rowid).css({'display':'none'});
				$('#responsibility'+rowid+'-button').css({'display':'none'});
				$('#responsibility'+rowid).css({'display':'none'});
				$('#datepicker'+rowid).css({'display':'none'});
				$('#add'+rowid).css({'display':''});
				$('#minus'+rowid).css({'display':'none'});				
								
		}
		
		

		function readvalues(){
			//var allvaluearray = new Array();
			
			
		
			activity_array = 	JSON.parse(sessionStorage.getItem("activity_data"));
			category_array = 	JSON.parse(sessionStorage.getItem("category_data"));	
			var act_val="";
			for(a=0;a<category_array.length;a++){
				activity_arr = activity_array[a];
				for(b=0;b<activity_arr.length;b++){
					activityobj = activity_arr[b];
					act_val+=activityobj.activity_id+"#";
					//console.log(activityobj);
					//console.log("id = " + activityobj.activity_id);
				}
			}
			userdata = JSON.parse(sessionStorage.getItem("user_data"));
			$("#activityval").val(act_val);
			$("#plant_id").val(JSON.parse(sessionStorage.getItem("plant_name")));
			$("#part_id").val(JSON.parse(sessionStorage.getItem("partno")));
			$("#shift").val(JSON.parse(sessionStorage.getItem("shift")));
			$("#user_id").val(JSON.parse(userdata.user_id));
			
			
			
 		}
		
		function hidefield(){
				for(a=0;a<5;a++){
				$('#findings'+a).css({'display':'none'});
				$('#responsibility'+a+'-button').css({'display':'none'});
				$('#responsibility'+a).css({'display':'none'});
				$('#datepicker'+a).css({'display':'none'});				
				$('#result_na_br'+a).css({'display':'none'});				
				}
		}
		
		function hidestyle(start,end){
			for(d=start;d<=end;d++){
				$('#category'+d).css({'display':'none'});
				$('#activity'+d).css({'display':'none'});
				$('#checkbox'+d).css({'display':'none'});
				$('#result_no_br'+d).css({'display':'none'});
				$('#result_na_br'+d).css({'display':'none'});				
				//$('#find'+d).css({'display':'none'});
				$('#findings'+d).css({'display':'none'});
				//$('#findings_br'+d).css({'display':'none'});

				//$('#resp'+d).css({'display':'none'});
				//$('#resp_br'+d).css({'display':'none'});
				$('#hr'+d).css({'display':'none'});
				//$('#responsibility'+d).css({'display':'none'});
				$('#responsibility'+d+'-button').css({'display':'none'});
				//$('#lbldate'+d).css({'display':'none'});
				$('#datepicker'+d).css({'display':'none'});				
				$('#act_div'+d).css({'display':'none'});	
			}
			
			
		}
		
		
		
		function applystyle(start,end){
			//alert(start+ ' = ' + end);
			for(d=start;d<=end;d++){
				$('#category'+d).css({'display':''});
				$('#activity'+d).css({'display':''});
				$('#checkbox'+d).css({'display':''});
				$('#result_no_br'+d).css({'display':''});
				//$('#result_na_br'+d).css({'display':''});				
				//$('#find'+d).css({'display':''});
				//$('#findings'+d).css({'display':''});
				//$('#findings_br'+d).css({'display':''});

				//$('#resp'+d).css({'display':''});
				//$('#resp_br'+d).css({'display':''});
				$('#hr'+d).css({'display':''});

				//$('#responsibility'+d).css({'display':'none'});
				//$('#responsibility'+d+'-button').css({'display':''});
				//$('#lbldate'+d).css({'display':''});
				//$('#datepicker'+d).css({'display':''});				
				$('#act_div'+d).css({'display':''});	 
				
			}
			
			
		}
		
		
		function pagination2(){
					//alert('next');
					//totalpage = parseInt(sessionStorage.getItem('totalpage'));
					//total = parseInt(sessionStorage.getItem('totalitem'));
					//alert('total = ' + total  + ' totalpage= '+ totalpage);

					if(currentpage==totalpage){
						currentpage = 1;
					}else {
						currentpage = currentpage+1;	
					}
					
					//alert('currentpage = ' + currentpage  + ' totalpage= '+ totalpage);
					

					if(currentpage>1 && currentpage<totalpage){
						//alert('if1');
						start = (currentpage-1)*5;
						end =((currentpage)*5)-1;
						/*$("#prev1").removeClass('ui-disabled');
						$("#next6").removeClass('ui-disabled');
						("#lpa_create").css({'display':'none'});*/
						enablebutton($("#prev1"),$("#next6"),'');
						disablebutton('','',$("#lpa_create"));
					//	$('#next6').css({'background-color':'#007030'});


						hidestyle(0,total);
						applystyle(start,end);
					}else {
						//alert('if3');
						start = (currentpage-1)*5;
						end = total;
						/*$("#next6").addClass('ui-disabled');
						("#lpa_create").css({'display':''});*/
						enablebutton($("#prev1"),'',$("#lpa_create"));
						disablebutton('',$("#next6"),'');
						hidestyle(0,total);
						applystyle(start,end);


					}
			
			
			
		}
		
		
		function pagination1(){
					//alert('prev');
					//totalpage = parseInt(sessionStorage.getItem('totalpage'));
					//total = parseInt(sessionStorage.getItem('totalitem'));
					//alert('total = ' + total  + ' totalpage= '+ totalpage);

					if(currentpage>1){
						currentpage = currentpage-1;
					}else {
						currentpage = 1;	
					}
					
					//alert('currentpage = ' + currentpage  + ' totalpage= '+ totalpage);
					

					if(currentpage>1 && currentpage<totalpage){
						//alert('if1 prev');
						start = (currentpage-1)*5;
						end =((currentpage)*5)-1;
						/*$("#prev1").removeClass('ui-disabled');
						$("#next6").removeClass('ui-disabled');
						("#lpa_create").css({'display':'none'});*/
						enablebutton($("#prev1"),$("#next6"),'');
						disablebutton('','',$("#lpa_create"));
						hidestyle(0,total);
						applystyle(start,end);
					}else if(currentpage<=1){
						//alert('if2 prev');
						//$("#prev1").addClass('ui-disabled');
						//("#lpa_create").css({'display':'none'});
						enablebutton('',$("#next6"),'');
						disablebutton($("#prev1"),'',$("#lpa_create"));

						start=0;
						end = ((currentpage)*5)-1;
						hidestyle(0,total);
						applystyle(start,end);
					}
			
			
			
			
			
		}
		
		
		function disablebutton(prev,next,lpasubmit){
			if(prev!=''){
				prev.addClass('ui-disabled');
			}
			if(next!=''){
				next.addClass('ui-disabled');
			}
			if(lpasubmit!=''){
				lpasubmit.css({'display':'none'})
			}
			
		}


		function enablebutton(prev,next,lpasubmit){
			if(prev!=''){
				prev.removeClass('ui-disabled');
			}
			if(next!=''){
				next.removeClass('ui-disabled');
				next.removeClass('ui-btn-active');
				
			}
			if(lpasubmit!=''){
				lpasubmit.css({'display':''})
			}
			
		}
		
		

		
