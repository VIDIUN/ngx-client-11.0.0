/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaWidgetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.sourceWidgetIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.rootWidgetIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.uiConfIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.partnerDataLike;
export class KalturaWidgetBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaWidgetBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            sourceWidgetIdEqual: { type: 's' },
            rootWidgetIdEqual: { type: 's' },
            partnerIdEqual: { type: 'n' },
            entryIdEqual: { type: 's' },
            uiConfIdEqual: { type: 'n' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerDataLike: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.sourceWidgetIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.rootWidgetIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.uiConfIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.partnerDataLike;
}
typesMappingStorage['KalturaWidgetBaseFilter'] = KalturaWidgetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGdldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXaWRnZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQm5FLE1BQU0sOEJBQStCLFNBQVEsYUFBYTs7OztJQWV0RCxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXaWRnZXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBzdHJpbmc7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRzb3VyY2VXaWRnZXRJZEVxdWFsPyA6IHN0cmluZztcblx0cm9vdFdpZGdldElkRXF1YWw/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVpQ29uZklkRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0cGFydG5lckRhdGFMaWtlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdpZGdldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBzdHJpbmc7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHNvdXJjZVdpZGdldElkRXF1YWwgOiBzdHJpbmc7XG5cdHJvb3RXaWRnZXRJZEVxdWFsIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0ZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHR1aUNvbmZJZEVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRwYXJ0bmVyRGF0YUxpa2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRnZXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFXaWRnZXRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlV2lkZ2V0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb290V2lkZ2V0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dWlDb25mSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cGFydG5lckRhdGFMaWtlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRnZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhV2lkZ2V0QmFzZUZpbHRlcjsiXX0=