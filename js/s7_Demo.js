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
				trendData.push(new Array(2));
				trendData[n][0]=result[i].Record;
				trendData[n][1]=result[i].Record;
			}


		var d1 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d1.push([i, Math.sin(i)]);
		}
			
			$.plot("#trend",[d1]);
    		}
	})
});