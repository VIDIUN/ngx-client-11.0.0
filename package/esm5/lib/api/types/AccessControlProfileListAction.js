/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAccessControlProfileListResponse } from './KalturaAccessControlProfileListResponse';
import { KalturaAccessControlProfileFilter } from './KalturaAccessControlProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AccessControlProfileListActionArgs() { }
/** @type {?|undefined} */
AccessControlProfileListActionArgs.prototype.filter;
/** @type {?|undefined} */
AccessControlProfileListActionArgs.prototype.pager;
/**
 * Build request payload for service 'accessControlProfile' action 'list'.
 *
 * Usage: List access control profiles by filter and pager
 *
 * Server response type:         KalturaAccessControlProfileListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControlProfile' action 'list'.
 *
 * Usage: List access control profiles by filter and pager
 *
 * Server response type:         KalturaAccessControlProfileListResponse
 * Server failure response type: KalturaAPIException
 */
AccessControlProfileListAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlProfileListAction, _super);
    function AccessControlProfileListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControlProfileListResponse', responseConstructor: KalturaAccessControlProfileListResponse }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlProfileListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrolprofile' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaAccessControlProfileFilter, subType: 'KalturaAccessControlProfileFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return AccessControlProfileListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControlProfile' action 'list'.
 *
 * Usage: List access control profiles by filter and pager
 *
 * Server response type:         KalturaAccessControlProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export { AccessControlProfileListAction };
if (false) {
    /** @type {?} */
    AccessControlProfileListAction.prototype.filter;
    /** @type {?} */
    AccessControlProfileListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFByb2ZpbGVMaXN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9BY2Nlc3NDb250cm9sUHJvZmlsZUxpc3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFvRCwwREFBdUQ7SUFLdkcsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUNBQXlDLEVBQUUsbUJBQW1CLEVBQUcsdUNBQXVDLEVBQUcsQ0FBQztLQUNsSzs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUM5SCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQTVDTDtFQXFCb0QsY0FBYyxFQXdCakUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDBDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0NvbnRyb2xQcm9maWxlTGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhY2Nlc3NDb250cm9sUHJvZmlsZScgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdCBhY2Nlc3MgY29udHJvbCBwcm9maWxlcyBieSBmaWx0ZXIgYW5kIHBhZ2VyXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvZmlsZUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVMaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEFjY2Vzc0NvbnRyb2xQcm9maWxlTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWNjZXNzY29udHJvbHByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=