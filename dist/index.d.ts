import * as Promise from 'bluebird';
import { Config } from './models';
export * from './unbundle';
export declare function bundle(inpConfig: Config, builderFactory?: any): Promise<any[]>;
export declare function depCache(bundleConfig: Config, builderFactory?: any): Promise<any[]>;
