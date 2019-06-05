/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaReportInputBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.fromDate;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.toDate;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.fromDay;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.toDay;
export class KalturaReportInputBaseFilter extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaReportInputBaseFilter' },
            fromDate: { type: 'n' },
            toDate: { type: 'n' },
            fromDay: { type: 's' },
            toDay: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.fromDate;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.toDate;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.fromDay;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.toDay;
}
typesMappingStorage['KalturaReportInputBaseFilter'] = KalturaReportInputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixNQUFNLG1DQUFvQyxTQUFRLGlCQUFpQjs7OztJQU8vRCxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZnJvbURhdGU/IDogbnVtYmVyO1xuXHR0b0RhdGU/IDogbnVtYmVyO1xuXHRmcm9tRGF5PyA6IHN0cmluZztcblx0dG9EYXk/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZnJvbURhdGUgOiBudW1iZXI7XG5cdHRvRGF0ZSA6IG51bWJlcjtcblx0ZnJvbURheSA6IHN0cmluZztcblx0dG9EYXkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0ZnJvbURhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dG9EYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZyb21EYXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dG9EYXkgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlciddID0gS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlcjsiXX0=