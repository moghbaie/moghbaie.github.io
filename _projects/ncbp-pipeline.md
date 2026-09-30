---
title: NCBP-pipeline
kind: code
order: 1
org: Rockefeller University · 2019
summary: >-
  Analysis pipeline for an affinity-capture interaction screen of the nuclear cap-binding proteins NCBP1, 2 and 3.
tags: [R, Proteomics, Interaction screening]
links:
  - label: View code on GitHub
    url: https://github.com/moghbaie/NCBP-pipeline
  - label: Data (PXD016038)
    url: https://proteomecentral.proteomexchange.org/cgi/GetDataset?ID=PXD016038
---

## What it does

Processes and analyzes mass-spec data from an interaction screen of **NCBP1, NCBP2 and NCBP3**, run across
multiple buffer conditions (varying salt, detergent and concentration) to see which interactions hold up.

## Data

Raw data are public on ProteomeXchange under identifier **PXD016038**.

## Repository layout

- `src/`: analysis code
- `data/`: input data
- `out/`: results

Part of my [protein interaction work at Rockefeller]({{ '/projects/protein-interaction-random-walks/' | relative_url }}).
