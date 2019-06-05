/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaImportJobDataArgs() { }
/** @type {?|undefined} */
KalturaImportJobDataArgs.prototype.srcFileUrl;
/** @type {?|undefined} */
KalturaImportJobDataArgs.prototype.destFileLocalPath;
/** @type {?|undefined} */
KalturaImportJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaImportJobDataArgs.prototype.fileSize;
var KalturaImportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaImportJobData, _super);
    function KalturaImportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaImportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaImportJobData' },
            srcFileUrl: { type: 's' },
            destFileLocalPath: { type: 's' },
            flavorAssetId: { type: 's' },
            fileSize: { type: 'n' }
        });
        return result;
    };
    return KalturaImportJobData;
}(KalturaJobData));
export { KalturaImportJobData };
if (false) {
    /** @type {?} */
    KalturaImportJobData.prototype.srcFileUrl;
    /** @type {?} */
    KalturaImportJobData.prototype.destFileLocalPath;
    /** @type {?} */
    KalturaImportJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaImportJobData.prototype.fileSize;
}
typesMappingStorage['KalturaImportJobData'] = KalturaImportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltcG9ydEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFJbXBvcnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdEUsSUFBQTtJQUEwQyxnREFBYztJQU9wRCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQXRDTDtFQVkwQyxjQUFjLEVBMkJ2RCxDQUFBO0FBM0JELGdDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSW1wb3J0Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzcmNGaWxlVXJsPyA6IHN0cmluZztcblx0ZGVzdEZpbGVMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0ZmlsZVNpemU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSW1wb3J0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHNyY0ZpbGVVcmwgOiBzdHJpbmc7XG5cdGRlc3RGaWxlTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRmaWxlU2l6ZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUltcG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUltcG9ydEpvYkRhdGEnIH0sXG5cdFx0XHRcdHNyY0ZpbGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSW1wb3J0Sm9iRGF0YSddID0gS2FsdHVyYUltcG9ydEpvYkRhdGE7Il19