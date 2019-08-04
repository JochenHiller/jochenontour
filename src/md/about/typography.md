---
path: "/typography"
date: "1970-01-01"
title: "Typography"
type: "typography"
---

# Overview

See also https://gist.github.com/brandonkal/81aef71276a54536951c0f205797999c

# Text samples

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Bold text**

_Italic text_

**Bold and _Italic_**

~~Strike through~~

# Lists

1. First ordered list item
2. Another item
   * Unordered sub-list (needs to be aligned on level of higher item)
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list (needs to be aligned on level of higher item)
  
4. And another item.

   Some text that should be aligned with the above item.

Separator needed here to break list

* Unordered list can use asterisks
- Or minuses
+ Or pluses

# Links

[I'm an inline-style link](https://www.google.com)

I am a http link: http://www.google.com

Only [link text itself] does **NOT** work, even not with http included [http://www.google.com]

# Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

* TODO: tables does not look nice up-to-now, borders are missing

# Code

Some Markdown code:

```md
# Headline 1
```

Some Java code:

```java
public static void main();
```

Some Markdown code:

```javascript
function x()
```

* TODO: does not look very nice up-to-now

# Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to

* TODO: does not look nice, should be inside a box

# References

Here is Ref #1 [^1] with some text

Here is Ref #2 [^2] with some text

## Photo samples

### Single photo

<rehype-image src="../dogsledding-2018/day-05/cover.jpg"><center>Unglaubliche Landschaft</center></rehype-image>

### Photo composition

<photo-composition>
<rehype-image src="../dogsledding-2018/day-05/IMG_0825.JPG"><center>Kamilla und Trond Åge mit norwegischer Flagge vor dem Zelt</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0829.JPG"><center>die Hunde am frühen Morgen</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0837.JPG"><center>Richard kurz vor dem Zeltabbau</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0843.JPG"><center>Die Hunde müssen noch vor die Schlitten gespannt werden</center></rehype-image>
</photo-composition>


## Video samples

Some text

<!--
<video src="notused">
<rehype-image src="../dogsledding-2018/day-05/IMG_0825.JPG"><center>Kamilla und Trond Åge mit norwegischer Flagge vor dem Zelt</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0829.JPG"><center>die Hunde am frühen Morgen</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0837.JPG"><center>Richard kurz vor dem Zeltabbau</center></rehype-image>
<rehype-image src="../dogsledding-2018/day-05/IMG_0843.JPG"><center>Die Hunde müssen noch vor die Schlitten gespannt werden</center></rehype-image>
</video>
-->

<center>

`youtube: https://youtu.be/j2AiBwFdqZk`
### Caption for video
</center>

# Headline 1
## Headline 2
### Headline 3
### Headline 4
#### Headline 6
##### Headline 6

# References

[^1]: Ref#1 

[^2]: Ref#2
