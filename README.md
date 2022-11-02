# Overview

Endpoint function (CMS Serverless) reimplementation of the CCA-based solution for the fictional language inference integration.

## Requirements
- You must have the [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli) installed and set up.
- You must have access to developer projects (access beta under "CRM Development Tools").
- Sales Enterprise or Service Enterprise are the license requirement, could be easily adapted to work with CMS Enterprise

## Usage
- Make POST request with "contact_id" and "comment" parameters, e.g. {"comment": "This is a sample text","contact_id": 1479351}
- returns 200 if it successfully stamped the hs_language property
