/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadCsvVersion } from './KalturaBulkUploadCsvVersion';
import { KalturaString } from './KalturaString';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
/**
 * @record
 */
export function KalturaBulkUploadCsvJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadCsvJobDataArgs.prototype.columns;
var KalturaBulkUploadCsvJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadCsvJobData, _super);
    function KalturaBulkUploadCsvJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.columns === 'undefined')
            _this.columns = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadCsvJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadCsvJobData' },
            csvVersion: { type: 'en', readOnly: true, subTypeConstructor: KalturaBulkUploadCsvVersion, subType: 'KalturaBulkUploadCsvVersion' },
            columns: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' }
        });
        return result;
    };
    return KalturaBulkUploadCsvJobData;
}(KalturaBulkUploadJobData));
export { KalturaBulkUploadCsvJobData };
if (false) {
    /** @type {?} */
    KalturaBulkUploadCsvJobData.prototype.csvVersion;
    /** @type {?} */
    KalturaBulkUploadCsvJobData.prototype.columns;
}
typesMappingStorage['KalturaBulkUploadCsvJobData'] = KalturaBulkUploadCsvJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU9wRyxJQUFBO0lBQWlELHVEQUF3QjtJQUtyRSxxQ0FBWSxJQUF1QztRQUFuRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDeEksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtTQUM5RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQWxDTDtFQVdpRCx3QkFBd0IsRUF3QnhFLENBQUE7QUF4QkQsdUNBd0JDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZENzdlZlcnNpb24gfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbic7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSwgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3Mge1xuICAgIGNvbHVtbnM/IDogS2FsdHVyYVN0cmluZ1tdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEge1xuXG4gICAgcmVhZG9ubHkgY3N2VmVyc2lvbiA6IEthbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbjtcblx0Y29sdW1ucyA6IEthbHR1cmFTdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YScgfSxcblx0XHRcdFx0Y3N2VmVyc2lvbiA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZWZXJzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbicgfSxcblx0XHRcdFx0Y29sdW1ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEnXSA9IEthbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YTsiXX0=