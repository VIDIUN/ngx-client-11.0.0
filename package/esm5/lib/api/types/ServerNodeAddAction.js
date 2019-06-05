/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ServerNodeAddActionArgs() { }
/** @type {?} */
ServerNodeAddActionArgs.prototype.serverNode;
/**
 * Build request payload for service 'serverNode' action 'add'.
 *
 * Usage: Adds a server node to the Kaltura DB
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'serverNode' action 'add'.
 *
 * Usage: Adds a server node to the Kaltura DB
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
ServerNodeAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ServerNodeAddAction, _super);
    function ServerNodeAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaServerNode', responseConstructor: KalturaServerNode }) || this;
    }
    /**
     * @return {?}
     */
    ServerNodeAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'servernode' },
            action: { type: 'c', default: 'add' },
            serverNode: { type: 'o', subTypeConstructor: KalturaServerNode, subType: 'KalturaServerNode' }
        });
        return result;
    };
    return ServerNodeAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'serverNode' action 'add'.
 *
 * Usage: Adds a server node to the Kaltura DB
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export { ServerNodeAddAction };
if (false) {
    /** @type {?} */
    ServerNodeAddAction.prototype.serverNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTm9kZUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2VydmVyTm9kZUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBaUM7SUFJdEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDekYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkF2Q0w7RUFrQnlDLGNBQWMsRUFzQnRELENBQUE7Ozs7Ozs7OztBQXRCRCwrQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGUgfSBmcm9tICcuL0thbHR1cmFTZXJ2ZXJOb2RlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyTm9kZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZXJ2ZXJOb2RlIDogS2FsdHVyYVNlcnZlck5vZGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZXJ2ZXJOb2RlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZHMgYSBzZXJ2ZXIgbm9kZSB0byB0aGUgS2FsdHVyYSBEQlxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXJ2ZXJOb2RlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJOb2RlQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNlcnZlck5vZGU+IHtcblxuICAgIHNlcnZlck5vZGUgOiBLYWx0dXJhU2VydmVyTm9kZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXJ2ZXJOb2RlQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2VydmVyTm9kZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VydmVyTm9kZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVybm9kZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0c2VydmVyTm9kZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlcnZlck5vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlcnZlck5vZGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==