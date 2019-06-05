/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaEntryDistributionBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.submittedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.submittedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.distributionProfileIdEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.distributionProfileIdIn;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.dirtyStatusEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.dirtyStatusIn;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.sunriseGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.sunriseLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.sunsetGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryDistributionBaseFilterArgs.prototype.sunsetLessThanOrEqual;
var KalturaEntryDistributionBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryDistributionBaseFilter, _super);
    function KalturaEntryDistributionBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryDistributionBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryDistributionBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            submittedAtGreaterThanOrEqual: { type: 'd' },
            submittedAtLessThanOrEqual: { type: 'd' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            distributionProfileIdEqual: { type: 'n' },
            distributionProfileIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaEntryDistributionStatus, subType: 'KalturaEntryDistributionStatus' },
            statusIn: { type: 's' },
            dirtyStatusEqual: { type: 'en', subTypeConstructor: KalturaEntryDistributionFlag, subType: 'KalturaEntryDistributionFlag' },
            dirtyStatusIn: { type: 's' },
            sunriseGreaterThanOrEqual: { type: 'd' },
            sunriseLessThanOrEqual: { type: 'd' },
            sunsetGreaterThanOrEqual: { type: 'd' },
            sunsetLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaEntryDistributionBaseFilter;
}(KalturaRelatedFilter));
export { KalturaEntryDistributionBaseFilter };
if (false) {
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.submittedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.submittedAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.distributionProfileIdEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.distributionProfileIdIn;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.dirtyStatusEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.dirtyStatusIn;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.sunriseGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.sunriseLessThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.sunsetGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryDistributionBaseFilter.prototype.sunsetLessThanOrEqual;
}
typesMappingStorage['KalturaEntryDistributionBaseFilter'] = KalturaEntryDistributionBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCeEYsSUFBQTtJQUF3RCw4REFBb0I7SUF1QnhFLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQiwwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzlILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMvSCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQXhGTDtFQThCd0Qsb0JBQW9CLEVBMkQzRSxDQUFBO0FBM0RELDhDQTJEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRzdWJtaXR0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRzdWJtaXR0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkSW4/IDogc3RyaW5nO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWRFcXVhbD8gOiBudW1iZXI7XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGVJZEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGRpcnR5U3RhdHVzRXF1YWw/IDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZztcblx0ZGlydHlTdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN1bnJpc2VHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3VucmlzZUxlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRzdW5zZXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3Vuc2V0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdWJtaXR0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHN1Ym1pdHRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0ZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkSW4gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGVJZEVxdWFsIDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWRJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRkaXJ0eVN0YXR1c0VxdWFsIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZztcblx0ZGlydHlTdGF0dXNJbiA6IHN0cmluZztcblx0c3VucmlzZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHN1bnJpc2VMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdW5zZXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdW5zZXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25CYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3VibWl0dGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3VibWl0dGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpcnR5U3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcnIH0sXG5cdFx0XHRcdGRpcnR5U3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3VucmlzZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdW5yaXNlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN1bnNldEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdW5zZXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlciddID0gS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlcjsiXX0=