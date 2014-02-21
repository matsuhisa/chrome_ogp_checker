
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
	var ogp_image_width = bg.ogp_image_width;
	
	if(site_title)
	{
		site_title_length = '<span style="display:inline-block;color:#ffffff;background-color:#666666;padding:0.4em;">' + site_title.length +"文字</span>";
		site_title = site_title + site_title_length;
	}

	$("#site_title").append(site_title);
	$("#site_h1").append(site_h1);

	// 文字列を配列にする
	String.prototype.toArray = function() {
	    var array = new Array;
	    for (var i=0 ; i < this.length; i++) {
	        array.push(this.charAt(i));
	    }
	    return array;
	};

	if(site_description)
	{
		var count_1 = 60;
		var count_2 = 120;
		var temp_site_description = '';
		var string_array = site_description.toArray();
		var start_html   = '<span>'
		var end_html     = '</span>';

		
		for(var i=0; i < site_description.length; i++)
		{
			if(i==count_1)
			{
				temp_site_description += '<span style="color:#999999;">';
		
			}else if(i==count_2)
			{
		
				temp_site_description += '</span><span style="color:#e7e7e7;">';
			}
			temp_site_description = temp_site_description + string_array[i];
		}
		temp_site_description += end_html;

		temp_site_description += '<span style="display:inline-block;color:#ffffff;background-color:#666666;padding:0.4em;">' + site_description.length +"文字</span>";
		site_description = temp_site_description;
	}


	$("#site_description").append(site_description);
	$("#site_keywords").append(site_keywords);

	if(ogp_title)
	{
		ogp_title_length = '<span style="display:inline-block;color:#ffffff;background-color:#666666;padding:0.4em;">' + ogp_title.length +"文字</span>";
		ogp_title = ogp_title + ogp_title_length;
	}
	$("#ogp_title").append(ogp_title);

	if(ogp_url){
		$("#ogp_url").append('' + ogp_url + '');
	}else{
		$("#ogp_url").append("未設定");
	}

	if(ogp_image){
		var image = new Image();
		image.src = ogp_image;
		width = image.naturalWidth;
		$("#ogp_image").append(ogp_image + '<br><img src="' + ogp_image + '" width="250" >');
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

