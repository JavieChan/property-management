

(function(window, $) {
    var CheckBox = $.CheckBox;

    var checkbox = new CheckBox({
        container: "#all-notice-checkbox-wrapper",
        checkbox: "#all-notice-checkbox",
        label: "#all-notice-checkbox-label",
        checkboxSize: "15px",
        selectedImg: "../images/checkbox-active.png",
        unSelectedImg: "../images/checkbox.png",
    });

    for (var i = 1; i <= 3; i ++) {
        var checkbox = new CheckBox({
            container: "#notice-checkbox-wrapper-" + i,
            checkbox: "#notice-checkbox-" + i,
            label: "#notice-checkbox-label-" + i,
            checkboxSize: "15px",
            selectedImg: "../images/checkbox-active.png",
            unSelectedImg: "../images/checkbox.png",
        });
    }

}(window, jQuery));