jQuery(document).ready(function($) {
	"use strict";
	$('#mailchimp_subscribe').submit(function() {
		var subc_email = $("#mailchimp_email").val();
		var apikey = $("#mailchimp_api_key").val();
		var listid = $("#mailchimp_list_id").val();
		     if (!valid_email_address(subc_email))
		        {
		            $(".mailchimp_message").html('Please make sure you enter a valid email address.');
		        }
		        else
		        {
		            $(".mailchimp_message").html("<span style='color:green;'>Almost done, please check your email address to confirmation.</span>");
					jQuery.ajax({
							 type : "post", 
							 url : "./wp-admin/admin-ajax.php",
							 data : {'action': "lms_mailchimp_footer_subcription", apikey : apikey,listid:listid,subc_email:subc_email},
							 success: function(response) {
								
								if(response=="success")
								{
									$("#mailchimp_email").val("");
									$(".mailchimp_message").html('<span style="color:green;">You have successfully subscribed to our mailing list.</span>');
								} 
								else
								{
								  $(".mailchimp_message").html('Please make sure you enter a valid email address.');  
								} 
							}
                       });
		        }
		        return false;
		    });
});
function valid_email_address(email)
		{
		    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		    return pattern.test(email);
		} 