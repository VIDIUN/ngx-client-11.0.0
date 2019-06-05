/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaForensicWatermarkAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaForensicWatermarkAdvancedFilterArgs.prototype.watermarkId;
export class KalturaForensicWatermarkAdvancedFilter extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaForensicWatermarkAdvancedFilter' },
            watermarkId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaForensicWatermarkAdvancedFilter.prototype.watermarkId;
}
typesMappingStorage['KalturaForensicWatermarkAdvancedFilter'] = KalturaForensicWatermarkAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTy9FLE1BQU0sNkNBQThDLFNBQVEsaUJBQWlCOzs7O0lBSXpFLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEl0ZW0sIEthbHR1cmFTZWFyY2hJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbUFyZ3Mge1xuICAgIHdhdGVybWFya0lkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICB3YXRlcm1hcmtJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZvcmVuc2ljV2F0ZXJtYXJrQWR2YW5jZWRGaWx0ZXInIH0sXG5cdFx0XHRcdHdhdGVybWFya0lkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGb3JlbnNpY1dhdGVybWFya0FkdmFuY2VkRmlsdGVyJ10gPSBLYWx0dXJhRm9yZW5zaWNXYXRlcm1hcmtBZHZhbmNlZEZpbHRlcjsiXX0=