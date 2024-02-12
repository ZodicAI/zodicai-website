$(document).ready(function() {
    // Target the form by the button's click event
    $('#ik63k3').click(function(e) {
      e.preventDefault(); // Prevent the default form submission
      $("#ik63k3").prop('disabled', true);
  
      // Assuming the form data needs to include name, email, birth date & time, and birth place
      var formData = {
        name: $('#i7ot79').val(),
        email: $('#iq2fyf').val(),
        birthDateTime: $('#ikcdse').val(),
        birthCountry: $('#im11vf').val(),
        birthCity: $('#iracx7').val(),
        packageType: $('input[name="packageType"]:checked').val()
      };
  
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/register', // Replace this with your actual backend URL
        data: JSON.stringify(formData), // Convert the formData object to a JSON string
        contentType: 'application/json', // Specify the content type of the request
        success: function(response) {
            // Handle success
            $('.alert-success').show();
            $('.alert-danger').hide();
            $("#ic53y6").hide();
            
        },
        error: function(xhr, status, error) {
            // In case of an AJAX error
            $('.alert-danger').show();
            $('.alert-success').hide();
            $("#ik63k3").prop('disabled', false);
        }
      });
    });
  });
  