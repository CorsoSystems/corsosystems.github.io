---
layout: post
title: "Wonderware Historian Implementation for Environmental Impact Reporting"
description: "Implemented Wonderware Historian to collect process and emissions data to automatically generate reports for state environmental impact reporting requirements."
tags: ["Case Study", "Mining"]
permalink: gold-mine-wonderware-historian
---

<h3>Summary</h3>
A small mine in Nevada required automatic pollution reporting and data collection to meet EPA regulations.

<h3>Benefits</h3>
<ul>
	<li>Automated daily reporting of pollutant use and discharge directly to the State Department of Environmental Protection</li>
	<li>Reporting functionality allowing regulators or mine personnel to review reports from any day after the system was implemented</li>
	<li>Process data now stored in a Historian allowing for better data analysis and tracking</li>
</ul>

<h3>Technology</h3>
<ul>
	<li>Wonderware Historian</li>
	<li>Wonderware Historian Client</li>
	<li>SQL Server</li>
</ul>

<h3>Solution</h3>
A small gold mine outside of Elko Nevada was required by the State Department of Environmental Protection to submit daily reports detailing pollutant use and discharge along with some process data to verify the readings.

We installed and configured Wonderware Historian to collect and store process data along with Wonderware Historian Client to populate an Excel report at the end of each day. When the report was created we ran a SQL Server stored procedure to print the Excel report to PDF and upload it to the Department of Environmental Protection's FTP server.