$(function(){
	$.ajax({
    		url:'http://192.168.0.1/DataLogs/MyDataLog.csv',
    		type:'get',
    		dataType:'text',
    		success:function(data){
    			var options = {
      				series: {
        					lines: { show: true },
        					points: { show: true }
      				}
    			}
    			var trendData = [];
    			var result = $.csv.toObjects(data);
    			var options="";
    			
			for(var i in result){
				trendData.push([result[i].Record, i])
				alert(moment(result[i].Date + " "+ result[i]["UTC Time"],"M/DD/YYYY HH:MM:SS"))
			}
			
			$.plot("#trend",[trendData]);
    		}
	})
});