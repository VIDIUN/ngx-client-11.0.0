/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
/**
 * @record
 */
export function KalturaEventNotificationArrayParameterArgs() { }
/** @type {?|undefined} */
KalturaEventNotificationArrayParameterArgs.prototype.values;
/** @type {?|undefined} */
KalturaEventNotificationArrayParameterArgs.prototype.allowedValues;
export class KalturaEventNotificationArrayParameter extends KalturaEventNotificationParameter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.values === 'undefined')
            this.values = [];
        if (typeof this.allowedValues === 'undefined')
            this.allowedValues = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationArrayParameter' },
            values: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            allowedValues: { type: 'a', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEventNotificationArrayParameter.prototype.values;
    /** @type {?} */
    KalturaEventNotificationArrayParameter.prototype.allowedValues;
}
typesMappingStorage['KalturaEventNotificationArrayParameter'] = KalturaEventNotificationArrayParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkFycmF5UGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7O0FBUS9ILE1BQU0sNkNBQThDLFNBQVEsaUNBQWlDOzs7O0lBS3pGLFlBQVksSUFBa0Q7UUFFMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztLQUNwRTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDM0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN0RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUM5RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ1ZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nVmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkFycmF5UGFyYW1ldGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIHtcbiAgICB2YWx1ZXM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRhbGxvd2VkVmFsdWVzPyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25BcnJheVBhcmFtZXRlciBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciB7XG5cbiAgICB2YWx1ZXMgOiBLYWx0dXJhU3RyaW5nW107XG5cdGFsbG93ZWRWYWx1ZXMgOiBLYWx0dXJhU3RyaW5nVmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnZhbHVlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hbGxvd2VkVmFsdWVzID09PSAndW5kZWZpbmVkJykgdGhpcy5hbGxvd2VkVmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHZhbHVlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRhbGxvd2VkVmFsdWVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ1ZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZlbnROb3RpZmljYXRpb25BcnJheVBhcmFtZXRlciddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXI7Il19