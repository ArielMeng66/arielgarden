---
layout: list
title:  所有文章
permalink: /list/
---

<ul id="all-page-list" class="list-unstyled">
	{% for post in site.posts %}
	<li>
		<a href="{{ post.url | prepend: site.baseurl }}">
			{{ post.title }} 
			<span>({{ post.date | date: "%Y年%-m月%-d日"}})</span>
		</a>
	</li>
	{% endfor %}
</ul>