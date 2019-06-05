/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileUpdateStatusActionArgs() { }
/** @type {?} */
ResponseProfileUpdateStatusActionArgs.prototype.id;
/** @type {?} */
ResponseProfileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
ResponseProfileUpdateStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResponseProfileUpdateStatusAction, _super);
    function ResponseProfileUpdateStatusAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaResponseProfile', responseConstructor: KalturaResponseProfile }) || this;
    }
    /**
     * @return {?}
     */
    ResponseProfileUpdateStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'updateStatus' },
            id: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaResponseProfileStatus, subType: 'KalturaResponseProfileStatus' }
        });
        return result;
    };
    return ResponseProfileUpdateStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export { ResponseProfileUpdateStatusAction };
if (false) {
    /** @type {?} */
    ResponseProfileUpdateStatusAction.prototype.id;
    /** @type {?} */
    ResponseProfileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlVXBkYXRlU3RhdHVzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXNwb25zZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBc0M7SUFLekYsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQzVHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBM0NMO0VBb0J1RCxjQUFjLEVBd0JwRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNkNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Jlc3BvbnNlUHJvZmlsZScgYWN0aW9uICd1cGRhdGVTdGF0dXMnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgcmVzcG9uc2UgcHJvZmlsZSBzdGF0dXMgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVzcG9uc2VQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVzcG9uc2VQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBSZXNwb25zZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVzcG9uc2Vwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlU3RhdHVzJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==