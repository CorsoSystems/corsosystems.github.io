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
				trendData[i]=[result[i].Record,result[i].Record];
			}
			//flot1 = $.plot($('#trend'), trendData, options);
			$.plot("#trend",trendData);
    		}
	})
});