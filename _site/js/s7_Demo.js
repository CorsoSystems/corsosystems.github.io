$(function(){
	$.ajax({
    		url:'http://192.168.0.1/DataLogs/MyDataLog.csv',
    		type:'get',
    		dataType:'text',
    		success:function(data){
        		var result = $.csv.toObjects(data);

			for(var i in result){
				alert(result[i].Record);
			}
    		}
	})
});