export declare enum LogLevels {
    info = 0,
    warn = 1,
    error = 2,
    none = 100,
}
export declare const LoggerSettings: {
    logLevel: LogLevels;
};
export declare class KalturaLogger {
    private _name;
    constructor(_name: string);
    warn(message: string): void;
    info(message: string): void;
    error(message: string): void;
}
