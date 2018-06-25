import { Config, ConfigBody, ConfigHeader } from './models';
export declare function getOutFileName(source: string, fileName: string, rev: boolean): string;
export declare function validateConfig(config: Config): void;
export declare function getHTMLMinOpts(opts: any): any;
export declare function getCSSMinOpts(opts: any): any;
export declare function getBundleConfig(bundleCfg: ConfigBody, bundleName: string, config: Config): any;
export declare function getHtmlImportBundleConfig(bundleCfg: ConfigBody, bundleName: string, config: ConfigHeader): any;
export declare function ensureDefaults(config: Config): {
    baseURL: string;
    builderCfg: {};
    bundles: {};
    configPath: string;
    force: boolean;
    injectionConfigPath: string;
} & ConfigHeader & {
    bundles: {
        [name: string]: ConfigBody;
    };
};
