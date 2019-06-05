/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function TimeWarnerGetFeedActionArgs() { }
/** @type {?} */
TimeWarnerGetFeedActionArgs.prototype.distributionProfileId;
/** @type {?} */
TimeWarnerGetFeedActionArgs.prototype.hash;
/**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
TimeWarnerGetFeedAction = /** @class */ (function (_super) {
    tslib_1.__extends(TimeWarnerGetFeedAction, _super);
    function TimeWarnerGetFeedAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    TimeWarnerGetFeedAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'timewarnerdistribution_timewarner' },
            action: { type: 'c', default: 'getFeed' },
            distributionProfileId: { type: 'n' },
            hash: { type: 's' }
        });
        return result;
    };
    return TimeWarnerGetFeedAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { TimeWarnerGetFeedAction };
if (false) {
    /** @type {?} */
    TimeWarnerGetFeedAction.prototype.distributionProfileId;
    /** @type {?} */
    TimeWarnerGetFeedAction.prototype.hash;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVdhcm5lckdldEZlZWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RpbWVXYXJuZXJHZXRGZWVkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVyRjs7Ozs7Ozs7QUFBQTtJQUE2QyxtREFBa0I7SUFLM0QsaUNBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUNuRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDNUMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQTFDTDtFQW1CNkMsa0JBQWtCLEVBd0I5RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsbUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZVdhcm5lckdldEZlZWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGRpc3RyaWJ1dGlvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0aGFzaCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RpbWVXYXJuZXInIGFjdGlvbiAnZ2V0RmVlZCcuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lV2FybmVyR2V0RmVlZEFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBkaXN0cmlidXRpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGhhc2ggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVGltZVdhcm5lckdldEZlZWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGltZXdhcm5lcmRpc3RyaWJ1dGlvbl90aW1ld2FybmVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0RmVlZCcgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhhc2ggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19