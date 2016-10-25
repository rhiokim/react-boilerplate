/* global nw */
import minimist from 'minimist';

nw.argv = minimist((nw.process.argv.slice(2)));
