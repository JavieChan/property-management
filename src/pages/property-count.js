
function PropertyCountList(url){
    $.ajax({
        method: 'get',
        url: url+'/asset/check',
        dataType: "json"
    }).done(function(data){
        if(data.Code.Code==0){
            var len = data.checks.length > 5 ? 5 : data.checks.length;
            for(var i=0, h=''; i<len; i++){
                var checkData = data.checks[i];
                h+='<tr><td>'+checkData.name+'</td><td></td><td>'+checkData.deadline+'</td><td>'+checkData.executor+'</td><td><a href="task-detail.html?id='+checkData.checktask_id+'&name='+checkData.executor+'&t='+checkData.deadline+'">查看详情</a></td></tr>';
            }
            $('#property-count-table .table tbody').html(h);
        }else{
            console.log("no data");
        }
    }).fail(function(error){
        console.log(error);
    });
}

;$(function(){
    var proUrl = 'http://172.16.44.2:8022';

    PropertyCountList(proUrl);
});