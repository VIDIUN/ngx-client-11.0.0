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
export function KalturaImportMetadataJobDataArgs() { }
/** @type {?|undefined} */
KalturaImportMetadataJobDataArgs.prototype.srcFileUrl;
/** @type {?|undefined} */
KalturaImportMetadataJobDataArgs.prototype.destFileLocalPath;
/** @type {?|undefined} */
KalturaImportMetadataJobDataArgs.prototype.metadataId;
var KalturaImportMetadataJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaImportMetadataJobData, _super);
    function KalturaImportMetadataJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaImportMetadataJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaImportMetadataJobData' },
            srcFileUrl: { type: 's' },
            destFileLocalPath: { type: 's' },
            metadataId: { type: 'n' }
        });
        return result;
    };
    return KalturaImportMetadataJobData;
}(KalturaJobData));
export { KalturaImportMetadataJobData };
if (false) {
    /** @type {?} */
    KalturaImportMetadataJobData.prototype.srcFileUrl;
    /** @type {?} */
    KalturaImportMetadataJobData.prototype.destFileLocalPath;
    /** @type {?} */
    KalturaImportMetadataJobData.prototype.metadataId;
}
typesMappingStorage['KalturaImportMetadataJobData'] = KalturaImportMetadataJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUltcG9ydE1ldGFkYXRhSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUltcG9ydE1ldGFkYXRhSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7OztBQVN0RSxJQUFBO0lBQWtELHdEQUFjO0lBTTVELHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQW5DTDtFQVdrRCxjQUFjLEVBeUIvRCxDQUFBO0FBekJELHdDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUltcG9ydE1ldGFkYXRhSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzcmNGaWxlVXJsPyA6IHN0cmluZztcblx0ZGVzdEZpbGVMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRtZXRhZGF0YUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUltcG9ydE1ldGFkYXRhSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHNyY0ZpbGVVcmwgOiBzdHJpbmc7XG5cdGRlc3RGaWxlTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRtZXRhZGF0YUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW1wb3J0TWV0YWRhdGFKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJbXBvcnRNZXRhZGF0YUpvYkRhdGEnIH0sXG5cdFx0XHRcdHNyY0ZpbGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSW1wb3J0TWV0YWRhdGFKb2JEYXRhJ10gPSBLYWx0dXJhSW1wb3J0TWV0YWRhdGFKb2JEYXRhOyJdfQ==