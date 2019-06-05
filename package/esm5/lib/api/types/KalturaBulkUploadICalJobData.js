/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
/**
 * @record
 */
export function KalturaBulkUploadICalJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadICalJobDataArgs.prototype.eventsType;
var KalturaBulkUploadICalJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadICalJobData, _super);
    function KalturaBulkUploadICalJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadICalJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadICalJobData' },
            eventsType: { type: 'en', subTypeConstructor: KalturaScheduleEventType, subType: 'KalturaScheduleEventType' }
        });
        return result;
    };
    return KalturaBulkUploadICalJobData;
}(KalturaBulkUploadJobData));
export { KalturaBulkUploadICalJobData };
if (false) {
    /** @type {?} */
    KalturaBulkUploadICalJobData.prototype.eventsType;
}
typesMappingStorage['KalturaBulkUploadICalJobData'] = KalturaBulkUploadICalJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFPcEcsSUFBQTtJQUFrRCx3REFBd0I7SUFJdEUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtTQUN4RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTlCTDtFQVVrRCx3QkFBd0IsRUFxQnpFLENBQUE7QUFyQkQsd0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhLCBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkSUNhbEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3Mge1xuICAgIGV2ZW50c1R5cGU/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZElDYWxKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhIHtcblxuICAgIGV2ZW50c1R5cGUgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkSUNhbEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRJQ2FsSm9iRGF0YScgfSxcblx0XHRcdFx0ZXZlbnRzVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkSUNhbEpvYkRhdGEnXSA9IEthbHR1cmFCdWxrVXBsb2FkSUNhbEpvYkRhdGE7Il19