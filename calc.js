	function calc(btn) {
		
		if(document.javaCalc.display.value == "0"){
		 document.javaCalc.display.value = "";
	 }
	 
	    if(btn.value == "=") {
        document.javaCalc.display.value = eval(document.javaCalc.display.value);
      } else if (btn.value == "AC") {
        document.javaCalc.display.value = "0";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        }
        document.javaCalc.display.value += btn.value;
        document.javaCalc.mult.value = "×";
        document.javaCalc.div.value = "÷";
      }
	}