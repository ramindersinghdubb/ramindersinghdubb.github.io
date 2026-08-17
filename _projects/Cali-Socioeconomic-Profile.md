---
title: California Socioeconomic Profile
repo: http://github.com/ramindersinghdubb/California-Socioeconomic-Profile
website: https://cali-socioeconomic-profile-mivjomecwq-uc.a.run.app/
---

<figure class="general-fig">
    <img src="{{"/assets/images/project_CASEP.png" | relative_url}}"
         alt="California Socioeconomic Profile Dashboard (version 0.1.1)"
    >
    <figcaption>California Socioeconomic Profile Dashboard</figcaption>
</figure>


The California Socioeconomic Profile is a public dashboard that visualizes key socioeconomic information for census tracts across California cities. Measures include, but are not limited to, rents, unemployment estimates, population estimates, health insurance coverage, food stamps/EBT recipiency, and median pay. These measures, where applicable, are also tabulated against social status: racial status, sexual orientation, age, disability status, or educational attainment.

Socioeconomic data is taken from the [United States Census Bureau's American Community Survey](https://www.census.gov/programs-surveys/acs), an ongoing annual survey since 2005 that intakes data from communities across the United States and its territorial possessions for a number of key social, economic, demographic, and housing information.

As part of this project, a custom Python package was created to peruse and download data directly from the Census Bureau's API and Topologically Integrated Geographic Encoding and Referencing (TIGER) shapefile database. This package is [`acspsuedo`]({% link _projects/acspsuedo.md %}). Developers are free to modify the package as desired.

Note: Owing to unavailability of data at smaller scopes (e.g. census tract, block group), data is only readily available for 2009 and onward. Note as well that dataset changes, inclusions, exclusions, and general availability introduce discontinuities that cause inconsistencies of data for:
- A given city across multiple years,
- A given year across multiple cities, or
- A combination of the two

These and other nuances are duly noted in the [`CHANGELOG.md`](https://github.com/ramindersinghdubb/California-Socioeconomic-Profile/blob/main/.github/CHANGELOG.md) of this project.