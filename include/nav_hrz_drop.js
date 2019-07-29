
<!-- /* File nav_hrz_drop.js Designed by Luke Tennant © 2005 */ -->

	var showFor = 3; //' 3000 for 3 seconds delay
	
	if( typeof( nbtn ) == "undefined" ){ nbtn = 0; }
	
	var listobj = document.getElementById("list");
	var itemobj = listobj.getElementsByTagName("div");
	//var dtobj = document.getElementsByTagName("div");
	itemobj[nbtn+1].childNodes[0].className = 'linkerHeadSelected';
	//alert(itemobj[nbtn].id)

	function mouseOverContainer( obj ){ 
		for( var i=0; i< obj.childNodes.length; i++ ){
			if( obj.childNodes[i].style != null){ 
				document.getElementById("list").style.position = "absolute";
				obj.childNodes[i].style.display = "block"; //'stack anchor tags
				document.getElementById("list").style.paddingBottom = "10px";
			 }
		}
	}
	
	function mouseOffContainer( obj, e ){ 
	
		if( e == "undefined" ){ e.id = ""; e.target = false; }
		else if( e.target ){ e = e.relatedTarget; }
		else{ e = e.toElement; }

		if(e.id != "" ){ 
			var objid = obj.id;
			if( showFor < 99 ){
				setTimeout("hideLinks('"+objid+"');", showFor );
			}else{
			
			}
		}
	}
	
	function hideLinks( objid ){
		var obj = document.getElementById(objid);
		var firstLink = true;
		for( var i=0; i< obj.childNodes.length; i++ ){
			if( obj.childNodes[i].style != null){
				if( !firstLink ){ obj.childNodes[i].style.display = "none"; }
				firstLink = false;
			}
		}
	}

