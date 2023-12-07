---
date: 2023-10-30
---
# SAT
**Input:** Given f in CNF with n variables and m clauses \
**Output:** Assignment satisfying f if one exists and no if no SAT exists.

## 2-SAT
Same but input $f$ has clauses of size $\leq$ 2.

You can solve the 2-SAT problem using the SCC algorithm.

For all unit clauses (clauses of size 1):
- satisfy it, call it a: so set $a_i=T$
- remove all clauses containing $a_i$, these are satisfied
- drop all occurrences of $\overline{a}$
- Let f' be new formula

In general for clause $(\alpha \land \beta)$, add edges $\overline{\alpha} \to \beta$ and $\overline{\beta} \to \alpha$.