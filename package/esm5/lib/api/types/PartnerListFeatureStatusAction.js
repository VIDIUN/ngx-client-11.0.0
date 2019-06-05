/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFeatureStatusListResponse } from './KalturaFeatureStatusListResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerListFeatureStatusActionArgs() { }
/**
 * Build request payload for service 'partner' action 'listFeatureStatus'.
 *
 * Usage: List partner's current processes' statuses
 *
 * Server response type:         KalturaFeatureStatusListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'listFeatureStatus'.
 *
 * Usage: List partner's current processes' statuses
 *
 * Server response type:         KalturaFeatureStatusListResponse
 * Server failure response type: KalturaAPIException
 */
PartnerListFeatureStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerListFeatureStatusAction, _super);
    function PartnerListFeatureStatusAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFeatureStatusListResponse', responseConstructor: KalturaFeatureStatusListResponse }) || this;
    }
    /**
     * @return {?}
     */
    PartnerListFeatureStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'listFeatureStatus' }
        });
        return result;
    };
    return PartnerListFeatureStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'listFeatureStatus'.
 *
 * Usage: List partner's current processes' statuses
 *
 * Server response type:         KalturaFeatureStatusListResponse
 * Server failure response type: KalturaAPIException
 */
export { PartnerListFeatureStatusAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckxpc3RGZWF0dXJlU3RhdHVzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QYXJ0bmVyTGlzdEZlYXR1cmVTdGF0dXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0RixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQW9ELDBEQUFnRDtJQUloRyx3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBRyxnQ0FBZ0MsRUFBRyxDQUFDO0tBQ3BKOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQ3pELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQzdDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBdENMO0VBa0JvRCxjQUFjLEVBcUJqRSxDQUFBOzs7Ozs7Ozs7QUFyQkQsMENBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGZWF0dXJlU3RhdHVzTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhRmVhdHVyZVN0YXR1c0xpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRuZXJMaXN0RmVhdHVyZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BhcnRuZXInIGFjdGlvbiAnbGlzdEZlYXR1cmVTdGF0dXMnLlxuICpcbiAqIFVzYWdlOiBMaXN0IHBhcnRuZXIncyBjdXJyZW50IHByb2Nlc3Nlcycgc3RhdHVzZXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRmVhdHVyZVN0YXR1c0xpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGFydG5lckxpc3RGZWF0dXJlU3RhdHVzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUZlYXR1cmVTdGF0dXNMaXN0UmVzcG9uc2U+IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBQYXJ0bmVyTGlzdEZlYXR1cmVTdGF0dXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFGZWF0dXJlU3RhdHVzTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFGZWF0dXJlU3RhdHVzTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdwYXJ0bmVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdEZlYXR1cmVTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==