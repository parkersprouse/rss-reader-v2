#!/usr/bin/env node
const { rmSync } = require('fs');
const { join } = require('path');

try {
  rmSync(
    join('public', 'assets.json'), { recursive: true, force: true });
  rmSync(
    join('public', 'assets'), { recursive: true, force: true });
  rmSync(
    join('apps', 'web', 'assets', 'dist', 'javascripts'), { recursive: true, force: true });
  rmSync(
    join('apps', 'web', 'assets', 'dist', 'stylesheets'), { recursive: true, force: true });
} catch(e) {
  console.error('Failed to clean asset files');
  console.error(e);
}
