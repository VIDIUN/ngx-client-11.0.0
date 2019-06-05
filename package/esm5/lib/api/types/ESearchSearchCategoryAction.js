/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchCategoryParams } from './KalturaESearchCategoryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ESearchSearchCategoryActionArgs() { }
/** @type {?} */
ESearchSearchCategoryActionArgs.prototype.searchParams;
/** @type {?|undefined} */
ESearchSearchCategoryActionArgs.prototype.pager;
/**
 * Build request payload for service 'eSearch' action 'searchCategory'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eSearch' action 'searchCategory'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
ESearchSearchCategoryAction = /** @class */ (function (_super) {
    tslib_1.__extends(ESearchSearchCategoryAction, _super);
    function ESearchSearchCategoryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaESearchResponse', responseConstructor: KalturaESearchResponse }) || this;
    }
    /**
     * @return {?}
     */
    ESearchSearchCategoryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'elasticsearch_esearch' },
            action: { type: 'c', default: 'searchCategory' },
            searchParams: { type: 'o', subTypeConstructor: KalturaESearchCategoryParams, subType: 'KalturaESearchCategoryParams' },
            pager: { type: 'o', subTypeConstructor: KalturaPager, subType: 'KalturaPager' }
        });
        return result;
    };
    return ESearchSearchCategoryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eSearch' action 'searchCategory'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export { ESearchSearchCategoryAction };
if (false) {
    /** @type {?} */
    ESearchSearchCategoryAction.prototype.searchParams;
    /** @type {?} */
    ESearchSearchCategoryAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVNlYXJjaFNlYXJjaENhdGVnb3J5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FU2VhcmNoU2VhcmNoQ2F0ZWdvcnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBaUQsdURBQXNDO0lBS25GLHFDQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUM7S0FDaEk7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMxSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFlBQVksRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1NBQzFFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBNUNMO0VBcUJpRCxjQUFjLEVBd0I5RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsdUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoUmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoUmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFQYWdlciB9IGZyb20gJy4vS2FsdHVyYVBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVTZWFyY2hTZWFyY2hDYXRlZ29yeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWFyY2hQYXJhbXMgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zO1xuXHRwYWdlcj8gOiBLYWx0dXJhUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlU2VhcmNoJyBhY3Rpb24gJ3NlYXJjaENhdGVnb3J5Jy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFU2VhcmNoU2VhcmNoQ2F0ZWdvcnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRVNlYXJjaFJlc3BvbnNlPiB7XG5cbiAgICBzZWFyY2hQYXJhbXMgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zO1xuXHRwYWdlciA6IEthbHR1cmFQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFU2VhcmNoU2VhcmNoQ2F0ZWdvcnlBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoUmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZWxhc3RpY3NlYXJjaF9lc2VhcmNoJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoQ2F0ZWdvcnknIH0sXG5cdFx0XHRcdHNlYXJjaFBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19