$('#tosubmit').on('submit',function(){
	$.ajax({
		url:
		data: $('#tosubmit').serialize(),
		type:"POST",
		dataType:"GET"
	})
	return false;
})