
(function(window, $) {

    /**
    @desc               自定义复选框组件
    @author             cyrilzhao
    @dependencies       jQuery/zepto
    @example            checkBox = new CheckBox({
                            container: "#remember-row",
                            checkbox: "#remember-checkbox",
                            checkboxSize: "14px",
                            label: "#remember-label",
                            selectedImg: "/images/client/pc/login/checkbox-selected.png",
                            unSelectedImg: "/images/client/pc/login/checkbox.png",
                        });
    */


    var _defaultConfigs = {
        container: "",
        checkbox: "",
        label: "",
        checkboxSize: "",
        selectedImg: "",
        unSelectedImg: "",
    };

    function CheckBox(options) {
        var me = this;

        me.options = $.extend({}, _defaultConfigs, options);
        me.init()
        me.bindEvents()
    }

    CheckBox.prototype.init = function() {
        var me = this

        me.selected = false

        me.$el = {}
        me.$el.container = $(me.options.container);
        me.$el.checkbox = me.$el.container.find(me.options.checkbox);
        me.$el.label = me.$el.container.find(me.options.label);
        me.$el.checkbox.html($("<img src='" + me.options.unSelectedImg + "' class='checkbox-img' height='" + me.options.checkboxSize +  "' width='" + me.options.checkboxSize +  "' />"));

        me.events = [];
    };

    CheckBox.prototype.bindEvents = function() {
        var me = this

        me.$el.checkbox.click(function(e) {
            me.toggle();
        });

        me.$el.label.click(function(e) {
            me.toggle();
        });
    };

    CheckBox.prototype.on = function(eventName, handler) {
        var me = this

        if(!me.events[eventName]) {
            me.events[eventName] = [];
        }

        me.events[eventName].push(handler);
    };

    CheckBox.prototype.trigger = function(eventName, args) {
        var me = this

        if(!me.events[eventName]) {
            return false;
        }

        for(var i = 0, length = me.events[eventName].length; i < length; i ++) {
            handler = me.events[eventName][i];

            if(handler.apply(me, args) == false) {
                break;
            }
        }
    };

    CheckBox.prototype.getStatus = function() {
        return this.selected
    };

    CheckBox.prototype.toggle = function() {
        var me = this

        if(me.selected == false) {
            me.$el.checkbox.find(".checkbox-img").attr("src", me.options.selectedImg);
            me.trigger("checked");
        } else {
            me.$el.checkbox.find(".checkbox-img").attr("src", me.options.unSelectedImg);
            me.trigger("unchecked");

        }

        me.selected = !me.selected
    };

    CheckBox.prototype.checked = function() {
        var me = this

        me.selected = true;
        me.$el.checkbox.find(".checkbox-img").attr("src", me.options.selectedImg);
    };

    CheckBox.prototype.unchecked = function() {
        var me = this

        me.selected = false
        me.$el.checkbox.find(".checkbox-img").attr("src", me.options.unSelectedImg)
    };

    $.CheckBox = CheckBox;

}(window, jQuery))



