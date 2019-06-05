/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaIpAddressConditionArgs() { }
/** @type {?|undefined} */
KalturaIpAddressConditionArgs.prototype.acceptInternalIps;
/** @type {?|undefined} */
KalturaIpAddressConditionArgs.prototype.httpHeader;
var KalturaIpAddressCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIpAddressCondition, _super);
    function KalturaIpAddressCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIpAddressCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIpAddressCondition' },
            acceptInternalIps: { type: 'b' },
            httpHeader: { type: 's' }
        });
        return result;
    };
    return KalturaIpAddressCondition;
}(KalturaMatchCondition));
export { KalturaIpAddressCondition };
if (false) {
    /** @type {?} */
    KalturaIpAddressCondition.prototype.acceptInternalIps;
    /** @type {?} */
    KalturaIpAddressCondition.prototype.httpHeader;
}
typesMappingStorage['KalturaIpAddressCondition'] = KalturaIpAddressCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixJQUFBO0lBQStDLHFEQUFxQjtJQUtoRSxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBaENMO0VBVStDLHFCQUFxQixFQXVCbkUsQ0FBQTtBQXZCRCxxQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNYXRjaENvbmRpdGlvbiwgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYU1hdGNoQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSXBBZGRyZXNzQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIHtcbiAgICBhY2NlcHRJbnRlcm5hbElwcz8gOiBib29sZWFuO1xuXHRodHRwSGVhZGVyPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbiB7XG5cbiAgICBhY2NlcHRJbnRlcm5hbElwcyA6IGJvb2xlYW47XG5cdGh0dHBIZWFkZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJcEFkZHJlc3NDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbicgfSxcblx0XHRcdFx0YWNjZXB0SW50ZXJuYWxJcHMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aHR0cEhlYWRlciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSXBBZGRyZXNzQ29uZGl0aW9uJ10gPSBLYWx0dXJhSXBBZGRyZXNzQ29uZGl0aW9uOyJdfQ==