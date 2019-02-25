# ⚠ This software is no longer maintained! ⚠

`linter-cppcheck` is no longer maintained, and should be considered deprecated.
We do no longer accept bug reports, feature requests or pull requests.

If you’d like to take over ownership of this project, please contact @biffen.

# linter-cppcheck

[![Build Status](https://img.shields.io/travis/Munkei/atom-linter-cppcheck.svg?style=flat-square)](https://travis-ci.org/Munkei/atom-linter-cppcheck)
[![License](https://img.shields.io/github/license/Munkei/atom-linter-cppcheck.svg?style=flat-square)](https://github.com/Munkei/atom-linter-cppcheck/blob/master/LICENSE.md)
[![Downloads](https://img.shields.io/apm/dm/linter-cppcheck.svg?style=flat-square)](https://atom.io/packages/linter-cppcheck)

---

A [linter] for [Atom] using [Cppcheck].

## Requirements

[Cppcheck] needs to be installed (or at least available). Its path can be
configured.

Without [Linter] this package is rather useless.

## Configuration

The package settings are available at: _Edit_ > _Preferences_ > _Packages_ >
_linter-cppcheck_

You can configure the location of the Cppcheck executable. The default is to
look for `cppcheck` in your `$PATH` environment variable. In most cases this
should ‘just work’.

**For Windows users:** Cppcheck’s executable is probably _not_ available as
`cppcheck` in your `%PATH%`. On Windows you will _most likely_ have to configure
the path yourself in the _Executable_ field (e.g.
`C:\Program Files\Cppcheck\cppcheck.exe`, but it may vary).

You can also configure which checks Cppcheck should perform. If you want to know
more about these checks please see [the Cppcheck Manual](PDF) or run `man cppcheck`.

## Acknowledgements

This package is really a tiny amount of glue between other great pieces of
software, namely the [Linter] package, the [atom-linter] module and — of course
— [Cppcheck].

[atom]: https://atom.io
[atom-linter]: https://www.npmjs.com/package/atom-linter
[cppcheck]: http://cppcheck.sourceforge.net
[the cppcheck manual]: http://cppcheck.sourceforge.net/manual.pdf
[linter]: https://atom.io/packages/linter

<!--
LocalWords:  linter cppcheck Cppcheck’s exe
 -->
