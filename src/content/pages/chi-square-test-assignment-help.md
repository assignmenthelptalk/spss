---
title: "Chi-Square Test Assignment Help — Crosstabs and SPSS Assumptions"
description: "Run a chi-square test in SPSS correctly — expected cell counts, Cramer's V effect size, and APA reporting, explained step by step."
h1: "Chi-Square Test Assignment Help — Crosstabs and SPSS Assumptions"
section: "core"
pillar: false
pathway: "Non-Parametric Tests"
priority: "high"
bridgesTo:
  - "spss-statistical-tests-explained"
publishOrder: 12
draft: false
---

## What Is the Chi-Square Test and When Do You Use It?

The chi-square test comes in two forms. The **goodness-of-fit** test checks whether one categorical variable matches an expected distribution. The **test of independence** — the version assigned far more often — checks whether two categorical variables are associated, such as gender and product preference, or treatment group and recovery status.

## The Assumption That Breaks Most Student Chi-Square Assignments

### Expected Cell Counts and When to Use Fisher's Exact Test Instead

Chi-square requires that no more than 20% of cells in your table have an **expected count below 5**, and no cell should have an expected count below 1. SPSS reports this automatically — check the footnote below the Chi-Square Tests table, which states how many cells have an expected count below 5.

If the assumption is violated, report **Fisher's Exact Test** instead of Pearson's Chi-Square — SPSS calculates this automatically for 2×2 tables.

## How to Run a Chi-Square Test in SPSS (Crosstabs, Step by Step)

1. Go to **Analyze > Descriptive Statistics > Crosstabs**.
2. Move one categorical variable into **Row(s)** and the other into **Column(s)**.
3. Click **Statistics**, then tick **Chi-square** and **Phi and Cramer's V**.
4. Click **Cells**, then tick **Observed**, **Expected**, and whichever percentages (row/column) make sense for your comparison.
5. Click **Continue**, then **OK**.

## How to Interpret Chi-Square Output

### Reading the Chi-Square Tests Table

Look at the **Pearson Chi-Square** row for your value, degrees of freedom [(rows − 1) × (columns − 1)], and **Asymptotic Significance (2-sided)** — your *p*-value. Check the table footnote first for the expected-count warning before trusting this row.

### Effect Size — Cramer's V and Phi

For a 2×2 table, report **phi (φ)**. For larger tables, report **Cramer's V**. Rough benchmarks: .1 small, .3 medium, .5 large.

## How to Report Chi-Square Results in APA Format

> A chi-square test of independence showed a significant association between treatment group and recovery status, χ²(1, *N* = 120) = 8.42, *p* = .004, *V* = .26.

## Chi-Square vs Other Tests: What If Your Data Doesn't Fit This Design?

### Chi-Square vs McNemar's Test vs Correlation

Chi-square assumes independent observations — if the same people were measured twice on a categorical outcome (before/after), you need McNemar's test instead. If both your variables are continuous rather than categorical, you need correlation, not chi-square. See the full [SPSS statistical test guide](/spss-statistical-tests-explained/) to confirm which test fits your design.

Need this test run and written up for your assignment? [Get SPSS assignment help](/get-started/).
