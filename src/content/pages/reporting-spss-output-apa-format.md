---
title: "Reporting SPSS Output in APA Format — Tables, Templates, and Rules"
description: "The APA rules for reporting SPSS statistical output — table formatting, rounding conventions, and exact reporting templates for every major test."
h1: "Reporting SPSS Output in APA Format — Tables, Templates, and Rules"
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

SPSS output tables aren't written for a reader — they're written for you, the analyst. Turning them into an APA-formatted report is a translation step, and it's one most courses and committees grade almost as closely as the analysis itself. A statistically correct test with a badly reported result loses marks just as reliably as the reverse.

This page covers the general rules that apply across every test. For the exact reporting sentence for your specific test, see the "How to Report the Results in APA Format" section on that test's own page — start from the [SPSS statistical test guide](/spss-statistical-tests-explained/) if you're not sure which one you need.

## General APA Rules for Statistical Reporting

A few rules apply almost everywhere in APA statistical reporting:

- **Italicise statistical symbols.** *t*, *F*, *p*, *r*, *M*, *SD*, *d*, and similar symbols are always italicised, never plain text.
- **Round to two decimal places** for most statistics (means, standard deviations, test statistics, effect sizes), unless your field or instructor specifies otherwise.
- **Report exact *p*-values** to three decimal places (e.g. *p* = .032), except when *p* is very small — then report *p* < .001 rather than a string of zeros.
- **Never write "p = .000."** SPSS displays this when the exact value rounds below .001; report it as *p* < .001 instead.
- **Report degrees of freedom** in parentheses immediately after the test statistic: *t*(58), *F*(2, 87), χ²(1).
- **Lead with the finding, support with the statistics.** APA reporting states what was found first, then backs it with the numbers — not the reverse.

## APA Table Formatting Rules for SPSS Output

If you're building a table rather than reporting in-text, APA table style differs from SPSS's default output formatting in several specific ways:

- **No vertical lines.** APA tables use horizontal rules only — a line under the title/header row, and one at the bottom. SPSS's default gridded output has to be reformatted, not pasted in directly.
- **Table number and title above the table**, title in italics, in title case or sentence case per your style guide.
- **Column headers** should be short and use standard abbreviations (*M*, *SD*, *n*, *df*) rather than SPSS's verbose labels.
- **Decimal alignment.** Numbers in a column should align on the decimal point.
- **Notes below the table**, not beside it — used for abbreviation definitions or significance-level flags (*\*p* < .05).

Most students paste SPSS output directly into a report; most instructors mark that down. Rebuilding the table in Word or your reference manager's table tool, using only the numbers you actually need, is the difference between output and reporting.

## Reporting Templates by Test Type

The exact sentence structure changes by test family, but the pattern is consistent — state the finding, then the statistics that support it:

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

Every individual test page on this site includes this same template filled in for that test's specific statistics — see the [SPSS statistical test guide](/spss-statistical-tests-explained/) to find yours.

## Common APA Reporting Mistakes to Avoid

- Reporting only the *p*-value ("the result was significant") without the test statistic, degrees of freedom, or effect size
- Writing *p* = .000 instead of *p* < .001
- Leaving statistical symbols in plain (non-italic) text
- Pasting raw SPSS gridlines into a report instead of reformatting to APA table style
- Confusing statistical significance with practical importance — a significant result with a tiny effect size still needs that effect size reported and discussed, not omitted

If this reporting step is for a dissertation results chapter specifically, see the full [SPSS dissertation Chapter 4 results guide](/dissertation-chapter-4-results-help/) for how these templates fit into the larger chapter structure.
