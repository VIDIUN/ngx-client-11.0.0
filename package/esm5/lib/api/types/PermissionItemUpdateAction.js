/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PermissionItemUpdateActionArgs() { }
/** @type {?} */
PermissionItemUpdateActionArgs.prototype.permissionItemId;
/** @type {?} */
PermissionItemUpdateActionArgs.prototype.permissionItem;
/**
 * Build request payload for service 'permissionItem' action 'update'.
 *
 * Usage: Updates an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'permissionItem' action 'update'.
 *
 * Usage: Updates an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
PermissionItemUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionItemUpdateAction, _super);
    function PermissionItemUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPermissionItem', responseConstructor: KalturaPermissionItem }) || this;
    }
    /**
     * @return {?}
     */
    PermissionItemUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'permissionitem' },
            action: { type: 'c', default: 'update' },
            permissionItemId: { type: 'n' },
            permissionItem: { type: 'o', subTypeConstructor: KalturaPermissionItem, subType: 'KalturaPermissionItem' }
        });
        return result;
    };
    return PermissionItemUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'permissionItem' action 'update'.
 *
 * Usage: Updates an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export { PermissionItemUpdateAction };
if (false) {
    /** @type {?} */
    PermissionItemUpdateAction.prototype.permissionItemId;
    /** @type {?} */
    PermissionItemUpdateAction.prototype.permissionItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbkl0ZW1VcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Blcm1pc3Npb25JdGVtVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQXFDO0lBS2pGLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNoRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBM0NMO0VBb0JnRCxjQUFjLEVBd0I3RCxDQUFBOzs7Ozs7Ozs7O0FBeEJELHNDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkl0ZW0gfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uSXRlbSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25JdGVtVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBlcm1pc3Npb25JdGVtSWQgOiBudW1iZXI7XG5cdHBlcm1pc3Npb25JdGVtIDogS2FsdHVyYVBlcm1pc3Npb25JdGVtO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGVybWlzc2lvbkl0ZW0nIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlcyBhbiBleGlzdGluZyBwZXJtaXNzaW9uIGl0ZW0gb2JqZWN0LlxuICogVGhpcyBhY3Rpb24gaXMgYXZhaWxhYmxlIG9ubHkgdG8gS2FsdHVyYSBzeXN0ZW0gYWRtaW5pc3RyYXRvcnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGVybWlzc2lvbkl0ZW1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25JdGVtVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBlcm1pc3Npb25JdGVtPiB7XG5cbiAgICBwZXJtaXNzaW9uSXRlbUlkIDogbnVtYmVyO1xuXHRwZXJtaXNzaW9uSXRlbSA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQZXJtaXNzaW9uSXRlbVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25JdGVtJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGVybWlzc2lvbml0ZW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25JdGVtSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGVybWlzc2lvbkl0ZW0gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvbkl0ZW0nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==