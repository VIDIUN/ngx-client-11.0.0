/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
/**
 * @record
 */
export function KalturaBulkUploadFilterJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadFilterJobDataArgs.prototype.filter;
/** @type {?|undefined} */
KalturaBulkUploadFilterJobDataArgs.prototype.templateObject;
var KalturaBulkUploadFilterJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadFilterJobData, _super);
    function KalturaBulkUploadFilterJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadFilterJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadFilterJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            templateObject: { type: 'o', subTypeConstructor: KalturaObjectBase, subType: 'KalturaObjectBase' }
        });
        return result;
    };
    return KalturaBulkUploadFilterJobData;
}(KalturaBulkUploadJobData));
export { KalturaBulkUploadFilterJobData };
if (false) {
    /** @type {?} */
    KalturaBulkUploadFilterJobData.prototype.filter;
    /** @type {?} */
    KalturaBulkUploadFilterJobData.prototype.templateObject;
}
typesMappingStorage['KalturaBulkUploadFilterJobData'] = KalturaBulkUploadFilterJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7O0FBUXBHLElBQUE7SUFBb0QsMERBQXdCO0lBS3hFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN0RixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUM3RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQWxDTDtFQVlvRCx3QkFBd0IsRUF1QjNFLENBQUE7QUF2QkQsMENBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEsIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGFBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUZpbHRlcjtcblx0dGVtcGxhdGVPYmplY3Q/IDogS2FsdHVyYU9iamVjdEJhc2U7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkRmlsdGVySm9iRGF0YSBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRmlsdGVyO1xuXHR0ZW1wbGF0ZU9iamVjdCA6IEthbHR1cmFPYmplY3RCYXNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlcicgfSxcblx0XHRcdFx0dGVtcGxhdGVPYmplY3QgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPYmplY3RCYXNlLCBzdWJUeXBlIDogJ0thbHR1cmFPYmplY3RCYXNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGEnXSA9IEthbHR1cmFCdWxrVXBsb2FkRmlsdGVySm9iRGF0YTsiXX0=