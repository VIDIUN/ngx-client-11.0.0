/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolder } from './KalturaRemoteDropFolder';
/**
 * @record
 */
export function KalturaFtpDropFolderArgs() { }
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.host;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.port;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.username;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.password;
var KalturaFtpDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFtpDropFolder, _super);
    function KalturaFtpDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFtpDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFtpDropFolder' },
            host: { type: 's' },
            port: { type: 'n' },
            username: { type: 's' },
            password: { type: 's' }
        });
        return result;
    };
    return KalturaFtpDropFolder;
}(KalturaRemoteDropFolder));
export { KalturaFtpDropFolder };
if (false) {
    /** @type {?} */
    KalturaFtpDropFolder.prototype.host;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.port;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.username;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.password;
}
typesMappingStorage['KalturaFtpDropFolder'] = KalturaFtpDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVqRyxJQUFBO0lBQTBDLGdEQUF1QjtJQU83RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkF0Q0w7RUFZMEMsdUJBQXVCLEVBMkJoRSxDQUFBO0FBM0JELGdDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyLCBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnRwRHJvcEZvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJBcmdzIHtcbiAgICBob3N0PyA6IHN0cmluZztcblx0cG9ydD8gOiBudW1iZXI7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRnRwRHJvcEZvbGRlciBleHRlbmRzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyIHtcblxuICAgIGhvc3QgOiBzdHJpbmc7XG5cdHBvcnQgOiBudW1iZXI7XG5cdHVzZXJuYW1lIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZ0cERyb3BGb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZ0cERyb3BGb2xkZXInIH0sXG5cdFx0XHRcdGhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRnRwRHJvcEZvbGRlciddID0gS2FsdHVyYUZ0cERyb3BGb2xkZXI7Il19