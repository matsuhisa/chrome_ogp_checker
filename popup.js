
$(function(){
	var bg = chrome.extension.getBackgroundPage();

	var ogp_title       = bg.ogp_title;
	var ogp_url         = bg.ogp_url;
	var ogp_image       = bg.ogp_image;
	var ogp_description = bg.ogp_description;
	var canonical       = bg.link_canonical;
	var site_title      = bg.site_title;
	var site_h1         = bg.site_h1;
	var site_keywords   = bg.site_keywords;
	var site_description= bg.site_description;

	$("#site_title").append(site_title);
	$("#site_h1").append(site_h1);
	$("#site_description").append(site_description);
	$("#site_keywords").append(site_keywords);


	$("#ogp_title").append(ogp_title);

	if(ogp_url){
		$("#ogp_url").append('' + ogp_url + '');
	}else{
		$("#ogp_url").append("未設定");
	}

	if(ogp_image){
		var image = new Image();
		image.src = ogp_image;
		var width = image.width;
		$("#ogp_image").append(ogp_image + '<br><img src="' + ogp_image + '" width="200" >');
	}else{
		$("#ogp_image").append("未設定");
	}

	$("#ogp_description").append(ogp_description);

	if(canonical){
		$("#canonical").append('' + canonical + '');
	}else{
		$("#canonical").append("未設定");
	}
});

