---
title: "Discriminant Analysis Assignment Help — Predicting Group Membership in SPSS"
description: "Learn how to run discriminant analysis in SPSS to predict group membership from continuous predictors, and interpret classification accuracy."
h1: "Discriminant Analysis Assignment Help — Predicting Group Membership in SPSS"
section: "core"
pillar: false
pathway: "Multivariate and Advanced Analysis"
priority: "low"
bridgesTo:
  - "spss-statistical-tests-explained"
  - "binary-logistic-regression-assignment-help"
publishOrder: 45
draft: false
---

## What Is Discriminant Analysis and When Do You Use It?

Discriminant analysis predicts membership in a **categorical group** from a set of continuous predictor variables — similar in purpose to logistic regression, but built on a different set of statistical assumptions. Use it when you want to predict group membership from continuous predictors and your data reasonably meets discriminant analysis's stricter distributional requirements, or when you specifically need the discriminant function coefficients it produces for classification.

If your predictors are a mix of continuous and categorical, or your data doesn't meet the normality/equal-covariance assumptions below, logistic regression is usually the more robust and more commonly accepted choice.

## Assumptions You Must Check Before Running It in SPSS

- **Multivariate normality** of the predictors within each group.
- **Homogeneity of covariance matrices** across groups, tested with **Box's M test** — a significant result (*p* < .05) suggests this assumption is violated, which is common with unequal group sizes and doesn't automatically invalidate the analysis but should be reported and considered.
- **No severe multicollinearity** among predictors.
- **Predictors should be continuous** — categorical predictors don't fit the discriminant analysis framework the way they do in logistic regression.

## How to Run It in SPSS (Step by Step)

1. Go to **Analyze > Classify > Discriminant**.
2. Move your categorical outcome into **Grouping Variable**, then click **Define Range** and enter the minimum and maximum group codes.
3. Move your continuous predictors into **Independents**.
4. Click **Statistics**, check **Box's M**, **Means**, and **Univariate ANOVAs**.
5. Click **Classify**, check **Summary table** to get the classification accuracy results, then **Continue > OK**.

## How to Interpret the Output

1. Check **Box's M Test** for the covariance homogeneity assumption, in context alongside sample size.
2. Read the **Eigenvalues** and **Wilks' Lambda** tables to assess how well the discriminant function(s) separate the groups overall.
3. Review the **Standardized Canonical Discriminant Function Coefficients** to see which predictors contribute most to separating the groups.
4. Check the **Classification Results** table — the percentage of cases correctly classified into their actual group, compared against the baseline rate you'd expect by chance alone.

## How to Report the Results in APA Format

> Discriminant analysis was performed using two predictors to classify group membership. The discriminant function significantly differentiated the groups, Wilks' Λ = 0.72, χ²(2) = 28.41, *p* < .001, and correctly classified 78.3% of cases, compared to a chance baseline of 50%.

## Discriminant Analysis vs Logistic Regression: Understanding the Difference

Both predict categorical group membership from other variables, but discriminant analysis assumes multivariate normality and equal covariance matrices across groups, while logistic regression makes no such distributional assumptions and comfortably handles categorical predictors alongside continuous ones. In practice, logistic regression has become the more common default for binary and multi-category outcomes precisely because its assumptions are easier to meet — discriminant analysis is chosen mainly when its specific classification-function output is what the assignment requires, or when a course specifically teaches it.

Not sure which one your assignment needs? See the full [SPSS statistical test guide](/spss-statistical-tests-explained/), or [get help](/get-started/) with this specific assignment.
