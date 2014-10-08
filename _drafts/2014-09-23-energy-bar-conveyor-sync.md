---
layout: case_study
title: "Energy Bar Conveyor Speed Sync"
description: "Sychronized multiple conveyors on a process line for an energy bar manufacturing facility."
tags: ["Food and Beverage","Process Optimization", "Process Control","PLC","HMI"]
permalink: /case_studies/food_and_beverage/energy-bar-conveyor-sync
type: "Case Study"
---

<h3>Summary</h3>
<p class="left-align">An energy bar manufacturing facility had a number of standalone pieces of equipment on which they wanted the ability to set a global, synchronized speed.</p>

<h3>Benefits</h3>
<ul class="left-align">
	<li>Stand alone equipment now integrated with a PLC to provide the capability for full-line automation</li>
	<li>8 pieces of equipment with local control can now be operated from one operator interface</li>
	<li>Recipe management capabilities enable operators to configure speeds for various products and select them on the fly</li>
</ul>

<h3>Technology</h3>
<ul class="left-align">
	<li>Allen Bradley Powerflex VFDs</li>
	<li>Allen Bradley CompactLogix PLC</li>
	<li>Allen Bradley Panelview Plus</li>
</ul>

<h3>Solution</h3>
<p class="left-align">The client's existing process line consisted of 8 stand-alone machines taking raw ingredients, forming them into bars, enrobing in chocolate and drying them prior to entering the packaging line.</p>

<p class="left-align">Each of these machines has a conveyor with a locally configurable speed for each piece of equipment. Operators were spending a signficant amount of time adjusting the speeds for each piece of equipment when changing products, resulting in issues when the speeds were not exactly the same.</p>

<p class="left-align">We implemented a system using Allen Bradley CompactLogix PLC and Panelview Plus to communicate with Powerflex 4 and 5 VFDs installed on each piece of equipment.</p>

<p class="left-align">The local control capability for each machine was replaced by a screen on the Panelview Plus allowing the operators to set a desired speed and the PLC calculating the required values for each drive based on its conveyor properties and gear ratios. The operators were also given the capability to configure speeds for various products giving them a drop-down menu to cut changeover times essentially to zero with respect to adjusting the speed of the line.</p>