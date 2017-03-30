(function(){
    window.onload = function(){
        var lis = document.getElementsByClassName('tab-item');
        var divs = document.getElementsByClassName('main');
        for(var i=0;i<lis.length;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var i=0;i<lis.length;i++){
                    lis[i].className = 'tab-item';
                    divs[i].className = 'main';
                }
                this.className += " active";
                divs[this.index].className += " selected";
            }
        }
    }
})(window)