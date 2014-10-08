---
layout: case_study
title: "Conversion from Wonderware Historian to FactoryTalk Historian"
description: "Converted an existing Wonderware Historian installation to a FactoryTalk Historian with no loss of data."
tags: ["Mining","Technology Migration", "Process Historian", "Process Analytics", "Database Management"]
permalink: /case_studies/mining/wonderware-to-factorytalk-historian-conversion
type: "Case Study"
---

<h3>Summary</h3>
<p class="left-align">A number of years ago a leading diatomaceous earth processing company worked with our staff to install Wonderware InSQL (now Historian) along with Incuity (now VantagePoint) at a number of it's facilities. As other facilities began adopting these systems they used VantagePoint after Rockwell Automation purchased Incuity Software and FactoryTalk Historian as it was integrated and licensed to work with VantagePoint out of the box. This prompted an ugrade of the systems at all of their facilities to reduce support costs and maintain corporate standards. This upgrade included importing existing data from Wonderware InSQL/Historian to FactoryTalk Historian.</p>

<h3>Technology</h3>
<ul class="left-align">
	<li>Wonderware Historian/InSQL</li>
	<li>Incuity/VantagePoint</li>
	<li>FactoryTalk Historian</li>
	<li>SQL Server</li>
	<li>Allen Bradley ControlLogix PLCs</li>
	<li>Allen Bradley CompactLogix PLCs</li>
</ul>

<h3>Benefits</h3>
<ul class="left-align">
	<li>All facilities standardized on the latest versions of VantagePoint</li>
	<li>All facilities standardized on the lastest versions of FactoryTalk Historian</li>
	<li>Upgraded to a new FactoryTalk Historian installation with no loss of data</li>
	<li>All facilities were configured for automatic backups of data and configurations</li>
</ul>

<h3>Solution</h3>
<p class="left-align">Our staff was familiar with the company's existing systems having implemented them originally. We worked on new server hardware at each facility and installed all of the software components. From there we exported all of the Incuity components and imported them into VantagePoint, configured communications between FactoryTalk Historian and various PLCs and configured communications between VantagePoint and FactoryTalk Historian. </p>

<p class="left-align">Next we went through the existing Wonderware InSQL/Historian configuration and set up all of the tags to be imported into FactoryTalk Historian. Once imported we verified data was coming across correctly from the process.</p>

<p class="left-align">Finally we exported data from the existing Wonderware InSQL/Historian server and developed scripts to automatically import the data into FactoryTalk Historian.</p>

<p class="left-align">The client was then able to use the new VantagePoint and FactoryTalk Historian system to view new data and all data that had been collected on the old system with a seamless transition and was able to decommission and remove the old server at each facility.</p>