function loadMeteo(){
	var xhttp = new XMLHttpRequest();
	var api_key = '763dcd256b6048306e515d67a5042331';
	var url ='http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&mode=xml&units=metric&appid=' + api_key;
	xhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200){
		
	var xmlDoc = this.responseXML;

	var city = xmlDoc.getElementsByTagName("city")[0];
		
	var texte="";
		texte += city.getAttribute("name") +"<br/><br/>";
		
	//var lastupdate = xmlDoc.getElementsByTagName("lastupdate")[0];
		//texte +="<i style='font-size:10px'>" + lastupdate.getAttribute("value") +"</i>" +"<br>";		
	
	var d = new Date();
		texte += "<i style='font-size:15px'>" + d.getFullYear() +"/"+ (d.getMonth()+1) +"/"+ d.getDate() + "</i>" + "<br/><br/>";
	
	var temperature = xmlDoc.getElementsByTagName("temperature")[0];
		texte += "Temperature : " + temperature.getAttribute("value")+ " &#8451;" +"<br/><br/>";

	var weather = xmlDoc.getElementsByTagName("weather")[0];
		texte += "<img src = 'http://openweathermap.org/img/w/"+ weather.getAttribute("icon") + ".png'>" +"<br>";

		document.getElementById("meteo").innerHTML = texte;
		
		//alert(this.responseText);
		//document.getElementById("meteo").innerHTML = this.responseText;
}
};
xhttp.open ("GET", url, true);
xhttp.send();
}