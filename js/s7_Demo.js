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
				var n = trendData.length;
				trendData.push(new Array());
				trendData[n].push=result[i].Record;
				trendData[n].push=result[i].Record;
			}
			
			$.plot("#trend",trendData);
    		}
	})
});