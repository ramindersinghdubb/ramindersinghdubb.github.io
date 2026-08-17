---
title: Long Beach Medallion Lakehouse
repo: http://github.com/ramindersinghdubb/Long-Beach-Medallion-Lakehouse
---

The Long Beach Medallion Lakehouse is a Databricks-native Lakehouse that utilizes the [City of Long Beach's REST API](https://data.longbeach.gov/api-console/explore/v2.1/?flg=en-us) in order to ingest data on various municipal services and administrative bodies into a medallion (bronze-silver-gold) architecture.

A detailed step-by-step tutorial on set-up is listed in the project's [`README.md`](https://github.com/ramindersinghdubb/Long-Beach-Medallion-Lakehouse/blob/main/README.md) file. <strong>Note that a Databricks account and an Amazon Web Services (AWS) account are needed!</strong> This project makes use of an AWS S3 bucket to manage Databricks Unity Catalog resources.

Job orchestrations are conducted on a scheduled basis, with watermarking/timestamping to ensure incremental processing of incoming datum. As described in the `README.md` file,

<blockquote class="blockquote">
This platform is based around the industry-standard medallion architecture approach to data warehousing, with:

<ul>
    <li>A stateful bronze layer for ingesting raw data from the APIs,</li>
    <li>A stateless silver layer for de-duplication, enrichment, & normalization, and</li>
    <li>A stateless gold layer for production-ready analytics and downstream use-cases</li>
</ul>

...

<br><br>

<i style="color:var(--color-fg-light);">What makes the bronze layer "stateful" here is a table that tracks each executed job's status and examines the latest date of date for which we have successfully extracted. By tracking incremental updates to the platform, we enable the subsequent job orchestrations to focus solely on new intake data (hence the incremental updates).</i>
</blockquote>

How users wish to specify job orchestrations, including scheduling, the location of production/development catalogs, workspace location, and general settings, can be tabulated in the Declarative Automation Bundle located in the [`databricks.yml`](https://github.com/ramindersinghdubb/Long-Beach-Medallion-Lakehouse/blob/main/databricks.yml) file and its constituent components within the [`resources/`](https://github.com/ramindersinghdubb/Long-Beach-Medallion-Lakehouse/tree/main/resources) folder.

In the illustration below, the job orchestration ingests the roughly 56,000 datum from the API endpoint corresponding to the [Long Beach Animal Shelter](https://data.longbeach.gov/explore/assets/animal-shelter-intakes-and-outcomes/), which conducts intakes and outgoing assessment of household pets, stray animals, and wildlife. Note that the bronze-layer queries (HTTP GET requests) are ingested via the Python software development kit (SDK) while data validation takes place with the Databricks pipeline update. As bronze layer data is handled via the SDK, the two layers below illustrate the silver and gold layers respectively.

<figure class="general-fig">
    <img src="{{"/assets/images/project_LB-Lakehouse.png" | relative_url}}"
         alt="Example: Long Beach Animal Shelter Endpoint"
    >
    <figcaption>Example: Pipeline update for Long Beach Animal Shelter Endpoint</figcaption>
</figure>

