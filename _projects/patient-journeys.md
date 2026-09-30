---
title: Reconstructing patient journeys from partial data
kind: project
order: 1
org: Kontakt.io · 2025 — now
summary: >-
  Inferring how patients move through three hospitals and 12 clinics when nobody tracks them directly.
tags: [Graphs, Probabilistic models, Process mining, Kafka]
---

## The problem

Hospitals rarely track a patient's path through their visit end to end. What exists is operational data
that is incomplete and scattered — events from different systems, with gaps in between. The goal was to
reconstruct patient workflows across **three hospitals and 12 clinics** from that partial picture, and find
where time and capacity are being lost.

## Approach

- **Graph-based inference** to connect fragmentary events into plausible patient paths.
- **Probabilistic models running on live Kafka event streams**, so estimates update as the day unfolds.
- **Process mining** on the reconstructed flows to locate bottlenecks.

## Impact

The analysis surfaced opportunities **projected to lift prime-time room utilization by 20%** and
**cut patient wait times by 15 minutes**.

<!-- Add more here: a diagram of the pipeline, an example of a reconstructed flow, lessons learned. -->
