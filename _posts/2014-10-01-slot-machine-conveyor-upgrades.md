---
layout: post
title: "Casino Gaming Manufacturing Facility Conveyor System Upgrades"
description: "Upgraded the conveyor system at a leading casino gaming manufacturing facility increasing producivity and efficiency."
tags: ["Case Study", "Discrete Manufacturing", "Process Optimization", "Process Analytics", "ERP Integration", "Database Management", "PLC", "HMI"]
permalink: casino-gaming-conveyor-upgrade
---

<h3>Summary</h3>
<p class="left-align">An in-house integrator at a large casino gaming machine manufacturer had implemented a conveyor control system prior to retiring from the company. After his departure and near constant supervision of the system, productivity dropped due to in-process machines being sent to incorrect locations, a holding and re-work area not functioning correctly and various other issues. Our staff was brought in to bring the system up to industry standards and bring productivity to desired levels.</p>

<h3>Benefits</h3>
<ul class="left-align">
	<li>After upgrades the system met industry standards for logic and safety</li>
	<li>The control system was fully integrated into the company's ERP system enabling more precise and traceable scheduling and inventory management</li>
	<li>The number of machines being sent to incorrect locations was reduced from 50+ per shift to less than one per day on average</li>
	<li>The amount of time spent moving machines back to the front of the line and manually directing them went from full-time to essentially zero</li>
	<li>System upgrades found 1/3 of the pallets used on the line had incorrectly installed RFID tags</li>
</ul>

<h3>Technology</h3>
<ul class="left-align">
	<li>FactoryTalk View SE</li>
	<li>FactoryTalk Transaction Manager</li>
	<li>Allen Bradley CompactLogix PLCs</li>
	<li>Allen Bradley PanelView Plus</li>
	<li>SQL Server</li>
	<li>SAP ERP</li>
	<li>RFID tags and scanners</li>
</ul>

<h3>Solution</h3>
<p class="left-align">Our staff worked with the in-house integrator prior to his departure to understand his design methodology, current issues with the system and future plans for further development. We familiarized ourselves with the existing code base and met with the system's stakeholders to formulate a plan moving forward.</p>

<p class="left-align">Over the course of a few evenings when the line was down we began resolving issues with the Transaction Manager configuration passing incorrect data from the PLC to SQL Server. This exposed several race conditions in the logic preventing some machines from being sent to technician workstations and instead being sent to the end of the line as if they were complete machines. We resolved the race conditions and implemented similar changes to a machine holding/re-work re-entry area at the end of the line. During continued operation of the system we noticed some pallets consistently being sent to incorrect locations on the line and further research indicated the RFID tags on the pallets were incorrectly installed. Resolving this issue along with the logic changes reduced runaway machines from 50+ per shift to less than one a day on average.</p>

<p class="left-align">Once all of the logic issues on the line were resolved we completed integration with the company's SAP ERP system to integrate scheduling and inventory data into the control system to better utilize the technicians on the line. </p>