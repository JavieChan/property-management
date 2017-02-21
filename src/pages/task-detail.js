
;$(function(){
    $(document).on('click', '#task-detail-tab span', function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.task-detail-device').eq(index).show().siblings().hide();
    });
});
