/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ESearchSearchEntryActionArgs() { }
/** @type {?} */
ESearchSearchEntryActionArgs.prototype.searchParams;
/** @type {?|undefined} */
ESearchSearchEntryActionArgs.prototype.pager;
/**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export class ESearchSearchEntryAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaESearchResponse', responseConstructor: KalturaESearchResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'elasticsearch_esearch' },
            action: { type: 'c', default: 'searchEntry' },
            searchParams: { type: 'o', subTypeConstructor: KalturaESearchEntryParams, subType: 'KalturaESearchEntryParams' },
            pager: { type: 'o', subTypeConstructor: KalturaPager, subType: 'KalturaPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ESearchSearchEntryAction.prototype.searchParams;
    /** @type {?} */
    ESearchSearchEntryAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVNlYXJjaFNlYXJjaEVudHJ5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FU2VhcmNoU2VhcmNoRW50cnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLCtCQUFnQyxTQUFRLGNBQXNDOzs7O0lBS2hGLFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUMsQ0FBQztLQUNqSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ3BILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsWUFBWSxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7U0FDMUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoUmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoUmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFQYWdlciB9IGZyb20gJy4vS2FsdHVyYVBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVTZWFyY2hTZWFyY2hFbnRyeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWFyY2hQYXJhbXMgOiBLYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zO1xuXHRwYWdlcj8gOiBLYWx0dXJhUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlU2VhcmNoJyBhY3Rpb24gJ3NlYXJjaEVudHJ5Jy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFU2VhcmNoU2VhcmNoRW50cnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRVNlYXJjaFJlc3BvbnNlPiB7XG5cbiAgICBzZWFyY2hQYXJhbXMgOiBLYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zO1xuXHRwYWdlciA6IEthbHR1cmFQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFU2VhcmNoU2VhcmNoRW50cnlBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoUmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZWxhc3RpY3NlYXJjaF9lc2VhcmNoJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoRW50cnknIH0sXG5cdFx0XHRcdHNlYXJjaFBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19