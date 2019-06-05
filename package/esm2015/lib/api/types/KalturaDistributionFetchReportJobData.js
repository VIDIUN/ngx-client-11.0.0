/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobData } from './KalturaDistributionJobData';
/**
 * @record
 */
export function KalturaDistributionFetchReportJobDataArgs() { }
/** @type {?|undefined} */
KalturaDistributionFetchReportJobDataArgs.prototype.plays;
/** @type {?|undefined} */
KalturaDistributionFetchReportJobDataArgs.prototype.views;
export class KalturaDistributionFetchReportJobData extends KalturaDistributionJobData {
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
            objectType: { type: 'c', default: 'KalturaDistributionFetchReportJobData' },
            plays: { type: 'n' },
            views: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionFetchReportJobData.prototype.plays;
    /** @type {?} */
    KalturaDistributionFetchReportJobData.prototype.views;
}
typesMappingStorage['KalturaDistributionFetchReportJobData'] = KalturaDistributionFetchReportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0FBUTFHLE1BQU0sNENBQTZDLFNBQVEsMEJBQTBCOzs7O0lBS2pGLFlBQVksSUFBaUQ7UUFFekQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQzFGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEsIEthbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhQXJncyB7XG4gICAgcGxheXM/IDogbnVtYmVyO1xuXHR2aWV3cz8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iRGF0YSB7XG5cbiAgICBwbGF5cyA6IG51bWJlcjtcblx0dmlld3MgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25GZXRjaFJlcG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YScgfSxcblx0XHRcdFx0cGxheXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlld3MgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YSddID0gS2FsdHVyYURpc3RyaWJ1dGlvbkZldGNoUmVwb3J0Sm9iRGF0YTsiXX0=