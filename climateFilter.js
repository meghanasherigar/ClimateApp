climateApp.filter("formatFilter",function(){
	return  function(x){
		var text="",c;
		for(i=0;i<x.length;i++)
		{
			c=x[i];
			if(i%2==0){
				c=c.toUpperCase();
			}
			text+=c;
		}
		return text;
	}

})