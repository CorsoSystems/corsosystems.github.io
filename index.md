---
layout: page
title: Hello World!
tagline: Supporting tagline
---
{% include JB/setup %}

<!DOCTYPE html>

<html>
<head>
  <title>Corso Systems</title>
  
  <link type="text/css" rel="stylesheet" href="css/bootstrap.css" />
</head>

<!--Fixed Nav Bar-->

<body>
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar" </span>
          <span class="icon-bar" </span>
          <span class="icon-bar" </span>
      </button>
        <a href="#" class="navbar-brand">Corso Systems</a>
    
</div>
  
<div class="navbar-collapse collapse">
        
        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="dropdown">
                 <a href="#" class="dropdown-toggle " data-toggle="dropdown">Tutorials <b class="caret"></b></a>
                 <ul class="dropdown-menu">
                  <li><a href="#">Automation Tutorials</a></li>
                  <li><a href="#">PLC Tutorials</a></li>
                  <li><a href="#">Video Tutorials</a></li>
                  <li><a href="#">Audio Tutorials</a></li>
                  
                 </ul>
          </li>
          <li><a href="#">Contact</a></li>
          
        </ul>
      </div>
    </div>
  </div>


  <!-- Carousel 

  =======================-->

  <div id="myCarousel" class="carousel slide">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      
    </ol>

    <div class="carousel-inner">

    <div class="item active">
      <img src="img/road.jpg"/>
      <div class="container">
        <div class="carousel-caption">
          <h1>My Heading Text</h1>
          <p>This tag will container the text which we want to appear on our slide.</p>
          <p><a class="btn btn-large btn-primary">Sign Up</a></p>
        </div>
      </div>
    </div>


    <div class="item ">
      <img src="img/pier.jpg"/>
      <div class="container">
        <div class="carousel-caption">
          <h1>My Heading Text</h1>
          <p>This tag will container the text which we want to appear on our slide.</p>
          <p><a class="btn btn-large btn-primary">Sign Up</a></p>
        </div>
      </div>
    </div>


    <div class="item">
      <img src="img/water.jpg"/>
      <div class="container">
        <div class="carousel-caption">
          <h1>My Heading Text</h1>
          <p>This tag will container the text which we want to appear on our slide.</p>
          <p><a class="btn btn-large btn-primary">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>

  </div>

  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
  
  
  </div>

  <!-- Grid
  =============================-->

  <div class="container">
    <div class="row">

      <div class="col-md-4">
        <h2>First Heading</h2>
        <p>Some text will go here. Some text will go here. Some text will go here. Some text will go here. </p>
      </div>
    
      <div class="col-md-4">
        <h2>First Heading</h2>
        <p>Some text will go here. Some text will go here. Some text will go here. Some text will go here. </p>
      </div>

      <div class="col-md-4">
        <h3>First Heading</h3>
        <p>Some text will go here. Some text will go here. Some text will go here. Some text will go here. </p>
      </div>

      </div>
    </div>




  </div>


  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>﻿
  <script src="js/bootstrap.js"></script>
</body>
</html>