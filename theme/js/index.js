window.onload = function(){
	document.getElementById("content").addEventListener("mousewheel", function(event) {
		var that = this;
		if (this.scrollTop>100) {
			document.getElementById("top").className = "opacity";
			document.getElementById("top").onclick = function(){
				that.scrollTop=0;
				document.getElementById("top").className = "";
			}
		}else if(this.scrollTop<=100){
			document.getElementById("top").className = "";
		}
    	
});
}