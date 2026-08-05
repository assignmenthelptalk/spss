---
title: "Importing and Cleaning Data in SPSS"
description: "Import Excel or CSV data into SPSS and clean it properly — missing values, outlier detection, and duplicate cases, explained step by step."
h1: "Importing and Cleaning Data in SPSS"
headerImage: "/spss-data-analysis-help.webp"
section: "outer"
pillar: false
pathway: "SPSS Software Mechanics"
priority: "high"
bridgesTo:
  - "spss-data-analysis-help"
  - "survey-questionnaire-data-coding-help"
publishOrder: 66
draft: false
---

## Importing Data from Excel and CSV into SPSS

Go to **File > Import Data > Excel** (or **CSV Data**), select your file, and confirm whether the first row contains variable names. SPSS will attempt to guess each variable's type and Measure setting from the imported values, and it guesses wrong often enough that checking Variable View immediately after import is not optional.

## Identifying and Handling Missing Values

SPSS distinguishes two kinds of missing data, and conflating them is a common source of incorrect results:

- **System-missing**: a truly empty cell, shown as a period in Data View
- **User-defined missing**: a real value (like 99 or -1) that you've told SPSS to treat as missing, declared in the Missing column of Variable View

Before analysing anything, decide how you'll handle missing cases: exclude them listwise (drop the whole case if any variable is missing), exclude pairwise (only drop a case from the specific calculation using the missing variable), or impute a value. Document whichever choice you make, since it affects your final sample size and should be reported.

## Detecting Outliers Before You Analyse Anything

Outliers can distort means, inflate or deflate correlations, and violate the normality and homogeneity assumptions most tests depend on. Two standard approaches:

- **Boxplots** (Analyze > Descriptive Statistics > Explore, request boxplots): visually flags cases beyond 1.5 times the interquartile range
- **Standardised (z) scores**: convert your variable to z-scores (Analyze > Descriptive Statistics > Descriptives, check "Save standardized values"), then flag cases beyond roughly ±3.29

An outlier isn't automatically wrong data; it's a case that needs a decision, checked as a data-entry error, a genuine extreme value, or something worth analysing with and without it to see if it changes your conclusion.

## Finding and Removing Duplicate Cases

Duplicate cases are a particular risk in survey data, where the same respondent may have submitted more than once. Use **Data > Identify Duplicate Cases**, specify the variables that should uniquely identify a respondent (an ID number, or a combination of demographic fields), and review flagged duplicates before deciding whether to remove them.

See the full [SPSS data analysis help](/spss-data-analysis-help/) guide for how cleaning fits into the complete analysis workflow, or the [survey and questionnaire data coding guide](/survey-questionnaire-data-coding-help/) if your data is coming directly from a survey platform.

Need your dataset cleaned and prepared before analysis? [Get SPSS assignment help](/get-started/).
