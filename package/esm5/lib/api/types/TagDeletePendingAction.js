/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function TagDeletePendingActionArgs() { }
/**
 * Build request payload for service 'tag' action 'deletePending'.
 *
 * Usage: Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'tag' action 'deletePending'.
 *
 * Usage: Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
TagDeletePendingAction = /** @class */ (function (_super) {
    tslib_1.__extends(TagDeletePendingAction, _super);
    function TagDeletePendingAction(data) {
        return _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    TagDeletePendingAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'tagsearch_tag' },
            action: { type: 'c', default: 'deletePending' }
        });
        return result;
    };
    return TagDeletePendingAction;
}(KalturaRequest));
/**
 * Build request payload for service 'tag' action 'deletePending'.
 *
 * Usage: Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { TagDeletePendingAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnRGVsZXRlUGVuZGluZ0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVGFnRGVsZXRlUGVuZGluZ0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBNEMsa0RBQXNCO0lBSTlELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7U0FDekMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F0Q0w7RUFrQjRDLGNBQWMsRUFxQnpELENBQUE7Ozs7Ozs7OztBQXJCRCxrQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0RlbGV0ZVBlbmRpbmdBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgXG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0YWcnIGFjdGlvbiAnZGVsZXRlUGVuZGluZycuXG4gKlxuICogVXNhZ2U6IEFjdGlvbiBnb2VzIG92ZXIgYWxsIHRhZ3Mgd2l0aCBpbnN0YW5jZUNvdW50PT0wIGFuZCBjaGVja3Mgd2hldGhlciB0aGV5IG5lZWQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBEQi4gUmV0dXJucyBudW1iZXIgb2YgcmVtb3ZlZCB0YWdzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgbnVtYmVyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWdEZWxldGVQZW5kaW5nQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogVGFnRGVsZXRlUGVuZGluZ0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ24nLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGFnc2VhcmNoX3RhZycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RlbGV0ZVBlbmRpbmcnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==