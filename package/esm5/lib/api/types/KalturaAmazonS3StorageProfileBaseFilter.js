/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageProfileFilter } from './KalturaStorageProfileFilter';
/**
 * @record
 */
export function KalturaAmazonS3StorageProfileBaseFilterArgs() { }
var KalturaAmazonS3StorageProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAmazonS3StorageProfileBaseFilter, _super);
    function KalturaAmazonS3StorageProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAmazonS3StorageProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAmazonS3StorageProfileBaseFilter' }
        });
        return result;
    };
    return KalturaAmazonS3StorageProfileBaseFilter;
}(KalturaStorageProfileFilter));
export { KalturaAmazonS3StorageProfileBaseFilter };
typesMappingStorage['KalturaAmazonS3StorageProfileBaseFilter'] = KalturaAmazonS3StorageProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQU83RyxJQUFBO0lBQTZELG1FQUEyQjtJQUlwRixpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELDJCQUEyQixFQW9CdkYsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZUZpbHRlciwgS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTdG9yYWdlUHJvZmlsZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQW1hem9uUzNTdG9yYWdlUHJvZmlsZUJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBbWF6b25TM1N0b3JhZ2VQcm9maWxlQmFzZUZpbHRlciddID0gS2FsdHVyYUFtYXpvblMzU3RvcmFnZVByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==