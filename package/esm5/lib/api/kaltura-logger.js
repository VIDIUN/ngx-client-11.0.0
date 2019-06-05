/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var LogLevels = {
    info: 0,
    warn: 1,
    error: 2,
    none: 100,
};
export { LogLevels };
LogLevels[LogLevels.info] = 'info';
LogLevels[LogLevels.warn] = 'warn';
LogLevels[LogLevels.error] = 'error';
LogLevels[LogLevels.none] = 'none';
/** @type {?} */
export var LoggerSettings = {
    logLevel: LogLevels.warn
};
var KalturaLogger = /** @class */ (function () {
    function KalturaLogger(_name) {
        this._name = _name;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    KalturaLogger.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (LoggerSettings.logLevel <= LogLevels.warn) {
            console.warn("[kaltura-client/" + this._name + "]: " + message);
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KalturaLogger.prototype.info = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (LoggerSettings.logLevel <= LogLevels.info) {
            console.info("[kaltura-client/" + this._name + "]: " + message);
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KalturaLogger.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (LoggerSettings.logLevel <= LogLevels.error) {
            console.error("[kaltura-client/" + this._name + "]: " + message);
        }
    };
    return KalturaLogger;
}());
export { KalturaLogger };
if (false) {
    /** @type {?} */
    KalturaLogger.prototype._name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1sb2dnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdJLE9BQVE7SUFDUixPQUFRO0lBQ1IsUUFBUztJQUNULFNBQVU7OztvQkFIVixJQUFJO29CQUNKLElBQUk7b0JBQ0osS0FBSztvQkFDTCxJQUFJOztBQUdSLFdBQWEsY0FBYyxHQUFHO0lBQzFCLFFBQVEsRUFBRyxTQUFTLENBQUMsSUFBSTtDQUM1QixDQUFDO0FBRUYsSUFBQTtJQUVJLHVCQUFvQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtLQUVoQzs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKLFVBQUssT0FBZTtRQUVoQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQW1CLElBQUksQ0FBQyxLQUFLLFdBQU0sT0FBUyxDQUFDLENBQUM7U0FDOUQ7S0FDSjs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKLFVBQUssT0FBZTtRQUVoQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQW1CLElBQUksQ0FBQyxLQUFLLFdBQU0sT0FBUyxDQUFDLENBQUM7U0FDOUQ7S0FDSjs7Ozs7SUFFRCw2QkFBSzs7OztJQUFMLFVBQU0sT0FBZTtRQUVqQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDL0MsQ0FBQztZQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQW1CLElBQUksQ0FBQyxLQUFLLFdBQU0sT0FBUyxDQUFDLENBQUM7U0FDL0Q7S0FDSjt3QkF6Q0w7SUEwQ0MsQ0FBQTtBQTdCRCx5QkE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBlbnVtIExvZ0xldmVsc1xue1xuICAgIGluZm8gPSAwLFxuICAgIHdhcm4gPSAxLFxuICAgIGVycm9yID0gMixcbiAgICBub25lID0gMTAwXG59XG5cbmV4cG9ydCBjb25zdCBMb2dnZXJTZXR0aW5ncyA9IHtcbiAgICBsb2dMZXZlbCA6IExvZ0xldmVscy53YXJuXG59O1xuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxvZ2dlclxue1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZylcbiAgICB7XG4gICAgfVxuXG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAoTG9nZ2VyU2V0dGluZ3MubG9nTGV2ZWwgPD0gTG9nTGV2ZWxzLndhcm4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW2thbHR1cmEtY2xpZW50LyR7dGhpcy5fbmFtZX1dOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmIChMb2dnZXJTZXR0aW5ncy5sb2dMZXZlbCA8PSBMb2dMZXZlbHMuaW5mbylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBba2FsdHVyYS1jbGllbnQvJHt0aGlzLl9uYW1lfV06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmIChMb2dnZXJTZXR0aW5ncy5sb2dMZXZlbCA8PSBMb2dMZXZlbHMuZXJyb3IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtrYWx0dXJhLWNsaWVudC8ke3RoaXMuX25hbWV9XTogJHttZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19