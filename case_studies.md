---
layout: tag
title: Case Studies
header: Case Studies
group: navigation
exclude_from_search: true

---

<script src="{{ ASSET_PATH }}/resources/jquery/jquery.min.js"></script>
<script src="{{ ASSET_PATH }}/resources/bootstrap/js/bootstrap.min.js"></script>
<div class="row">
  <div class="col-md-3" style="text-align:left;">
<ul class="nav nav-pills nav-stacked">
  {% assign tags_list = site.tags %}  
  {% include tags_list %}
</ul>
</div>


<div class="col-md-9">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
  {% assign zz = tag[1] | where: "category", "CaseStudy" | sort %}
    
    {% if zz != empty %}
    <h2 id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
    <hr>
      <div class="row">
        {% assign pages_list = tag[1] %}  
        {% include pages_list %}
      </div>
    {% endif %}

  {% endfor %}
</div>
</div>

<hr>

<script src="/assets/themes/bootstrap/resources/jquery/jquery.min.js"></script>
<script src="/assets/themes/bootstrap/resources/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript">
$('.pill').click(function(){
  var self = this;
  $('.pill').removeClass("active");
  $(this).addClass("active");
});

</script>
