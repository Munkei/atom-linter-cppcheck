# linter-cppcheck Change Log #

All notable changes to this project will be documented in this file. This
project adheres to [Semantic Versioning], and this file to [Keep a CHANGELOG].

## 0.2.2 - 2017-01-17 ##

### Fixed ###

*   Fixed some deprecated CSS selectors. Atom shouldn't warn about deprecations
    anymore. #8

## 0.2.1 - 2017-01-04 ##

### Added ###

*   The [Cppcheck] command and its arguments are now logged (debug level) before
    execution. #7

*   If [Cppcheck] execution fails, a notification is now shown. #7

### Fixed ###

*   Made sure ‘unusedFunction’ and ‘missingInclude’ checks actually work. #7

## 0.2.0 - 2016-02-11 ##

### Added ###

*   Support for ‘C++14’ grammar (that [language-cpp14] uses). #1

### Fixed ###

*   Removed a warning about `suppress`'s default value.

## 0.1.1 - 2015-12-19 ##

### Fixed ###

*   Removed unused dependency and code.

## 0.1.0 - 2015-12-12 ##

Initial release.

  [Cppcheck]: http://cppcheck.sourceforge.net

  [Keep a CHANGELOG]: http://keepachangelog.com

  [Semantic Versioning]: http://semver.org

  [language-cpp14]: https://atom.io/packages/language-cpp14
