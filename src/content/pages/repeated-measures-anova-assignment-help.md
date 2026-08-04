---
title: "Repeated Measures ANOVA Assignment Help — Sphericity and SPSS Steps"
description: "Learn how to run a repeated measures ANOVA in SPSS, handle the sphericity assumption correctly, and report the result in APA format."
h1: "Repeated Measures ANOVA Assignment Help — Sphericity and SPSS Steps"
headerImage: "/repeated-measures-anova-assignment-help.webp"
section: "core"
pillar: false
pathway: "Parametric Tests — T-Tests and ANOVA Family"
priority: "medium"
bridgesTo:
  - "spss-statistical-tests-explained"
publishOrder: 31
draft: false
---

## What Is Repeated Measures ANOVA and When Do You Use It?

Repeated measures ANOVA compares three or more related measurements taken from the same subjects: for example, scores measured at baseline, one month, and three months into an intervention. Use it when you have one continuous dependent variable measured at three or more time points (or conditions) on the same people.

If you only have two related measurements, use the paired samples t-test instead. If you have three or more *independent* groups instead of repeated measures on the same people, use one-way ANOVA instead.

## Assumptions You Must Check Before Running It in SPSS

- **Sphericity.** The variances of the differences between all pairs of related measurements should be roughly equal. SPSS tests this automatically with **Mauchly's Test of Sphericity**, produced alongside your main output.
- **If Mauchly's test is significant (*p* < .05), sphericity is violated**: don't read the standard "Sphericity Assumed" row. Instead use a corrected row: **Greenhouse-Geisser** (more conservative, generally preferred) or **Huynh-Feldt** (used when Greenhouse-Geisser's epsilon estimate is above .75).
- **Normality** of the dependent variable at each time point.

## How to Run It in SPSS (Step by Step)

1. Go to **Analyze > General Linear Model > Repeated Measures**.
2. In the Repeated Measures Define Factor(s) dialog, name your **Within-Subject Factor** (e.g. "Time") and enter the **Number of Levels** (e.g. 3 for baseline/1-month/3-month).
3. Click **Add**, then **Define**.
4. Move your three (or more) related variables into the **Within-Subjects Variables** box, in order.
5. Click **Options**, request **Descriptive statistics** and **Estimates of effect size**, then **Continue > OK**.

## How to Interpret the Output

1. Check **Mauchly's Test of Sphericity** first. If *p* > .05, sphericity holds: read the "Sphericity Assumed" row in the Tests of Within-Subjects Effects table. If *p* ≤ .05, read the Greenhouse-Geisser row instead.
2. From the correct row, read the **F-value**, **df** (note these are often non-integer after a Greenhouse-Geisser correction), and **Sig.**
3. Report **partial eta-squared** as the effect size.
4. If the overall test is significant, run **post-hoc pairwise comparisons with Bonferroni correction** (available directly in the Options dialog) to identify which specific time points differ.

## How to Report the Results in APA Format

> Mauchly's test indicated that the assumption of sphericity had been violated, χ²(2) = 8.91, *p* = .012, so degrees of freedom were corrected using Greenhouse-Geisser estimates (ε = .85). There was a significant effect of time on anxiety scores, *F*(1.70, 49.30) = 14.62, *p* < .001, partial η² = .34.

## Repeated Measures ANOVA vs One-Way ANOVA: Understanding the Difference

Repeated measures ANOVA compares the *same* subjects across three or more time points or conditions. One-way ANOVA compares three or more *different, independent* groups. Treating repeated measurements as if they were independent groups (running a one-way ANOVA on repeated data) ignores the correlation between measurements from the same person and gives an incorrect result.

Not sure which one your design needs? See the full [SPSS statistical test guide](/spss-statistical-tests-explained/), or [get help](/get-started/) with this specific assignment.
