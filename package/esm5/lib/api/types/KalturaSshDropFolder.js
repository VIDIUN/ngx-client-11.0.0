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
export function KalturaSshDropFolderArgs() { }
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.host;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.port;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.username;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.password;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshDropFolderArgs.prototype.passPhrase;
var KalturaSshDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSshDropFolder, _super);
    function KalturaSshDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSshDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSshDropFolder' },
            host: { type: 's' },
            port: { type: 'n' },
            username: { type: 's' },
            password: { type: 's' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            passPhrase: { type: 's' }
        });
        return result;
    };
    return KalturaSshDropFolder;
}(KalturaRemoteDropFolder));
export { KalturaSshDropFolder };
if (false) {
    /** @type {?} */
    KalturaSshDropFolder.prototype.host;
    /** @type {?} */
    KalturaSshDropFolder.prototype.port;
    /** @type {?} */
    KalturaSshDropFolder.prototype.username;
    /** @type {?} */
    KalturaSshDropFolder.prototype.password;
    /** @type {?} */
    KalturaSshDropFolder.prototype.privateKey;
    /** @type {?} */
    KalturaSshDropFolder.prototype.publicKey;
    /** @type {?} */
    KalturaSshDropFolder.prototype.passPhrase;
}
typesMappingStorage['KalturaSshDropFolder'] = KalturaSshDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaERyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTc2hEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFqRyxJQUFBO0lBQTBDLGdEQUF1QjtJQVU3RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkEvQ0w7RUFlMEMsdUJBQXVCLEVBaUNoRSxDQUFBO0FBakNELGdDQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyLCBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3NoRHJvcEZvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJBcmdzIHtcbiAgICBob3N0PyA6IHN0cmluZztcblx0cG9ydD8gOiBudW1iZXI7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRwcml2YXRlS2V5PyA6IHN0cmluZztcblx0cHVibGljS2V5PyA6IHN0cmluZztcblx0cGFzc1BocmFzZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTc2hEcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXIge1xuXG4gICAgaG9zdCA6IHN0cmluZztcblx0cG9ydCA6IG51bWJlcjtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRwcml2YXRlS2V5IDogc3RyaW5nO1xuXHRwdWJsaWNLZXkgOiBzdHJpbmc7XG5cdHBhc3NQaHJhc2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTc2hEcm9wRm9sZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTc2hEcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpdmF0ZUtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdWJsaWNLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc1BocmFzZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3NoRHJvcEZvbGRlciddID0gS2FsdHVyYVNzaERyb3BGb2xkZXI7Il19