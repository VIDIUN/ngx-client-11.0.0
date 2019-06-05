/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBulkUploadFilterJobData extends KalturaBulkUploadJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadFilterJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            templateObject: { type: 'o', subTypeConstructor: KalturaObjectBase, subType: 'KalturaObjectBase' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadFilterJobData.prototype.filter;
    /** @type {?} */
    KalturaBulkUploadFilterJobData.prototype.templateObject;
}
typesMappingStorage['KalturaBulkUploadFilterJobData'] = KalturaBulkUploadFilterJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7QUFRcEcsTUFBTSxxQ0FBc0MsU0FBUSx3QkFBd0I7Ozs7SUFLeEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN0RixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUM3RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSwgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhRmlsdGVyO1xuXHR0ZW1wbGF0ZU9iamVjdD8gOiBLYWx0dXJhT2JqZWN0QmFzZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhIHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFGaWx0ZXI7XG5cdHRlbXBsYXRlT2JqZWN0IDogS2FsdHVyYU9iamVjdEJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkRmlsdGVySm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZEZpbHRlckpvYkRhdGEnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZU9iamVjdCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9iamVjdEJhc2UsIHN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdEJhc2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkRmlsdGVySm9iRGF0YSddID0gS2FsdHVyYUJ1bGtVcGxvYWRGaWx0ZXJKb2JEYXRhOyJdfQ==