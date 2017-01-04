'use babel';
'use strict';

/* jshint
 browser: false,
 curly: true,
 esnext: true,
 strict: true
 */
/* jslint
 es6: true,
 fudge: true,
 maxlen: 80,
 single: true,
 -W097
 */
/* global
 atom,
 console
 */

import {
  exec,
  parse,
}
from 'atom-linter';

export default {

  activate: (state) => {},

  config: {
    enableInformation: {
      description: 'Enable information messages.',
      default: true,
      type: 'boolean',
    },
    enableMissingInclude: {
      description: 'Warn if there are missing includes.',
      default: false,
      type: 'boolean',
    },
    enablePerformance: {
      description: 'Enable performance messages.',
      default: true,
      type: 'boolean',
    },
    enablePortability: {
      description: 'Enable portability messages.',
      default: true,
      type: 'boolean',
    },
    enableStyle: {
      description: 'Enable all coding style checks. All messages with the ' +
        'severities *style*, *performance* and *portability* are enabled.',
      default: true,
      type: 'boolean',
    },
    enableUnusedFunction: {
      description: 'Check for unused functions.',
      default: false,
      type: 'boolean',
    },
    enableWarning: {
      description: 'Enable warning messages.',
      default: true,
      type: 'boolean',
    },
    executable: {
      default: 'cppcheck',
      type: 'string',
    },
    force: {
      description: '`--force`',
      default: false,
      type: 'boolean',
    },
    inconclusive: {
      default: false,
      description: 'Include inconclusive warnings.  (`--inconclusive`)',
      type: 'boolean',
    },
    inlineSuppressions: {
      default: false,
      description: 'Enable inline suppressions.  (`--inline-suppr`)',
      type: 'boolean',
    },
    suppress: {
      default: [],
      description: 'Suppress specific warnings. See Cppcheck\'s ' +
        'documentation for details on the format. (`--suppress`)',
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },

  provideLinter: () => {
    const regex =
            '\\[(?<file>.+?):(?:(?<line>\\d+)\\]|(?<lineStart>\\d+)\\]' +
            ' -> \\[.+?:(?<lineEnd>\\d+)\\]): ' +
            '\\((?<type>\\w+)\\) (?<message>.*)';

    const lint = (textEditor) => {
      const args = [];

      // --enable
      const enables = [];
      for (var enable of ['Information',
                          'MissingInclude',
                          'Performance',
                          'Portability',
                          'Style',
                          'UnusedFunction',
                          'Warning']) {
        if (atom.config.get(`linter-cppcheck.enable${enable}`)) {
          enables.push(enable.replace(/^./, (match) => {
            return match.toLowerCase();
          }));
        }
      }
      if (enables.length) {
        args.push('--enable=' + enables.join(','));
      }

      // --force
      if (atom.config.get('linter-cppcheck.force')) {
        args.push('--force');
      }

      // --inconclusive
      if (atom.config.get('linter-cppcheck.inconclusive')) {
        args.push('--inconclusive');
      }

      // --inline-suppr
      if (atom.config.get('linter-cppcheck.inlineSuppressions')) {
        args.push('--inline-suppr');
      }

      // --language
      const grammar = textEditor.getGrammar().name;
      switch (grammar) {
        case 'C':
          args.push('--language=c');
          break;

        case 'C++':
        case 'C++14':
          args.push('--language=c++');
          break;

        default:
          console.warn(
            `[linter-cppcheck] Unrecognised grammar ‘${grammar}’`
          );
          break;
      }

      // --suppress
      for (var suppress of atom.config.get('linter-cppcheck.suppress') || []) {
        args.push(`--suppress=${suppress}`);
      }

      // <file>
      args.push(textEditor.getPath());

      const executable = atom.config.get('linter-cppcheck.executable');
      console.debug(`[linter-cppcheck] Executing '${executable}' with args:` +
                    ` ${JSON.stringify(args, undefined, 2)}`);

      return exec(
        executable,
        args,
        {
          stream: 'both',
          throwOnStderr: false,
        }
      ).then((output) => {
        if (output.exitCode != 0) {
          atom.notifications.addError(
            'Cppcheck failed',
            {
              buttons: [
                {
                  className: 'btn icon icon-gear',
                  onDidClick: ()=>{
                    atom.workspace.open("atom://config/packages/linter-cppcheck");
                  },
                  text: 'Open settings',
                }
              ],
              detail: output.stdout,
              dismissable: true,
              icon: 'alert',
            }
          );
        }

        return parse(output.stderr, regex);
      });
    };

    const provider = {
      grammarScopes: [
        'source.c',
        'source.cpp'
      ],
      lint: lint,
      lintOnFly: false,
      name: 'Cppcheck',
      scope: 'file',
    };

    return provider;
  },

  serialize: () => {},

};
