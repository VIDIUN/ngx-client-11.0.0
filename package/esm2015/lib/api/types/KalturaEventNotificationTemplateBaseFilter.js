/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaEventNotificationTemplateBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEventNotificationTemplateBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaEventNotificationTemplateBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaEventNotificationTemplateBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaEventNotificationTemplateType, subType: 'KalturaEventNotificationTemplateType' },
            typeIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaEventNotificationTemplateStatus, subType: 'KalturaEventNotificationTemplateStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEventNotificationTemplateBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaEventNotificationTemplateBaseFilter'] = KalturaEventNotificationTemplateBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQm5FLE1BQU0saURBQWtELFNBQVEsYUFBYTs7OztJQWlCekUsWUFBWSxJQUFzRDtRQUU5RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNENBQTRDLEVBQUU7WUFDL0YsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDeEksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUM5SSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluPyA6IHN0cmluZztcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0dHlwZUVxdWFsIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVUeXBlJyB9LFxuXHRcdFx0XHR0eXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlQmFzZUZpbHRlciddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyOyJdfQ==