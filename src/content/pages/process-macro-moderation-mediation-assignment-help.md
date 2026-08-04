---
title: "Moderation and Mediation Analysis Assignment Help — PROCESS Macro in SPSS"
description: "Run moderation or mediation analysis in SPSS with the PROCESS macro — model selection, bootstrapping, and APA reporting."
h1: "Moderation and Mediation Analysis Assignment Help — PROCESS Macro in SPSS"
headerImage: "/moderation-mediation-process.webp"
section: "core"
pillar: false
pathway: "Correlation and Regression"
priority: "high"
bridgesTo:
  - "multiple-linear-regression-assignment-help"
  - "spss-statistical-tests-explained"
publishOrder: 20
draft: false
---

## Mediation vs Moderation: The Distinction That Decides Everything Else

**Mediation** explains *how* or *why* a relationship exists: it tests whether a third variable (the mediator) carries the effect of X on Y. **Moderation** tests *when* or *for whom* a relationship is stronger or weaker: it asks whether a third variable changes the strength of the X→Y relationship. Get this distinction right first: it determines which PROCESS model and which output you need next.

## How to Install the PROCESS Macro in SPSS

PROCESS is a free SPSS add-on written by Andrew F. Hayes. It is **not** built into base SPSS, which surprises most students the first time they look for it in the Analyze menu.

1. Download PROCESS from processmacro.org.
2. Install it via **Extensions > Utilities > Install Custom Dialog** (or the Extension Hub, depending on your SPSS version), selecting the downloaded `.spd` file.
3. Once installed, it appears under **Analyze > Regression > PROCESS**.

## Choosing the Right PROCESS Model Number

### Model 4 (Simple Mediation) and Model 1 (Simple Moderation)

- **Model 4** = one mediator: tests whether X's effect on Y runs through M.
- **Model 1** = one moderator: tests whether the X→Y relationship's strength depends on a third variable.

More complex designs (multiple mediators, moderated mediation) use higher model numbers. Most coursework and early-dissertation assignments only need Model 1 or Model 4.

## Interpreting Mediation Output: The Bootstrapped Indirect Effect

PROCESS reports the indirect effect (X → M → Y) with a **95% bootstrapped confidence interval** (BootLLCI to BootULCI, based on a default of 5,000 resamples). The effect is significant if this interval does **not** contain zero. This bootstrapping approach has largely replaced the older Sobel test.

## Interpreting Moderation Output: Interaction Terms and Simple Slopes

If the X × moderator interaction term is significant, probe it further:

### Simple Slopes Analysis and the Johnson-Neyman Technique

**Simple slopes analysis** shows the effect of X on Y at low (−1 SD), mean, and high (+1 SD) levels of the moderator. For continuous moderators, the **Johnson-Neyman technique** identifies the exact range of moderator values where the X→Y effect is statistically significant, more precise than relying on three arbitrary cut-points.

## How to Report Moderation and Mediation Results in APA Format

> The indirect effect of workload on burnout through perceived control was significant, *b* = 0.18, *SE* = 0.07, 95% CI [0.06, 0.34].

> The support × workload interaction significantly predicted burnout, *b* = 0.21, *t*(116) = 2.34, *p* = .021.

## Is PROCESS Overkill for Your Assignment?

### PROCESS vs Multiple Regression vs SEM

If your assignment only asks whether two variables relate, plain [multiple regression](/multiple-linear-regression-assignment-help/) is the correct and simpler tool. PROCESS is specifically for testing a third variable's explanatory (mediator) or moderating role. Genuinely complex multi-mediator, multi-moderator theoretical models may call for full structural equation modelling instead. See the full [SPSS statistical test guide](/spss-statistical-tests-explained/) to confirm which fits your design.

Need this analysis run and reported for your assignment or dissertation? [Get SPSS assignment help](/get-started/).
