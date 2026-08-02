---
title: "Simple Linear Regression Assignment Help — SPSS Output Explained"
description: "Run and interpret simple linear regression in SPSS — assumptions, coefficients, R², and APA reporting, explained step by step."
h1: "Simple Linear Regression Assignment Help — SPSS Output Explained"
section: "core"
pillar: false
pathway: "Correlation and Regression"
priority: "high"
bridgesTo:
  - "spss-statistical-tests-explained"
  - "pearson-correlation-assignment-help"
  - "multiple-linear-regression-assignment-help"
publishOrder: 14
draft: false
---

## What Is Simple Linear Regression and When Do You Use It?

Simple linear regression predicts one continuous outcome from one predictor variable. Where [Pearson correlation](/pearson-correlation-assignment-help/) describes *whether* two variables relate, regression goes further — it produces an equation that predicts the outcome and tells you how much it changes per unit of the predictor.

## Assumptions You Must Check Before Running It in SPSS

### Linearity, Independence, and Homoscedasticity

Check linearity with a scatterplot of the predictor against the outcome. Check independence of residuals with the **Durbin-Watson statistic** — values near 2 indicate independence; values well outside 1.5–2.5 suggest a problem. Check homoscedasticity with a residual scatterplot, which should show an even, random spread rather than a funnel shape.

### Normally Distributed Residuals

Check this with a P-P plot of the regression standardised residuals — points should sit close to the diagonal line — or a histogram of the residuals.

## How to Run Simple Linear Regression in SPSS (Step by Step)

1. Go to **Analyze > Regression > Linear**.
2. Move your outcome variable into **Dependent**.
3. Move your predictor into **Independent(s)**.
4. Click **Statistics**, then tick **Durbin-Watson** and **Confidence intervals**.
5. Click **Plots**, add *ZRESID* against *ZPRED* to check homoscedasticity, and tick **Normal probability plot**.
6. Click **Continue**, then **OK**.

## How to Interpret Simple Linear Regression Output

### Model Summary Table — R and R²

**R²** is the proportion of variance in the outcome explained by the predictor, expressed as a percentage.

### ANOVA Table — Is the Model Significant Overall?

Check the **F**-statistic and its *p*-value first — this tells you whether the model explains a significant amount of variance before you look at the individual coefficient.

### Coefficients Table — Reading B and Its Significance

**B** is the raw-unit change in the outcome for each 1-unit increase in the predictor. Its *t*-value and *p*-value test whether that slope differs significantly from zero.

## How to Report Simple Linear Regression Results in APA Format

> The model significantly predicted exam score, *F*(1, 58) = 14.2, *p* < .001, *R*² = .20, *b* = 0.45, *t*(58) = 3.77, *p* < .001.

## What If You Have More Than One Predictor?

### Simple Regression vs Correlation vs Multiple Regression

If your research question involves several predictors at once, you need [multiple linear regression](/multiple-linear-regression-assignment-help/), which extends everything on this page and adds a multicollinearity check. If you only need to describe a relationship rather than predict a value, [Pearson correlation](/pearson-correlation-assignment-help/) is the simpler and correct tool.

Need this analysis run for your assignment? [Get SPSS assignment help](/get-started/).
