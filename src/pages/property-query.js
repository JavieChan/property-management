

(function(window, $) {
    var BootstrapDropdown = $.BootstrapDropdown;
    $('.form-date').datetimepicker({
        language: "zh-CN",
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd'
    });

    var departmentDropDown = new BootstrapDropdown({
        container: "#department-selector",     // 下拉框组件的id选择器，要带#号
        option: ".department-option",          // 下拉框组件的菜单项class选择器，要带.号
        text: "#department-show",              // 下拉框组件显示被选中文本部分的id选择气，要带#号
        value: "#department-id",               // 下拉框组件内部保存被选中项value的元素的id选择器，要带#号
    })

    var personDropDown = new BootstrapDropdown({
        container: "#person-selector",     // 下拉框组件的id选择器，要带#号
        option: ".person-option",          // 下拉框组件的菜单项class选择器，要带.号
        text: "#person-show",              // 下拉框组件显示被选中文本部分的id选择气，要带#号
        value: "#person-id",               // 下拉框组件内部保存被选中项value的元素的id选择器，要带#号
    })

}(window, jQuery));

