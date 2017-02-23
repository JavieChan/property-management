
function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null) return decodeURIComponent(r[2]); return null;
}

function CheckProgress(url){
    $.ajax({
        method: 'get',
        url: url+'/asset/checkProgress/' + GetQueryString('id'),
        dataType: "json"
    }).done(function(data){
        if(data.Code.Code==0){
            $('#uncheckDevicePanel p span').text(data.uncheckcount);
            $('#checkDevicePanel p span').text(data.checkcount);
        }else{
            console.log("no data");
        }
    }).fail(function(error){
        console.log(error);
    });
}

function QueryPorpertyUnCheck(url){
    $.ajax({
        method: 'post',
        url: url+'/assets',
        data: {
            checktask_id: GetQueryString('id'),
            check_flag: 0
        },
        dataType: "json"
    }).done(function(data){
        if(data.Code.Code==0){
            for(var i=0, h=''; i<data.assets.length; i++){
                var assetData = data.assets[i];
                h+='<tr><td>'+assetData.tag_num+'</td><td>'+(assetData.maker_name+assetData.name)+'</td><td>'+assetData.model_num+'</td><td>'+assetData.location+'</td><td>'+assetData.person+'</td></tr>';
            }
            $('#uncheckDevicePanel .table tbody').html(h);
        }else{
            console.log("no data");
        }
    }).fail(function(error){
        console.log(error);
    });
}

function QueryPorpertyCheck(url){
    $.ajax({
        method: 'post',
        url: url+'/assets',
        data: {
            checktask_id: GetQueryString('id'),
            check_flag: 1
        },
        dataType: "json"
    }).done(function(data){
        if(data.Code.Code==0){
            for(var i=0, h=''; i<data.assets.length; i++){
                var assetData = data.assets[i];
                h+='<tr><td>'+assetData.tag_num+'</td><td>'+(assetData.maker_name+assetData.name)+'</td><td>'+assetData.model_num+'</td><td>'+assetData.location+'</td><td>'+assetData.person+'</td></tr>';
            }
            $('#checkDevicePanel .table tbody').html(h);
        }else{
            console.log("no data");
        }
    }).fail(function(error){
        console.log(error);
    });
}

;$(function(){
    var proUrl = 'http://172.16.44.2:8022';

    CheckProgress(proUrl);
    QueryPorpertyUnCheck(proUrl);
    QueryPorpertyCheck(proUrl);
    $('.task-detail-info .name').html(GetQueryString('name'));
    $('.task-detail-info .deadline').html(GetQueryString('t'));

    $(document).on('click', '#task-detail-tab span', function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.task-detail-device').eq(index).show().siblings().hide();
    });
});
