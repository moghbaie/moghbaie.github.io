---
title: Which AI labs depend most on a single chip-supply firm?
kind: project
order: 1
org: Ensly Labs LLC · 2026
summary: >-
  Nearly all US AI labs' compute runs through one company, TSMC, even for labs that buy from four different chip makers.
tags: [Supply chains, Networks, Pre-registration, Uncertainty]
links:
  - label: Read the report
    url: /ai-lab-chip-dependence/
  - label: Pre-registered plan
    url: /ai-lab-chip-dependence/plan.html
---

## The question

Every AI lab's compute passes through a short chain of firms: a chip designer, a chip factory, a memory maker and a
packager. If one of those firms stopped, how much of each lab's compute would go with it? The study asks this lab by lab
for 8 US-aligned and 7 Chinese labs, building on Haddy Alchaer's analysis of the semiconductor supply chain.

## What it found

- Buying from more chip makers doesn't spread the risk: whichever chip a US-aligned lab buys, it is made and packaged by TSMC.
- Memory is the one step that's spread out: losing the largest memory maker would cost these labs a large share of their compute, but not all of it.
- Labs differ mainly in their second-biggest risk: Nvidia for most, Google's TPU for Google DeepMind, Trainium for Amazon.

## How

A network model in which a chip needs a factory *and* memory *and* packaging, with every share given a likely range and
the whole analysis re-run across 1,000 alternative estimates. The questions, measures and decision rules were registered
before any data was collected.
