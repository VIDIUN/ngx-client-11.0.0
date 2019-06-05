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
export function SyndicationFeedAddActionArgs() { }
/** @type {?} */
SyndicationFeedAddActionArgs.prototype.syndicationFeed;
/**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
SyndicationFeedAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(SyndicationFeedAddAction, _super);
    function SyndicationFeedAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseSyndicationFeed', responseConstructor: KalturaBaseSyndicationFeed }) || this;
    }
    /**
     * @return {?}
     */
    SyndicationFeedAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'add' },
            syndicationFeed: { type: 'o', subTypeConstructor: KalturaBaseSyndicationFeed, subType: 'KalturaBaseSyndicationFeed' }
        });
        return result;
    };
    return SyndicationFeedAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export { SyndicationFeedAddAction };
if (false) {
    /** @type {?} */
    SyndicationFeedAddAction.prototype.syndicationFeed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TeW5kaWNhdGlvbkZlZWRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBOEMsb0RBQTBDO0lBSXBGLGtDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDRCQUE0QixFQUFFLG1CQUFtQixFQUFHLDBCQUEwQixFQUFHLENBQUM7S0FDeEk7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDaEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0F2Q0w7RUFrQjhDLGNBQWMsRUFzQjNELENBQUE7Ozs7Ozs7OztBQXRCRCxvQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3luZGljYXRpb25GZWVkQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHN5bmRpY2F0aW9uRmVlZCA6IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc3luZGljYXRpb25GZWVkJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgU3luZGljYXRpb24gRmVlZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5kaWNhdGlvbkZlZWRBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZD4ge1xuXG4gICAgc3luZGljYXRpb25GZWVkIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3luZGljYXRpb25GZWVkQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3luZGljYXRpb25mZWVkJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRzeW5kaWNhdGlvbkZlZWQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=