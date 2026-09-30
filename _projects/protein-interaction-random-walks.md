---
title: Predicting protein interactions with random walks
kind: project
order: 4
org: Rockefeller University · 2018 — 2023
summary: >-
  Random-walk-with-restart models over protein interaction networks that reached 85% prediction accuracy.
tags: [Network biology, Proteomics, R, Python]
---

## The problem

Proteomics screens produce far more candidate interactions than a lab can validate at the bench. The
question: which candidates are most worth testing?

## Approach

- **Random walk with restart** over protein interaction networks, scoring candidates by how strongly they
  connect to known proteins of interest.
- **Python and R pipelines** for proteomics, genomics and mass-spec data spanning **tens of thousands of
  samples** and **10+ collaborating labs**.

## Impact

The models reached **85% prediction accuracy** and **cut candidate screening time by 60%**.

## Related code

- [NCBP-pipeline]({{ '/projects/ncbp-pipeline/' | relative_url }}): interaction screen analysis
- [L1_CRC_IP_MS]({{ '/projects/l1-crc-ip-ms/' | relative_url }}): LINE-1 interactome in tumor samples

<!-- Add more here: a network figure, the method in a few equations, related publications. -->
