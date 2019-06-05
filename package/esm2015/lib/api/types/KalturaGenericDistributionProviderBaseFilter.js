/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
/**
 * @record
 */
export function KalturaGenericDistributionProviderBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.isDefaultEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.isDefaultIn;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderBaseFilterArgs.prototype.statusIn;
export class KalturaGenericDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
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
            objectType: { type: 'c', default: 'KalturaGenericDistributionProviderBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            isDefaultEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isDefaultIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaGenericDistributionProviderStatus, subType: 'KalturaGenericDistributionProviderStatus' },
            statusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.isDefaultEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.isDefaultIn;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaGenericDistributionProviderBaseFilter'] = KalturaGenericDistributionProviderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCL0gsTUFBTSxtREFBb0QsU0FBUSxpQ0FBaUM7Ozs7SUFlL0YsWUFBWSxJQUF3RDtRQUVoRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDakcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDakgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUNsSixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOENBQThDLENBQUMsR0FBRyw0Q0FBNEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0aXNEZWZhdWx0RXF1YWw/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aXNEZWZhdWx0SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbiA6IHN0cmluZztcblx0aXNEZWZhdWx0RXF1YWwgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRpc0RlZmF1bHRJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNEZWZhdWx0RXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGlzRGVmYXVsdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciddID0gS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXI7Il19