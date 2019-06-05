/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
/**
 * @record
 */
export function KalturaWebexDropFolderFileArgs() { }
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.recordingId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.webexHostId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.description;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.confId;
/** @type {?|undefined} */
KalturaWebexDropFolderFileArgs.prototype.contentUrl;
var KalturaWebexDropFolderFile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWebexDropFolderFile, _super);
    function KalturaWebexDropFolderFile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWebexDropFolderFile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWebexDropFolderFile' },
            recordingId: { type: 'n' },
            webexHostId: { type: 's' },
            description: { type: 's' },
            confId: { type: 's' },
            contentUrl: { type: 's' }
        });
        return result;
    };
    return KalturaWebexDropFolderFile;
}(KalturaDropFolderFile));
export { KalturaWebexDropFolderFile };
if (false) {
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.recordingId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.webexHostId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.description;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.confId;
    /** @type {?} */
    KalturaWebexDropFolderFile.prototype.contentUrl;
}
typesMappingStorage['KalturaWebexDropFolderFile'] = KalturaWebexDropFolderFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzNGLElBQUE7SUFBZ0Qsc0RBQXFCO0lBUWpFLG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBekNMO0VBYWdELHFCQUFxQixFQTZCcEUsQ0FBQTtBQTdCRCxzQ0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZSwgS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncyB7XG4gICAgcmVjb3JkaW5nSWQ/IDogbnVtYmVyO1xuXHR3ZWJleEhvc3RJZD8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0Y29uZklkPyA6IHN0cmluZztcblx0Y29udGVudFVybD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlIHtcblxuICAgIHJlY29yZGluZ0lkIDogbnVtYmVyO1xuXHR3ZWJleEhvc3RJZCA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGNvbmZJZCA6IHN0cmluZztcblx0Y29udGVudFVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGUnIH0sXG5cdFx0XHRcdHJlY29yZGluZ0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdlYmV4SG9zdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbmZJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50VXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlJ10gPSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZTsiXX0=