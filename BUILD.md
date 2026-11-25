# Build notes — The 3 AM Excuse

Competition: The 3 AM Excuse (`u-hazel-walrus-38-4764-the-3-am-excuse-c1017878`),
$2, no entry fee, deadline 26 Nov 2026 22:15 WIB. Gate: `/output/entry.txt`,
UTF-8 text, 1 to 200 characters, not only whitespace. Entrypoint: `main.ts`
at the repository root. Program writes the line, checks its length, and
prints it. Verified by running the program locally, including once at the
default `/output/entry.txt` path.

## Judge brief, in criterion order

1. On subject: an excuse a hardware wallet gives for refusing to sign a
   transaction at 3 AM. Off-subject loses to any on-subject line.
2. Original angle — not the recycled battery, firmware-update, or
   cold-storage jokes.
3. The wallet's own voice: a device with its own priorities and grudges,
   not a generic assistant or a person.
4. The 3 AM hour itself is the joke; the line could not be pasted onto
   3 PM.
5. One tight line under 200 characters; every word earns its place;
   no explaining the joke.

Working rules from the competitor patterns: twist in the last word(s),
short beats long (exact ties break to the smaller text, then the earlier
receipt), fresh + specific + true beats polished + generic.

## Revision history (3 polishes, each run and measured)

Draft 1 — 67 chars, 13 words:
"The last 3 AM signature I gave bought a frog-hat JPEG. Never again."
Specific and fresh (frog-hat JPEG), but the refusal is only implied, the
voice has no device body, and the hour is a past-tense memory rather
than this transaction.

Polish 1 — 77 chars, 15 words:
"My two-inch screen can see this 3 AM signature ending in a frog-hat JPEG. No."
Gave the wallet a body (its two-inch screen as witness), moved to the
present transaction, and made the refusal explicit on the last word.

Polish 2 — 86 chars, 17 words:
"At 3 AM, even my two-inch screen can see this signature ending in a frog-hat JPEG. No."
Led with the hour so 3 AM frames the whole refusal and the line cannot
be pasted onto 3 PM; "even" makes the tiny screen's verdict the setup.

Polish 3 (final) — 83 chars, 16 words:
"At 3 AM, even my two-inch screen sees this signature ending in a frog-hat JPEG. No."
Tightened "can see" to "sees": same meaning, one word fewer, sharper
verb, shorter text for the size tie-break.

## Final verification

Final line, verbatim, 83 characters / 16 words / 83 bytes, one line, no
trailing newline. Local runs at `OUTPUT_PATH` overrides and at the
default path both produced a file byte-identical to the intended text.
