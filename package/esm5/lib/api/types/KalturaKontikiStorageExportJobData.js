/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageExportJobData } from './KalturaStorageExportJobData';
/**
 * @record
 */
export function KalturaKontikiStorageExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.contentMoid;
/** @type {?|undefined} */
KalturaKontikiStorageExportJobDataArgs.prototype.serviceToken;
var KalturaKontikiStorageExportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaKontikiStorageExportJobData, _super);
    function KalturaKontikiStorageExportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaKontikiStorageExportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaKontikiStorageExportJobData' },
            flavorAssetId: { type: 's' },
            contentMoid: { type: 's' },
            serviceToken: { type: 's' }
        });
        return result;
    };
    return KalturaKontikiStorageExportJobData;
}(KalturaStorageExportJobData));
export { KalturaKontikiStorageExportJobData };
if (false) {
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.contentMoid;
    /** @type {?} */
    KalturaKontikiStorageExportJobData.prototype.serviceToken;
}
typesMappingStorage['KalturaKontikiStorageExportJobData'] = KalturaKontikiStorageExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7O0FBUzdHLElBQUE7SUFBd0QsOERBQTJCO0lBTS9FLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0FuQ0w7RUFXd0QsMkJBQTJCLEVBeUJsRixDQUFBO0FBekJELDhDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEsIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncyB7XG4gICAgZmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGNvbnRlbnRNb2lkPyA6IHN0cmluZztcblx0c2VydmljZVRva2VuPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUtvbnRpa2lTdG9yYWdlRXhwb3J0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSB7XG5cbiAgICBmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRjb250ZW50TW9pZCA6IHN0cmluZztcblx0c2VydmljZVRva2VuIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhS29udGlraVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFLb250aWtpU3RvcmFnZUV4cG9ydEpvYkRhdGEnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudE1vaWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmljZVRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFLb250aWtpU3RvcmFnZUV4cG9ydEpvYkRhdGEnXSA9IEthbHR1cmFLb250aWtpU3RvcmFnZUV4cG9ydEpvYkRhdGE7Il19