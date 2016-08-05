$('#button').click(function(event) {
     $('#list').append('<input type="checkbox"><label>' + $('#date').val() + '</label><br>')
 })
 $('#button2').click(function(event) {
     $.ajax({
         url: "",
         data: $('form').serialize(),
         type: "POST",
         dataType: "json"
     })
 })