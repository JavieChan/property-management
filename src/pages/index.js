

(function(window, $) {
    var CheckBox = $.CheckBox;

    var checkboxes = []
    for (var i = 1; i <= 3; i ++) {
        var checkbox = new CheckBox({
            container: "#notice-checkbox-wrapper-" + i,
            checkbox: "#notice-checkbox-" + i,
            label: "#notice-checkbox-label-" + i,
            checkboxSize: "15px",
            selectedImg: "../images/checkbox-active.png",
            unSelectedImg: "../images/checkbox.png",
        });

        checkboxes.push(checkbox)
    }

    var allCheckbox = new CheckBox({
        container: "#all-notice-checkbox-wrapper",
        checkbox: "#all-notice-checkbox",
        label: "#all-notice-checkbox-label",
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

}(window, jQuery));