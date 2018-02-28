module.exports = function check(str, bracketsConfig) {
	var keys = [];
	
  	for (var el of str)
  	{
  		var key = false;
  		for(var i = 0;i < bracketsConfig.length; ++i)
  		{
  			if(el == bracketsConfig[i][0]) 
  				{	
  					keys.push(i);
  					key = true;
  					break;	
  				}
  		}
  		
  		if(keys.length >= 2)
  			if(bracketsConfig[keys[keys.length - 1]][1] == bracketsConfig[keys[keys.length - 2]][0] && bracketsConfig[keys[keys.length - 1]][0] == bracketsConfig[keys[keys.length - 2]][0])
  						{
  							keys.pop();
  							keys.pop();
  						}
  			if(!key)
  				{
  					if(keys.length == 0) return false;

  						else if (el != bracketsConfig[keys.pop()][1])
  						{
	
  							return false;
  						}
  				}
  	}
	return keys.length == 0;
}
