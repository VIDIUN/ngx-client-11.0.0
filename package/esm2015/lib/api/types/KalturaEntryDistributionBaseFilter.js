/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaEntryDistributionBaseFilter extends KalturaRelatedFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJ4RixNQUFNLHlDQUEwQyxTQUFRLG9CQUFvQjs7OztJQXVCeEUsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQiwwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzlILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMvSCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3VibWl0dGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3VibWl0dGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0ZW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZW50cnlJZEluPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWRJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRkaXJ0eVN0YXR1c0VxdWFsPyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWc7XG5cdGRpcnR5U3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdW5yaXNlR3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHN1bnJpc2VMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3Vuc2V0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHN1bnNldExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25CYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0c3VibWl0dGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdWJtaXR0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlJZEluIDogc3RyaW5nO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWRFcXVhbCA6IG51bWJlcjtcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0ZGlydHlTdGF0dXNFcXVhbCA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWc7XG5cdGRpcnR5U3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN1bnJpc2VHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdW5yaXNlTGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0c3Vuc2V0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0c3Vuc2V0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25CYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN1Ym1pdHRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN1Ym1pdHRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXJ0eVN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnJyB9LFxuXHRcdFx0XHRkaXJ0eVN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1bnJpc2VHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3VucmlzZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdW5zZXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3Vuc2V0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXInXSA9IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXI7Il19