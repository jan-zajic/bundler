import * as Promise from 'bluebird';
import * as bundler from './bundler';
import * as hitb from './html-import-template-bundler';
import { Config }  from './models';
import {
  ensureDefaults,
  getBundleConfig,
  validateConfig,
  getHtmlImportBundleConfig,
} from './utils';

export * from './unbundle';

export function bundle(inpConfig: Config, builderFactory?) {
  let tasks: Promise<any>[] = [];
  let config = ensureDefaults(inpConfig);
  validateConfig(config);

  Object.keys(config.bundles)
    .forEach(key => {
      let cfg = config.bundles[key];
      if (cfg.skip) {
        return;
      }
      if (cfg.htmlimport) {
        tasks.push(hitb.bundle(getHtmlImportBundleConfig(cfg, key, config)));
      } else {
        tasks.push(bundler.bundle(getBundleConfig(cfg, key, config), builderFactory));
      }
    });

  return Promise.all(tasks);
}

export function depCache(bundleConfig: Config, builderFactory?) {
  let tasks: Promise<any>[] = [];
  let config = ensureDefaults(bundleConfig);
  validateConfig(config);

  let bundles = config.bundles;
  Object.keys(bundles)
    .forEach(key => {
      let cfg = bundles[key];

      if (cfg.skip) {
        return;
      }
      if (cfg.htmlimport) {
        return;
      }
      tasks.push(bundler.depCache(getBundleConfig(cfg, key, config), builderFactory));
    });

  return Promise.all(tasks);
}
