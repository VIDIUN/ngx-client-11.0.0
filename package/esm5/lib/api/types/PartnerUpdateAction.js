/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerUpdateActionArgs() { }
/** @type {?} */
PartnerUpdateActionArgs.prototype.partner;
/** @type {?|undefined} */
PartnerUpdateActionArgs.prototype.allowEmpty;
/**
 * Build request payload for service 'partner' action 'update'.
 *
 * Usage: Update details and settings of an existing partner
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'update'.
 *
 * Usage: Update details and settings of an existing partner
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
PartnerUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerUpdateAction, _super);
    function PartnerUpdateAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartner', responseConstructor: KalturaPartner }) || this;
        if (typeof _this.allowEmpty === 'undefined')
            _this.allowEmpty = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PartnerUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'update' },
            partner: { type: 'o', subTypeConstructor: KalturaPartner, subType: 'KalturaPartner' },
            allowEmpty: { type: 'b' }
        });
        return result;
    };
    return PartnerUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'update'.
 *
 * Usage: Update details and settings of an existing partner
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export { PartnerUpdateAction };
if (false) {
    /** @type {?} */
    PartnerUpdateAction.prototype.partner;
    /** @type {?} */
    PartnerUpdateAction.prototype.allowEmpty;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lclVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUGFydG5lclVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBOEI7SUFLbkUsNkJBQVksSUFBOEI7UUFBMUMsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRyxjQUFjLEVBQUcsQ0FBQyxTQUVoSDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7S0FDdkU7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsY0FBYyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUN6RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBM0NMO0VBbUJ5QyxjQUFjLEVBeUJ0RCxDQUFBOzs7Ozs7Ozs7QUF6QkQsK0JBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lcic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRuZXJVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGFydG5lciA6IEthbHR1cmFQYXJ0bmVyO1xuXHRhbGxvd0VtcHR5PyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwYXJ0bmVyJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBkZXRhaWxzIGFuZCBzZXR0aW5ncyBvZiBhbiBleGlzdGluZyBwYXJ0bmVyXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBhcnRuZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnRuZXJVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGFydG5lcj4ge1xuXG4gICAgcGFydG5lciA6IEthbHR1cmFQYXJ0bmVyO1xuXHRhbGxvd0VtcHR5IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQYXJ0bmVyVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lciAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hbGxvd0VtcHR5ID09PSAndW5kZWZpbmVkJykgdGhpcy5hbGxvd0VtcHR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGFydG5lcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0cGFydG5lciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXInIH0sXG5cdFx0XHRcdGFsbG93RW1wdHkgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19