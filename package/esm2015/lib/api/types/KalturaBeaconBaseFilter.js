/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBeaconBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.relatedObjectTypeIn;
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.relatedObjectTypeEqual;
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.eventTypeIn;
/** @type {?|undefined} */
KalturaBeaconBaseFilterArgs.prototype.objectIdIn;
export class KalturaBeaconBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaBeaconBaseFilter' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            relatedObjectTypeIn: { type: 's' },
            relatedObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaBeaconObjectTypes, subType: 'KalturaBeaconObjectTypes' },
            eventTypeIn: { type: 's' },
            objectIdIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.relatedObjectTypeIn;
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.relatedObjectTypeEqual;
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.eventTypeIn;
    /** @type {?} */
    KalturaBeaconBaseFilter.prototype.objectIdIn;
}
typesMappingStorage['KalturaBeaconBaseFilter'] = KalturaBeaconBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCZWFjb25CYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbkUsTUFBTSw4QkFBK0IsU0FBUSxhQUFhOzs7O0lBU3RELFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0gsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXMgfSBmcm9tICcuL0thbHR1cmFCZWFjb25PYmplY3RUeXBlcyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICB1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHJlbGF0ZWRPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xuXHRyZWxhdGVkT2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFCZWFjb25PYmplY3RUeXBlcztcblx0ZXZlbnRUeXBlSW4/IDogc3RyaW5nO1xuXHRvYmplY3RJZEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJlYWNvbkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHJlbGF0ZWRPYmplY3RUeXBlSW4gOiBzdHJpbmc7XG5cdHJlbGF0ZWRPYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXM7XG5cdGV2ZW50VHlwZUluIDogc3RyaW5nO1xuXHRvYmplY3RJZEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmVhY29uQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmVhY29uQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRyZWxhdGVkT2JqZWN0VHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbGF0ZWRPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbk9iamVjdFR5cGVzJyB9LFxuXHRcdFx0XHRldmVudFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCZWFjb25CYXNlRmlsdGVyJ10gPSBLYWx0dXJhQmVhY29uQmFzZUZpbHRlcjsiXX0=