/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaEventNotificationArrayParameter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventNotificationArrayParameter, _super);
    function KalturaEventNotificationArrayParameter(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.values === 'undefined')
            _this.values = [];
        if (typeof _this.allowedValues === 'undefined')
            _this.allowedValues = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEventNotificationArrayParameter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventNotificationArrayParameter' },
            values: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            allowedValues: { type: 'a', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    };
    return KalturaEventNotificationArrayParameter;
}(KalturaEventNotificationParameter));
export { KalturaEventNotificationArrayParameter };
if (false) {
    /** @type {?} */
    KalturaEventNotificationArrayParameter.prototype.values;
    /** @type {?} */
    KalturaEventNotificationArrayParameter.prototype.allowedValues;
}
typesMappingStorage['KalturaEventNotificationArrayParameter'] = KalturaEventNotificationArrayParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkFycmF5UGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztBQVEvSCxJQUFBO0lBQTRELGtFQUFpQztJQUt6RixnREFBWSxJQUFrRDtRQUE5RCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7S0FDcEU7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3RGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQzlGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBcENMO0VBWTRELGlDQUFpQyxFQXlCNUYsQ0FBQTtBQXpCRCxrREF5QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ1ZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nVmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkFycmF5UGFyYW1ldGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIHtcbiAgICB2YWx1ZXM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRhbGxvd2VkVmFsdWVzPyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25BcnJheVBhcmFtZXRlciBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciB7XG5cbiAgICB2YWx1ZXMgOiBLYWx0dXJhU3RyaW5nW107XG5cdGFsbG93ZWRWYWx1ZXMgOiBLYWx0dXJhU3RyaW5nVmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnZhbHVlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hbGxvd2VkVmFsdWVzID09PSAndW5kZWZpbmVkJykgdGhpcy5hbGxvd2VkVmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXInIH0sXG5cdFx0XHRcdHZhbHVlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRhbGxvd2VkVmFsdWVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZ1ZhbHVlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXZlbnROb3RpZmljYXRpb25BcnJheVBhcmFtZXRlciddID0gS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uQXJyYXlQYXJhbWV0ZXI7Il19