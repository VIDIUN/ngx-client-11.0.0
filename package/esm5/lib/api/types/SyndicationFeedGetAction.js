/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedGetActionArgs() { }
/** @type {?} */
SyndicationFeedGetActionArgs.prototype.id;
/**
 * Build request payload for service 'syndicationFeed' action 'get'.
 *
 * Usage: Get Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'syndicationFeed' action 'get'.
 *
 * Usage: Get Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
SyndicationFeedGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(SyndicationFeedGetAction, _super);
    function SyndicationFeedGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseSyndicationFeed', responseConstructor: KalturaBaseSyndicationFeed }) || this;
    }
    /**
     * @return {?}
     */
    SyndicationFeedGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'get' },
            id: { type: 's' }
        });
        return result;
    };
    return SyndicationFeedGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'syndicationFeed' action 'get'.
 *
 * Usage: Get Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export { SyndicationFeedGetAction };
if (false) {
    /** @type {?} */
    SyndicationFeedGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkR2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TeW5kaWNhdGlvbkZlZWRHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBOEMsb0RBQTBDO0lBSXBGLGtDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDRCQUE0QixFQUFFLG1CQUFtQixFQUFHLDBCQUEwQixFQUFHLENBQUM7S0FDeEk7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBdkNMO0VBa0I4QyxjQUFjLEVBc0IzRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsb0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmRpY2F0aW9uRmVlZEdldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N5bmRpY2F0aW9uRmVlZCcgYWN0aW9uICdnZXQnLlxuICpcbiAqIFVzYWdlOiBHZXQgU3luZGljYXRpb24gRmVlZCBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5kaWNhdGlvbkZlZWRHZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZD4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3luZGljYXRpb25GZWVkR2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3luZGljYXRpb25mZWVkJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=