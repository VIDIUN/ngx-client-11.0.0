/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryDistributionUpdateActionArgs() { }
/** @type {?} */
EntryDistributionUpdateActionArgs.prototype.id;
/** @type {?} */
EntryDistributionUpdateActionArgs.prototype.entryDistribution;
/**
 * Build request payload for service 'entryDistribution' action 'update'.
 *
 * Usage: Update Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'update'.
 *
 * Usage: Update Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
EntryDistributionUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionUpdateAction, _super);
    function EntryDistributionUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryDistribution', responseConstructor: KalturaEntryDistribution }) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            entryDistribution: { type: 'o', subTypeConstructor: KalturaEntryDistribution, subType: 'KalturaEntryDistribution' }
        });
        return result;
    };
    return EntryDistributionUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryDistribution' action 'update'.
 *
 * Usage: Update Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionUpdateAction };
if (false) {
    /** @type {?} */
    EntryDistributionUpdateAction.prototype.id;
    /** @type {?} */
    EntryDistributionUpdateAction.prototype.entryDistribution;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25VcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VudHJ5RGlzdHJpYnV0aW9uVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUQseURBQXdDO0lBS3ZGLHVDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBCQUEwQixFQUFFLG1CQUFtQixFQUFHLHdCQUF3QixFQUFHLENBQUM7S0FDcEk7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUN2RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQzlHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBMUNMO0VBbUJtRCxjQUFjLEVBd0JoRSxDQUFBOzs7Ozs7Ozs7QUF4QkQseUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlEaXN0cmlidXRpb25VcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGVudHJ5RGlzdHJpYnV0aW9uIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIEVudHJ5IERpc3RyaWJ1dGlvbiBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlEaXN0cmlidXRpb25VcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlEaXN0cmlidXRpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRlbnRyeURpc3RyaWJ1dGlvbiA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbnRyeURpc3RyaWJ1dGlvblVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9lbnRyeWRpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlEaXN0cmlidXRpb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==