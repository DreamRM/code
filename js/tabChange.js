(function() {
    function Tab(option) {
        this.tabMenus = null;
        this.tabMains = null;
        this.init(option);
    }
    Tab.prototype = {
        constructor: Tab,
        init: function(option) {
            this.eleInit(option);
            this.eventInit(option);
            this.autoplay(option);
            this.startEvent(option);
        },
        eleInit: function(option) {
            this.lis = document.getElementsByClassName(option.tabMenus);
            this.divs = document.getElementsByClassName(option.tabMains);
            this.products = document.getElementsByClassName(option.products)[0];
        },
        eventInit: function(option) {
            var that = this;
            for (var i = 0; i < this.lis.length; i++) {
                var lis = this.lis[i];
                lis.index = i;
                lis.onclick = function() {
                    that.changeEvent(this, option);
                    clearInterval(that.timer);
                }
            }
        },
        autoplay: function(option) {
            var count = this.count || 0;
            var that = this;
            if (option.autoplay) {
                var timer = setInterval(function() {
                    that.changeEvent(that.lis[count], option);
                    count++;
                    count %= that.lis.length;
                }, 2000);
                that.timer = timer;
            }
        },
        changeEvent: function(clickThis, option) {
            this.count = clickThis.index;
            for (var j = 0; j < this.lis.length; j++) {
                this.lis[j].className = option.tabMenus;
                this.divs[j].className = option.tabMains;
            }
            clickThis.className += " active";
            this.divs[clickThis.index].className += " selected";
        },
        startEvent: function(option) {
            var that = this;
            this.products.onmouseover = function() {
                clearInterval(that.timer);
            }
            this.products.onmouseout = function() {
                that.autoplay(option);
            }
        }
    }
    window.Tab = window.T = Tab; // 如果tab的代码写在html中需要的接口
})(window)
