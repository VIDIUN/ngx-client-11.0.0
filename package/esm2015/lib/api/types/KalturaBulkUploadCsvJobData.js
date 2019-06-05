/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBulkUploadCsvJobData extends KalturaBulkUploadJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.columns === 'undefined')
            this.columns = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadCsvJobData' },
            csvVersion: { type: 'en', readOnly: true, subTypeConstructor: KalturaBulkUploadCsvVersion, subType: 'KalturaBulkUploadCsvVersion' },
            columns: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadCsvJobData.prototype.csvVersion;
    /** @type {?} */
    KalturaBulkUploadCsvJobData.prototype.columns;
}
typesMappingStorage['KalturaBulkUploadCsvJobData'] = KalturaBulkUploadCsvJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBT3BHLE1BQU0sa0NBQW1DLFNBQVEsd0JBQXdCOzs7O0lBS3JFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQzlEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3hJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZENzdlZlcnNpb24gfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbic7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSwgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3Mge1xuICAgIGNvbHVtbnM/IDogS2FsdHVyYVN0cmluZ1tdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEge1xuXG4gICAgcmVhZG9ubHkgY3N2VmVyc2lvbiA6IEthbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbjtcblx0Y29sdW1ucyA6IEthbHR1cmFTdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YScgfSxcblx0XHRcdFx0Y3N2VmVyc2lvbiA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZWZXJzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ3N2VmVyc2lvbicgfSxcblx0XHRcdFx0Y29sdW1ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEnXSA9IEthbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YTsiXX0=