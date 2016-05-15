// タブが変更されたとき
chrome.tabs.onSelectionChanged.addListener(function(tabid){
  console.log("background.js.tab");
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {status: "changed"}, function(response) {
      console.log("response");
    });
  });
});

//
chrome.extension.onConnect.addListener(function(port)
{
  console.log("background.js");
  port.onMessage.addListener(function(msg){
    if(msg.status == "start"){
      //console.log("background1");
      ogp_title       = msg.ogp_title;
      ogp_url         = msg.ogp_url;
      ogp_image       = msg.ogp_image;
      ogp_description = msg.ogp_description;
      link_canonical  = msg.link_canonical;
      link_next       = msg.link_next;
      link_prev       = msg.link_prev;
      site_title      = msg.site_title;
      site_h1         = msg.site_h1;
      site_keywords   = msg.site_keywords;
      site_description= msg.site_description;
    }else{
      //console.log("background2");
    }
  });
});
