/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartnerUsage } from './KalturaPartnerUsage';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerGetUsageActionArgs() { }
/** @type {?|undefined} */
PartnerGetUsageActionArgs.prototype.year;
/** @type {?|undefined} */
PartnerGetUsageActionArgs.prototype.month;
/** @type {?|undefined} */
PartnerGetUsageActionArgs.prototype.resolution;
/**
 * Build request payload for service 'partner' action 'getUsage'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months"
 *
 * Server response type:         KalturaPartnerUsage
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'getUsage'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months"
 *
 * Server response type:         KalturaPartnerUsage
 * Server failure response type: KalturaAPIException
 */
PartnerGetUsageAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerGetUsageAction, _super);
    function PartnerGetUsageAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartnerUsage', responseConstructor: KalturaPartnerUsage }) || this;
        if (typeof _this.month === 'undefined')
            _this.month = 1;
        return _this;
    }
    /**
     * @return {?}
     */
    PartnerGetUsageAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'getUsage' },
            year: { type: 'n' },
            month: { type: 'n' },
            resolution: { type: 'es', subTypeConstructor: KalturaReportInterval, subType: 'KalturaReportInterval' }
        });
        return result;
    };
    return PartnerGetUsageAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'getUsage'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months"
 *
 * Server response type:         KalturaPartnerUsage
 * Server failure response type: KalturaAPIException
 */
export { PartnerGetUsageAction };
if (false) {
    /** @type {?} */
    PartnerGetUsageAction.prototype.year;
    /** @type {?} */
    PartnerGetUsageAction.prototype.month;
    /** @type {?} */
    PartnerGetUsageAction.prototype.resolution;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckdldFVzYWdlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QYXJ0bmVyR2V0VXNhZ2VBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RTs7Ozs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBbUM7SUFNMUUsK0JBQVksSUFBaUM7UUFBN0MsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRyxtQkFBbUIsRUFBRyxDQUFDLFNBRTFIO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztLQUN6RDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ2xHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBbERMO0VBd0IyQyxjQUFjLEVBMkJ4RCxDQUFBOzs7Ozs7Ozs7Ozs7QUEzQkQsaUNBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyVXNhZ2UgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyVXNhZ2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW50ZXJ2YWwgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnRlcnZhbCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0bmVyR2V0VXNhZ2VBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgeWVhcj8gOiBudW1iZXI7XG5cdG1vbnRoPyA6IG51bWJlcjtcblx0cmVzb2x1dGlvbj8gOiBLYWx0dXJhUmVwb3J0SW50ZXJ2YWw7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwYXJ0bmVyJyBhY3Rpb24gJ2dldFVzYWdlJy5cbiAqXG4gKiBVc2FnZTogR2V0IHVzYWdlIHN0YXRpc3RpY3MgZm9yIGEgcGFydG5lclxuICogQ2FsY3VsYXRpb24gaXMgZG9uZSBhY2NvcmRpbmcgdG8gcGFydG5lcidzIHBhY2thZ2VcbiAqIEFkZGl0aW9uYWwgZGF0YSByZXR1cm5lZCBpcyBhIGdyYXBoIHBvaW50cyBvZiBzdHJlYW1pbmcgdXNhZ2UgaW4gYSB0aW1lZnJhbWVcbiAqIFRoZSByZXNvbHV0aW9uIGNhbiBiZSBcImRheXNcIiBvciBcIm1vbnRoc1wiXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBhcnRuZXJVc2FnZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGFydG5lckdldFVzYWdlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBhcnRuZXJVc2FnZT4ge1xuXG4gICAgeWVhciA6IG51bWJlcjtcblx0bW9udGggOiBudW1iZXI7XG5cdHJlc29sdXRpb24gOiBLYWx0dXJhUmVwb3J0SW50ZXJ2YWw7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFBhcnRuZXJHZXRVc2FnZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJVc2FnZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lclVzYWdlICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1vbnRoID09PSAndW5kZWZpbmVkJykgdGhpcy5tb250aCA9IDE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGFydG5lcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFVzYWdlJyB9LFxuXHRcdFx0XHR5ZWFyIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1vbnRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlc29sdXRpb24gOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0SW50ZXJ2YWwsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEludGVydmFsJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=