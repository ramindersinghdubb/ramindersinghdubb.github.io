---
title: acspsuedo
repo: http://github.com/ramindersinghdubb/acspsuedo
---

`acspsuedo` is a Python package that offers high-level functions, classes, and objects to navigate the United States Census Bureau's American Community Survey (ACS) API.

As listed on the package's [`README.md`](https://github.com/ramindersinghdubb/acspsuedo/blob/main/README.md), this package supports the following features:

<blockquote class="blockquote">
<ul>
    <li>Running data queries to the Bureau, with support for concurrent application for users interested in ETL/ELT processes</li>
    <li>Querying metadata on particular variable and/or table information offered by any one of the ACS datasets (cf. `acspsuedo.datasets`)</li>
    <li>Querying metadata on the types of geographic scopes at which ACS demographic data may be available at (such as at the state-level, the county-level, and so forth)</li>
    <li>Enabling users with Census Bureau API keys to run multiple data queries in a session</li>
    <li>Continuous monitoring of the Census Bureau API, in order to ensure the most up-to-date information on all ACS datasets</li>
    <li>Caching the Bureau's Topologically Integerated Geographic Encoding and Referencing (TIGER) shapefiles, which are designed to provide geographic representations to support maps and/or geographic analysis</li>
</ul>
</blockquote>

For interested developers, the coverage report is hosted on the repository: [https://ramindersinghdubb.github.io/acspsuedo/](https://ramindersinghdubb.github.io/acspsuedo/). Unit tests are conducted on a weekly basis to provide developers and users alike information on how well the package is up-to-date with any potential Census Bureau's API changes. You may also consult the package's [`CHANGELOG.md`](https://github.com/ramindersinghdubb/acspsuedo/blob/main/CHANGELOG.md) to revisit any releases and/or request new features you would like to see implemented.


The illustration below is a cursory showcase of the package's abilities. Data was taken from the ACS 5-Year Detailed Table B25058 'Median Contract Rents' at the census tract level for the state of California. Note that `matplotlib` was used to in conjunction with the package to create the data visualization.


<figure class="general-fig">
    <img src="{{"/assets/images/project_acspsuedo.png" | relative_url}}"
         alt="California Rental Market, 2023"
         style="width: 60%;"
    >
    <figcaption>Contract Rents in California, 2023</figcaption>
</figure>