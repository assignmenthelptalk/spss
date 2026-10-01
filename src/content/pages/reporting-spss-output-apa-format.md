---
title: "Reporting SPSS Output in APA Format"
description: "The APA rules for reporting SPSS statistical output — table formatting, rounding conventions, and exact reporting templates for every major test."
h1: "Reporting SPSS Output in APA Format — Tables, Templates, and Rules"
headerImage: "/reporting-spss-output-apa-format.webp"
section: "outer"
pillar: false
pathway: "SPSS Software Mechanics"
priority: "high"
contextualBorderQuestion: "Do you need the general APA rules, or the exact reporting sentence for a specific test?"
bridgesTo:
  - "dissertation-chapter-4-results-help"
publishOrder: 27
draft: false
---

## Why APA-Formatted SPSS Reporting Matters

SPSS output tables aren't written for a reader. They're written for you, the analyst. Turning them into an APA-formatted report is a translation step, and it's one most courses and committees grade almost as closely as the analysis itself. A statistically correct test with a badly reported result loses marks just as reliably as the reverse. [SPSSassignment.help](/) supports students with exactly this, every day.

This page covers the general rules that apply across every test. For the exact reporting sentence for your specific test, see the "How to Report … Results in APA Format" section on that test's own page, for example the one on the [Mann-Whitney U test page](/mann-whitney-u-test-assignment-help/). Start from the [SPSS statistical test guide](/spss-statistical-tests-explained/) if you're not sure which one you need.

## General APA Rules for Statistical Reporting

A few rules apply almost everywhere in APA statistical reporting:

- **Italicise statistical symbols.** *t*, *F*, *p*, *r*, *M*, *SD*, *d*, and similar symbols are always italicised, never plain text.
- **Round to two decimal places** for most statistics (means, standard deviations, test statistics, effect sizes), unless your field or instructor specifies otherwise.
- **Report exact *p*-values** to three decimal places (e.g. *p* = .032), except when *p* is very small. Then report *p* < .001 rather than a string of zeros.
- **Never write "p = .000."** SPSS displays this when the exact value rounds below .001; report it as *p* < .001 instead.
- **Report degrees of freedom** in parentheses immediately after the test statistic: *t*(58), *F*(2, 87), χ²(1).
- **Lead with the finding, support with the statistics.** APA reporting states what was found first, then backs it with the numbers, not the reverse.

## APA Table Formatting Rules for SPSS Output

If you're building a table rather than reporting in-text, APA table style differs from SPSS's default output formatting in several specific ways:

- **No vertical lines.** APA tables use horizontal rules only: a line under the title/header row, and one at the bottom. SPSS's default gridded output has to be reformatted, not pasted in directly.
- **Table number and title above the table**, title in italics, in title case or sentence case per your style guide.
- **Column headers** should be short and use standard abbreviations (*M*, *SD*, *n*, *df*) rather than SPSS's verbose labels.
- **Decimal alignment.** Numbers in a column should align on the decimal point.
- **Notes below the table**, not beside it: used for abbreviation definitions or significance-level flags (*\*p* < .05).

Most students paste SPSS output directly into a report; most instructors mark that down. Rebuilding the table in Word or your reference manager's table tool, using only the numbers you actually need, is the difference between output and reporting.

## Reporting Templates by Test Type

The exact sentence structure changes by test family, but the pattern is consistent: state the finding, then the statistics that support it:

**T-test:**
> An independent samples t-test found that treatment-group scores (*M* = 78.4, *SD* = 6.2) were significantly higher than control-group scores (*M* = 71.9, *SD* = 7.1), *t*(58) = 3.72, *p* < .001, *d* = 0.97.

**ANOVA:**
> A one-way ANOVA showed a significant effect of group on outcome scores, *F*(2, 87) = 5.14, *p* = .008, partial η² = .11.

**Correlation:**
> There was a moderate positive correlation between the two variables, *r*(98) = .42, *p* < .001.

**Regression:**
> The regression model significantly predicted the outcome, *F*(3, 96) = 12.87, *p* < .001, *R*² = .29. Predictor A was a significant positive predictor (*B* = 0.45, *SE* = 0.11, β = .38, *p* < .001).

**Chi-square:**
> There was a significant association between the two categorical variables, χ²(1, *N* = 150) = 8.02, *p* = .005, φ = .23.

Every individual test page on this site includes this same template filled in for that test's specific statistics. See the [SPSS statistical test guide](/spss-statistical-tests-explained/) to find yours.

## How to Report Descriptive Statistics: Mean, SD, Standard Error, and Range

Descriptive statistics come before any test in a results section, and they follow their own conventions:

- **Mean and standard deviation:** report both together, in that order, to two decimals: *M* = 4.52, *SD* = 1.13. Inside parentheses, separate them with a comma: (*M* = 4.52, *SD* = 1.13).
- **Standard error:** is standard error italicised in APA? Yes. *SE* is a statistical symbol, so it is italicised just like *M* and *SD*: *M* = 4.52, *SE* = 0.11. Don't swap it in for *SD*; they answer different questions (spread of the data vs precision of the mean).
- **Range:** give the minimum and maximum, either as "ages ranged from 18 to 45 years" or in brackets: *M* = 24.3, *SD* = 4.1, range = 18–45. The word "range" is not a symbol, so it is not italicised.
- **Counts and percentages:** use *n* for a subgroup and *N* for the whole sample: 50 of 80 participants (62.5%), or *n* = 50.
- **Leading zeros:** drop the zero for statistics that cannot exceed 1 (*p* = .032, *r* = .42, β = .38, *R*² = .29) and keep it for those that can (*M* = 0.45, *B* = 0.45, *d* = 0.97, *SD* = 0.62).

## APA Statistical Notation Cheat Sheet

| Symbol | Meaning | Italic? |
| :-- | :-- | :-- |
| *M*, *SD*, *SE*, *Mdn* | Mean, standard deviation, standard error, median | Yes |
| *n*, *N* | Subgroup sample size, total sample size | Yes |
| *t*, *F*, *U*, *Z*, *H* | Test statistics | Yes |
| *p* | Probability (significance) | Yes |
| *r*, *d*, *R*² | Correlation, Cohen's *d*, variance explained | Yes |
| *B*, *SE B* | Unstandardised regression coefficient and its standard error | Yes |
| β | Standardised regression coefficient | No (Greek) |
| χ², η², φ | Chi-square, eta-squared, phi | No (Greek) |

The rule underneath the table: Latin-letter statistical symbols are italic, Greek letters are not.

## How to Report Regression Results in APA Format

Regression reporting has two layers: the overall model, then each predictor. In text, state the model fit first (*F*, degrees of freedom, *p*, *R*², adjusted *R*²), then the predictors that mattered:

> A multiple linear regression predicted exam score from study hours and attendance. The model was significant, *F*(2, 97) = 18.42, *p* < .001, *R*² = .28, adjusted *R*² = .26. Study hours was a significant predictor (*B* = 1.84, *SE* = 0.39, β = .41, *t* = 4.72, *p* < .001, 95% CI [1.07, 2.61]), but attendance was not (*B* = 0.21, *SE* = 0.15, β = .12, *t* = 1.40, *p* = .164).

If you have more than two predictors, put the coefficients in a table instead, with one row per predictor and columns for *B*, *SE B*, β, *t*, *p*, and the 95% confidence interval. For a hierarchical model, add a row of Δ*R*² and its *F* change for each block. The full walkthrough, including reading the SPSS tables these numbers come from, is on the [multiple linear regression page](/multiple-linear-regression-assignment-help/).

## How to Report a Mann-Whitney U Test in APA Format

Non-parametric tests report medians, not means, and a rank-based test statistic. For a Mann-Whitney U test, give the median for each group, then *U*, *Z*, *p*, and an effect size *r*:

> A Mann-Whitney U test indicated that satisfaction was significantly higher in the treatment group (*Mdn* = 8) than in the control group (*Mdn* = 6), *U* = 312.50, *Z* = −2.87, *p* = .004, *r* = .32.

SPSS does not print *r*, so you calculate it as |*Z*| ÷ √*N*; the [Mann-Whitney U test page](/mann-whitney-u-test-assignment-help/) shows the working. The same pattern applies to the Wilcoxon signed-rank test and the Kruskal-Wallis test:

> A Wilcoxon signed-rank test showed that post-intervention scores were significantly higher than pre-intervention scores, *Z* = −3.41, *p* < .001, *r* = .48.

> A Kruskal-Wallis *H* test showed a significant difference across the three teaching methods, *H*(2) = 9.84, *p* = .007, with Bonferroni-corrected pairwise comparisons identifying which groups differed.

## How to Cite SPSS in APA Format

Many instructors and journals expect you to cite the software you used. Use the version number from **Help > About** in SPSS and the year that version was released:

> IBM Corp. (year). *IBM SPSS Statistics for Windows* (Version XX.0) [Computer software]. IBM Corp.

In text, cite it as (IBM Corp., year), or name it in your methods section: "Analyses were conducted using IBM SPSS Statistics (Version XX.0)." Swap "for Windows" for "for macOS" if that is what you use. Check your own style guide first, since some courses only want the citation in the methods section and not in the reference list.

## Common APA Reporting Mistakes to Avoid

- Reporting only the *p*-value ("the result was significant") without the test statistic, degrees of freedom, or effect size
- Writing *p* = .000 instead of *p* < .001
- Adding a leading zero to *p*, *r*, or β (write .032, not 0.032)
- Using *SE* and *SD* interchangeably, or leaving *SE* in plain text
- Leaving statistical symbols in plain (non-italic) text
- Pasting raw SPSS gridlines into a report instead of reformatting to APA table style
- Confusing statistical significance with practical importance: a significant result with a tiny effect size still needs that effect size reported and discussed, not omitted

If this reporting step is for a dissertation results chapter specifically, see the full [SPSS dissertation Chapter 4 results guide](/dissertation-chapter-4-results-help/) for how these templates fit into the larger chapter structure.
