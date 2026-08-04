---
title: "Survey and Questionnaire Data Coding Help — From Raw Responses to SPSS"
description: "Get help coding raw survey and questionnaire responses into a usable SPSS dataset — variable setup, Likert coding, and reverse-scoring."
h1: "Survey and Questionnaire Data Coding Help — From Raw Responses to SPSS"
headerImage: "/survey-questionnaire-data-coding-help.webp"
section: "core"
pillar: false
pathway: "Dissertation and Research Chapters"
priority: "medium"
bridgesTo:
  - "reliability-analysis-cronbachs-alpha-assignment-help"
  - "spss-data-analysis-help"
publishOrder: 52
draft: false
---

## What Is Survey and Questionnaire Data Coding?

Before any analysis can run, raw responses collected from Qualtrics, Google Forms, SurveyMonkey, or a paper survey have to become a properly structured SPSS dataset: with correctly named and labelled variables, numerically coded responses, and missing data handled deliberately rather than left to chance. This step happens before a single test is run, and mistakes made here quietly propagate into every result that follows.

## Setting Up Variables in SPSS Before You Import

Each survey item needs a corresponding SPSS variable with:

- A short, consistent **variable name** (SPSS names can't contain spaces, so use "satisfaction_1" rather than "How satisfied are you?")
- A full **variable label** carrying the actual question text, so output remains interpretable later
- The correct **Measure** setting (nominal, ordinal, or scale) in Variable View. This single setting controls which tests SPSS will even offer for that variable later, so getting it wrong silently blocks the right analysis
- **Value labels** for every coded category (e.g. 1 = "Strongly Disagree" through 5 = "Strongly Agree")

## Coding Likert-Scale and Categorical Responses

Likert-scale items are coded numerically (typically 1 through 5 or 1 through 7) with value labels attached so the numbers stay interpretable. Categorical (nominal) items (gender, department, yes/no responses) are coded with arbitrary numeric codes (e.g. 1 = Male, 2 = Female, 3 = Non-binary) purely for SPSS's benefit; the *Measure* setting for these should be **nominal**, not scale, so SPSS treats them appropriately.

## Reverse-Coding Negatively Worded Items

Many scales deliberately include negatively worded items ("I rarely feel confident in my abilities" on a confidence scale) to reduce response-pattern bias. Before computing a total or subscale score (and critically, **before running reliability analysis**), these items must be reverse-scored: on a 1–5 scale, a raw response of 1 becomes 5, 2 becomes 4, and so on (formula: (max + min) − original value). In SPSS, this is done via **Transform > Recode into Different Variables**, never overwriting the original item. Skipping this step is one of the most common reasons a Cronbach's alpha comes back unexpectedly low. See the full [reliability analysis guide](/reliability-analysis-cronbachs-alpha-assignment-help/) for how this feeds directly into that test.

## Handling Missing and Incomplete Responses

Survey platforms export incomplete responses in different ways: blank cells, a text placeholder, or a specific "skip" code. Before analysis:

- Decide on and apply a **consistent missing-value code** (e.g. 99) distinct from any valid response value, then declare it as **User-Missing** in Variable View so SPSS excludes it from calculations correctly
- Decide how to handle partially completed surveys: exclude the case entirely, or retain it for the items that were answered, depending on your analysis plan
- Document this decision, since committees and reviewers expect missing-data handling to be stated explicitly, not left implicit

## Importing From Qualtrics, Google Forms, and SurveyMonkey

Most survey platforms export to **.csv or .xlsx**, which SPSS reads via **File > Import Data > Excel/CSV**. After import, expect to do cleanup: platform-exported column headers usually become your variable names and need shortening, response text ("Strongly Agree") often needs converting to numeric codes if the platform didn't already export numeric values, and an extra header row (containing the full question text) is common and needs handling before the data imports cleanly.

Once your dataset is properly coded, you're ready to move into analysis. See the full [SPSS data analysis help](/spss-data-analysis-help/) guide for what comes next.
