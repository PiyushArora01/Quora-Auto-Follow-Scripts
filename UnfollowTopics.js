for(var i = 0; len = all_tags.length, i < len; ++i){
	var tag = all_tags[i];
	if(tag.getAttribute("action_click") && tag.getAttribute("action_click") == "TopicUnfollow"){
		tag.click();
	}
}