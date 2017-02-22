

(function(window, $) {
    var CheckBox = $.CheckBox;

    var checkboxes = []
    for (var i = 1; i <= 3; i ++) {
        var checkbox = new CheckBox({
            container: "#equipment-checkbox-wrapper-" + i,
            checkbox: "#equipment-checkbox-" + i,
            label: "#equipment-checkbox-label-" + i,
            checkboxSize: "15px",
            selectedImg: "../images/checkbox-active.png",
            unSelectedImg: "../images/checkbox.png",
        });

        checkboxes.push(checkbox)
    }

    var allCheckbox = new CheckBox({
        container: "#all-equipment-checkbox-wrapper",
        checkbox: "#all-equipment-checkbox",
        label: "#all-equipment-checkbox-label",
        checkboxSize: "15px",
        selectedImg: "../images/checkbox-active.png",
        unSelectedImg: "../images/checkbox.png",
    });

    allCheckbox.on("checked", function() {
        for(var i = 0; i < 3; i ++) {
            checkboxes[i].checked();
        }
    });

    allCheckbox.on("unchecked", function() {
        for(var i = 0; i < 3; i ++) {
            checkboxes[i].unchecked();
        }
    });

    var BootstrapDropdown = $.BootstrapDropdown;
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

    var statusDropDown = new BootstrapDropdown({
        container: "#status-selector",     // 下拉框组件的id选择器，要带#号
        option: ".status-option",          // 下拉框组件的菜单项class选择器，要带.号
        text: "#status-show",              // 下拉框组件显示被选中文本部分的id选择气，要带#号
        value: "#status-id",               // 下拉框组件内部保存被选中项value的元素的id选择器，要带#号
    })

}(window, jQuery));