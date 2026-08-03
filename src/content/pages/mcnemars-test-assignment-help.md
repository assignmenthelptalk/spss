---
title: "McNemar's Test Assignment Help — Paired Categorical Data in SPSS"
description: "Learn how to run and interpret McNemar's test in SPSS for paired binary or nominal data, and how to report the result in APA format."
h1: "McNemar's Test Assignment Help — Paired Categorical Data in SPSS"
section: "core"
pillar: false
pathway: "Non-Parametric Tests"
priority: "low"
bridgesTo:
  - "spss-statistical-tests-explained"
  - "chi-square-test-assignment-help"
publishOrder: 42
draft: false
---

## What Is McNemar's Test and When Do You Use It?

McNemar's test evaluates whether there's a significant change in a **binary (or nominal) categorical variable** measured twice on the same subjects — for example, whether the proportion of people answering "yes" to a question changes from before to after an intervention. Use it when you have paired categorical (typically binary) data from the same subjects at two time points, not two independent samples.

If your two measurements come from independent groups rather than the same subjects, use the regular chi-square test of independence instead.

## Assumptions You Must Check Before Running It in SPSS

- **The two measurements must be paired** — same subjects, measured twice.
- **The variable must be binary (or nominal) categorical**, not continuous.
- The test focuses specifically on **discordant pairs** — cases that changed category between the two measurements (yes→no or no→yes). Cases that stayed the same category contribute nothing to the test statistic.

## How to Run It in SPSS (Step by Step)

1. Go to **Analyze > Descriptive Statistics > Crosstabs**.
2. Move your "before" variable into **Row(s)** and your "after" variable into **Column(s)**.
3. Click **Statistics**, check **McNemar**, then **Continue > OK**.

## How to Interpret the Output

1. In the crosstab, note the **discordant cells** — the counts of cases that changed from one category to the other in each direction.
2. In the **Chi-Square Tests** table, read the **McNemar Test** row's **Exact Sig. (2-sided)** value — your *p*-value.
3. A significant result means the proportion of cases in one category changed significantly between the two measurements; check the discordant cell counts to see which direction dominated.

## How to Report the Results in APA Format

> A McNemar's test showed a significant change in smoking status following the intervention, with 18 participants quitting and only 3 starting, χ²(1, *N* = 100) = 10.29, *p* = .001.

## McNemar's Test vs Chi-Square Test of Independence: Understanding the Difference

The regular chi-square test of independence compares categorical data across two **independent** groups. McNemar's test compares the **same subjects'** categorical responses measured twice. Using the standard chi-square test on paired data ignores the fact that the two measurements aren't independent of each other, which distorts the test statistic — McNemar's test is built specifically to handle that dependency by focusing only on cases that changed category.

Not sure which one your data needs? See the full [SPSS statistical test guide](/spss-statistical-tests-explained/), or [get help](/get-started/) with this specific assignment.
