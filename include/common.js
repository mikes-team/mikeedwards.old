<!--/* Designed by Luke Tennant © 2005 for Ice Palms Ltd*/ -->

//===================================================================================================
// ---- virtual function makeVariablesOutOfHref ----

	var wls = window.location.search.substr(1,window.location.search.length);

	if(wls != null && wls !='undefined' && wls !='' ){ // if some values have been passed
		eval( searchVariables( wls ) );
	}

function searchVariables( svr ){
	var evalText = new String("");
	var svrs = svr.split("&"); // split the values
	
	for( var i=0; i<svrs.length; i++){ //for each passed value
			var value = svrs[i].split("=")[0]; // get first value (the type/name )
			var content = svrs[i].split("=")[1]; //get passed values
			//-- evaluate content --
			if( !isNaN(content) ){ evalText += "var "+value+" = "+content+"; "; } // content is a number
			else if(content==null){ evalText += "var "+value+" = ''; "; } // content has no values
			
			if(isNaN(content) && typeof(content)=="string" ){ // content is a string or an array of values
				if( content.indexOf(",") > -1){
					var subArray = content.split(","); // content is array
					for(var i=0;i<subArray.length;i++){
						if(isNaN(subArray[i])){ subArray[i] = "'" +subArray[i]+ "'" ; } // if content array value is a string put quotes round it
					}
					evalText += "var "+value+" = new Array("+subArray+"); ";
				}else{ evalText += "var "+value+" = '"+content+"'; "; } //content is a string, put quotes round it
			}
		}
		return evalText;
}

//===================================================================================================
// ---- auxillary functions ----

function checkEmailValidity( mtext ){
	if( mtext == ""){ return false; }
	var mtext = new String(mtext);
	var regEx = /^[a-zA-Z]+[a-zA-Z0-9\.\w-]+@+[a-zA-Z]+[a-zA-Z0-9]+[a-zA-Z0-9\w-]*[\.]+[a-zA-Z0-9\w\.-]*[a-zA-z0-9]+$/;
	return( regEx.test( mtext ) );
}


function date_stamp(){
	var dt = new Date();
	var d = dt.getDate();
	var m = dt.monthName( dt.getMonth() );
	var y = dt.getFullYear();
	return d+"/"+m+"/"+y;
}

//===================================================================================================
// ---- prototypes ----

Date.prototype.dayName = function( dayNumber ){ 
	var a = new Array("sun","mon","tue","wed","thu","fri","sat");
	return a[dayNumber];
}

Date.prototype.monthName = function ( monthNumber ){
	var m = new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
	return m[monthNumber];
}


//===================================================================================================
// ---- Helper/debug functions ----

function fb( txt ){ document.write("<div id='' class='' style='color:#009900;' >"+txt+"</div>"); }
function wer( txt ){ document.write("<div id='' class='' style='color:#cc0000;' >Error: "+txt+"</div>"); }