---
layout: tag
title: Tags
header: Posts By Tag
group: navigation
exclude_from_search: true
---
{% include JB/setup %}
<script src="{{ ASSET_PATH }}/resources/jquery/jquery.min.js"></script>
<script src="{{ ASSET_PATH }}/resources/bootstrap/js/bootstrap.min.js"></script>
<div class="row">
  <div class="col-md-3" style="text-align:left;">
<ul class="nav nav-pills nav-stacked">
  {% assign tags_list = site.tags %}  
  {% include JB/tags_list %}
</ul>
</div>

<div class="col-md-9">
{% for tag in site.tags %} 
  <h2 id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <hr>
  <div class="row">
    {% assign pages_list = tag[1] %}  
    {% include JB/pages_list %}
 </div>

{% endfor %}
</div>
</div>


<script src="/assets/themes/bootstrap/resources/jquery/jquery.min.js"></script>
<script src="/assets/themes/bootstrap/resources/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript">
$('.pill').click(function(){
  var self = this;
  $('.pill').removeClass("active");
  $(this).addClass("active");
});

</script>
