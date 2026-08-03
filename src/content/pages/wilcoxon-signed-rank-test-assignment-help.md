---
title: "Wilcoxon Signed-Rank Test Assignment Help — Paired Non-Parametric SPSS Test"
description: "Learn how to run and interpret the Wilcoxon signed-rank test in SPSS as the non-parametric alternative to the paired samples t-test."
h1: "Wilcoxon Signed-Rank Test Assignment Help — Paired Non-Parametric SPSS Test"
section: "core"
pillar: false
pathway: "Non-Parametric Tests"
priority: "medium"
bridgesTo:
  - "spss-statistical-tests-explained"
  - "paired-samples-t-test-assignment-help"
publishOrder: 38
draft: false
---

## What Is the Wilcoxon Signed-Rank Test and When Do You Use It?

The Wilcoxon signed-rank test is the non-parametric alternative to the paired samples t-test. It compares two related measurements from the same subjects — a pre/post design or matched pairs — using **ranked differences** rather than assuming those differences are normally distributed. Use it when your paired-difference scores are ordinal, or clearly violate the paired t-test's normality assumption.

If your difference scores are reasonably normal, use the paired samples t-test instead — it has more power when its assumption holds.

## Assumptions You Must Check Before Running It in SPSS

- **The two measurements must be genuinely paired** — same subject, or a deliberately matched pair.
- **The dependent variable should be at least ordinal.**
- No normality assumption on the differences — that's the reason to use this test instead of the paired t-test.
- The distribution of differences should be reasonably **symmetric** for the "median difference" interpretation to be clean, though the test itself remains valid more broadly.

## How to Run It in SPSS (Step by Step)

1. Go to **Analyze > Nonparametric Tests > Legacy Dialogs > 2 Related Samples**.
2. Select your two related variables and move them into **Test Pair(s) List** as Variable 1 and Variable 2.
3. Ensure **Wilcoxon** is checked under Test Type, then click **OK**.

## How to Interpret the Output

1. Check the **Ranks** table first — it shows how many pairs had **negative ranks** (decreased), **positive ranks** (increased), and **ties** (no change). This tells you the direction of change before you even look at significance.
2. In the **Test Statistics** table, read the **Z-value** and **Asymp. Sig. (2-tailed)** — your *p*-value.
3. Calculate effect size as *r* = Z ÷ √N (where N is the number of pairs, not individuals): 0.1 small, 0.3 medium, 0.5 large.

## How to Report the Results in APA Format

> A Wilcoxon signed-rank test showed that post-intervention scores were significantly higher than pre-intervention scores, with 24 positive ranks, 4 negative ranks, and 2 ties, *Z* = −3.41, *p* < .001, *r* = .48.

## Wilcoxon Signed-Rank vs Paired Samples T-Test: Understanding the Difference

Both compare the same subjects measured twice. The paired t-test compares the **mean difference** and assumes it's normally distributed; the Wilcoxon test compares **ranked differences** and makes no such assumption. With a small sample and visibly skewed or ordinal difference scores, Wilcoxon is the safer default — the paired t-test's normality assumption is harder to defend with few observations.

Not sure which one your data needs? See the full [SPSS statistical test guide](/spss-statistical-tests-explained/), or [get help](/get-started/) with this specific assignment.
