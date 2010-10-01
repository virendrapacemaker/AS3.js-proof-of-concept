
$(document).ready(function(){

    matrix = new Matrix();
    
    console.log(matrix);
    
    test("Empty constructor initialization", function(){
	    	var a = matrix.a;
	    	ok(a, 1, "expecting 1");
	});
	
});
