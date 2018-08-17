$(document).ready(function(){
	getPortfolio();
	

});
function processPortfolio(data){
	var result = $.parseJSON(data);
	var html = [];
	console.log(result);
	if(Array.isArray(result)){
		var id = 0;
		result.forEach(function(project) {    
		//========================
		//PORTFOLIO SETUP
		//=======================
			html.push('<li><a href="' + project.videoUrl + '">');
			html.push('<img src="' + project.videoThumbnailUrl + '" ');
			html.push('alt="' + project.projectName  + '"></a>');
			html.push('<h3><a href="' + project.videoUrl+ '">' + project.projectName + '</h3></li>')

		$('#shotsByPlayerId').html(html.join(''));
		});	
	}
	else if(result == null){
	}
	else{
		
	}
};

function getPortfolio(){
	jQuery.support.cors = true;
	$.get("https://portfolio.mycanvas.info/apis/getProjects",processPortfolio);
};


