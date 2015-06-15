$(function(){
    var date = new Date();
    var startDate = new Date();

    startDate.setHours(date.getHours()-1);
    date.setHours(date.getHours()-0);

    $('#startDatepicker').datetimepicker();
     $('#endDatepicker').datetimepicker();

    $('#startDatepicker').val(moment(startDate).format("MM/DD/YYYY h:mm:ss A"));
    $('#endDatepicker').val(moment(date).format("MM/DD/YYYY h:mm:ss A"));

http://192.168.0.1/Portal/Portal.mwsl?PriNav=FileBrowser&Path=/DataLogs/

	$.ajax({
    		url:'http://192.168.0.1/DataLogs/MyDataLog.csv',
    		type:'get',
    		dataType:'text',
    		success:function(data){
                                 var result = $.csv.toObjects(data);
    		           var pump1Data = [];
                                 var pump2Data = [];
    			
    			
			for(var i in result){
			     pump1Data.push([Date.parse(result[i].Date + " "+ result[i]["UTC Time"]),result[i].Pump1_On])
                                      pump2Data.push([Date.parse(result[i].Date + " "+ result[i]["UTC Time"]),result[i].Pump2_On])
			}
			
			$.plot("#trend",[pump1Data,pump2Data],{
				xaxis: { mode: "time" }
			});
    		}
	})

    $.ajax({
        url:'http://192.168.0.1/Portal/Portal.mwsl?PriNav=FileBrowser&Path=/DataLogs/',
        type:'get',
        dataType:'text',
        success:function(data){
            var response = $('<html />').html(data);
            var timestamp = '';
            var fileName = '';
            var start = Date.parse($('#startDatepicker').val());
            var end = Date.parse($('#endDatepicker').val());

            $(response).find('.systemTime .fbTime').each(function(index){
                if($(this).text().length>7){
                    timestamp = Date.parse(moment($(this).text(),"hh:mm:ss a MM/DD/YYYY"));
                    //if(timestamp>=start && timestamp<= end){
                        fileName = $(this).closest('.fileBrowserName').find('span').find('a').text();
                        alert(fileName);
                    //}
                }
            });
        }
    })


});