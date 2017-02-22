(function(window, $) {
    var _defaultConfigs = {
        container: "",       // 下拉框组件的id选择器，要带#号
        option: "",          // 下拉框组件的菜单项class选择器，要带.号
        text: "",           // 下拉框组件显示被选中文本部分的id选择气，要带#号
        value: "",           // 下拉框组件内部保存被选中项value的元素的id选择器，要带#号
    }

    function BootstrapDropdown(options) {
        var me = this

        me.options = $.extend({}, _defaultConfigs, options)
        me.events = []

        me.init()
        me.bindEvents()
    }

    BootstrapDropdown.prototype.init = function() {
        var me = this

        me.data = {}
        me.$container = $(me.options.container)
        me.$options = me.$container.find(me.options.option)
        me.$value = me.$container.find(me.options.value)
        me.$text = me.$container.find(me.options.text)
    };

    BootstrapDropdown.prototype.bindEvents = function() {
        var me = this

        me.$options.click(function(e) {
            var $elem = $(e.currentTarget)

            me.selectByValue($elem.data("value"))

            return true
        });
    };

    BootstrapDropdown.prototype.on = function(event, handler) {
        var me = this;

        if(event == null) {
            return false;
        }

        if(!$.isArray(me.events[event])) {
            me.events[event] = [];
        }

        me.events[event].push(handler)
    };

    BootstrapDropdown.prototype.trigger = function(event) {
        var me = this

        if(!$.isArray(me.events[event])) {
            return false
        }

        var args = []
        for(var i = 0, length = arguments.length; i < length; i ++) {
            args.push(arguments[i]);
        }

        for (var i = 0, length = me.events[event].length; i < length; i ++) {
            var handler = me.events[event][i];
            handler.apply(me, args.slice(1))
        }
    };

    BootstrapDropdown.prototype.setOptions = function(data) {
        var me = this

        var $menu = me.$container.find(".dropdown-menu")
        $menu.html("")

        for(var i = 0, length = data.length; i < length; i ++) {
            var item = data[i]
            var $item = $('<li><a href="javascript:void(0)" class="' + me.options.option.slice(1) + '" data-value="' + item.value + '">' + item.text + '</a></li>')
            $menu.append($item)
        }

        me.init()
        me.bindEvents()
        me.selectByValue(data[0].value)
    };

    BootstrapDropdown.prototype.setValue = function(value) {
        var me = this

        if(!!value) {
            me.data.value = String(value)
        }
        me.$value.val(me.data.value)
    };

    BootstrapDropdown.prototype.getValue = function() {
        var me = this

        if(me.data.value) {
            return me.data.value
        } else {
            return me.$value.val()
        }
    };

    BootstrapDropdown.prototype.setText = function(text) {
        var me = this

        if(!!text) {
            me.data.text = text
        }

        me.$text.html(me.data.text)
    };

    BootstrapDropdown.prototype.getText = function() {
        var me = this

        return me.data.text
    };

    BootstrapDropdown.prototype.selectByValue = function(value) {
        var me = this

        for(var i = 0, length = me.$options.length; i < length; i ++) {
            var $option = $(me.$options[i])

            if(String($option.data("value")) == String(value)) {
                me.setValue(String(value))
                me.setText($option.html())
                break
            }
        }

        me.trigger("change", me.data.value, me.data.text)
    };

    BootstrapDropdown.prototype.selectByText = function(text) {
        var me = this

        for(var i = 0, length = me.$options.length; i < length; i ++) {
            var $option = $(me.$options[i])

            if($.trim($option.html()) == text) {
                me.setValue($option.data("value"))
                me.setText(text)
                break
            }
        }

        me.trigger("change", me.data.value, me.data.text)
    };

    $.BootstrapDropdown = BootstrapDropdown;

}(window, jQuery))
