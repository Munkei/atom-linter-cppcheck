# linter-cppcheck #

[![Build Status](https://img.shields.io/travis/Munkei/atom-linter-cppcheck.svg?style=flat-square)](https://travis-ci.org/Munkei/atom-linter-cppcheck)
[![License](https://img.shields.io/github/license/Munkei/atom-linter-cppcheck.svg?style=flat-square)](https://github.com/Munkei/atom-linter-cppcheck/blob/master/LICENSE.md)
[![Downloads](https://img.shields.io/apm/dm/linter-cppcheck.svg?style=flat-square)](https://atom.io/packages/linter-cppcheck)

---

A [linter] for [Atom] using [Cppcheck].

## Requirements ##

[Cppcheck] needs to be installed (or at least available). Its path can be
configured.

Without [Linter] this package is rather useless.

## Configuration ##

The package settings are available at: *Edit* > *Preferences* > *Packages* >
*linter-cppcheck*

You can configure the location of the Cppcheck executable. The default is to
look for `cppcheck` in your `$PATH` environment variable. In most cases this
should ‘just work’.

**For Windows users:** Cppcheck’s executable is probably *not* available as
`cppcheck` in your `%PATH%`. On Windows you will *most likely* have to configure
the path yourself in the *Executable* field (e.g. `C:\Program
Files\Cppcheck\cppcheck.exe`, but it may vary).

You can also configure which checks Cppcheck should perform. If you want to know
more about these checks please see [the Cppcheck Manual] (PDF) or run `man
cppcheck`.

## Acknowledgements ##

This package is really a tiny amount of glue between other great pieces of
software, namely the [Linter] package, the [atom-linter] module and — of course
— [Cppcheck].

  [Atom]: https://atom.io

  [atom-linter]: https://www.npmjs.com/package/atom-linter

  [Cppcheck]: http://cppcheck.sourceforge.net

  [the Cppcheck Manual]: http://cppcheck.sourceforge.net/manual.pdf

  [Linter]: https://atom.io/packages/linter

<!--
LocalWords:  linter cppcheck Cppcheck’s exe
 -->
