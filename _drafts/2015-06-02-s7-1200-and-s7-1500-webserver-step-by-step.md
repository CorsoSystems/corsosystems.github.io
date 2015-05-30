---
category: Blog
layout: blog_post
title: "Siemens S7-1200 and S7-1500 Web Server Step-By-Step"
page_title: "Siemens S7-1200 and S7-1500 Web Server Step-By-Step"
tags: ["Education"]
image: "/img/todo1.jpg"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>This Step-By-Step tutorial covers everything you need to know about using the web server in Siemens' S7-1200 and S7-1500 PLCs. After reading this article you will understand how to configure the web server, generate trends from data logs, handle recipe management in the PLC, and build a fully functional HMI and Reporting system you can use in any web browser, with mobile functionality built right in.</p>"
date: "02-06-2015"
---

<h4>Introduction</h4>

<p>This is going to be a long post. By the end you will have the skills to build a fully functional, web-based system with HMI, reporting, recipe management, trending, and dashboard components using only an S7-1200 or S7-1500 PLC, some Javascript and jQuery libraries, and a web-browser.</p>

<p style="color:#f64100;"><b>Why is this useful?</b></p>

Info on why this is useful, OEM systems, reducing complexity, MCI link to case study, how it could be done better, etc.



<h4>Step 1 - Enabling the web server</h4>

<p>The first step is to enable the web server. After opening your application, go to your PLC's Device Configuration menu, select the Web server item in the tree, and check "Activate Web server on all modules on this device". Compile your project and download to the processor</p>

<insert image 1 here/>

<p>After you have enabled the web server and downloaded to the PLC you can access the default page by navigating to your PLC's IP address in your browser.</p>

<insert image 2 here/>

<p>Using the default website, you can view the Diagnostic Buffer for your PLC:</p>

<insert image 3 here/>

<p>and you can access any data log files you may have stored in the PLC:</p>

<insert image 4 here/>

<p>The real power of the web server comes into play when you enable user pages, or custom HTML pages you can use to interact with your PLC data, and generate things like trends and dashboard controls for detailed data analysis in your browser.</p>

<h4>Step 2 - Enabling user pages</h4>

<p>The first thing you need to do is create a directory to hold your user pages. In this case we are using a folder called S7_1200_Web on the C:\ drive. Create an HTML file in this directory and put some HTML in so we can verify everything is working properly. For testing this can be the following:</p>

<insert image 5 here/>

<p>Save the HTML file as index.html and go back to your project. Scroll about halfway down to the Web Server menu in the Device Configuration tab to "User-Defined Web Pages" and enter the directory where your user pages are stored. Also enter the name of the default page, in this case we will use index.html. You can also enter your application name which will become part of the URL used to access your user pages.</p>

<p>You will also need to add the file extensions we will be using to the "Advanced" section to enable to PLC to generate the proper program blocks so you can access your pages. Typically these will be either .htm or .html, for html pages and .js for javascript files. Enter these extensions in the "Files with dynamic content" box under "Advanced"</p>

<p>By default the PLC will use DB333 and DB334 and so on to store the contents of your user pages. As you add more pages to the directory it will increment the DB number as necessary. If you would like to use a different DB number you can configure these in the "Advanced" section of the Web server configuration, just below the "User Pages" section.</p>

<p>Once you have filled out these sections, click the "Generate Blocks" button to generate the program blocks the PLC will use to store the HTML from your user pages.</p>

<insert image 6 here/>

<p>You will then see the program blocks created, in this case DB333 and DB334</p>

<insert image 7 here/>

<p>The final step to enable user pages is to add the WWW function to your logic. Specify your Web DB number, in this case 333, and a tag for the return value, then compile and download to the processor.</p>

<insert image 8 here/>

<p>Once you have downloaded your logic with the WWW function, you will see a link to the default user page under "User Pages" on the PLC's default web page. You can also navigate to the page directly with the following URL format: http://{ip address of PLC}/awp/{Application Name}/{User Page}.html, or for our PLC http://192.168.0.1/awp/WebDev/index.html</p>

<insert image 9 here/>

<p>Navigating to the page will display the HTML page you requested, in this case we will see a basic trend configured based on a data log file in the PLC. This functionality will be covered later in this article.</p>

<insert image 10 here/>




