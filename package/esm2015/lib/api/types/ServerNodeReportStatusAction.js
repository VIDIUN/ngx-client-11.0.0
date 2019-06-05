/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ServerNodeReportStatusActionArgs() { }
/** @type {?} */
ServerNodeReportStatusActionArgs.prototype.hostName;
/** @type {?|undefined} */
ServerNodeReportStatusActionArgs.prototype.serverNode;
/**
 * Build request payload for service 'serverNode' action 'reportStatus'.
 *
 * Usage: Update server node status
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export class ServerNodeReportStatusAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaServerNode', responseConstructor: KalturaServerNode });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'servernode' },
            action: { type: 'c', default: 'reportStatus' },
            hostName: { type: 's' },
            serverNode: { type: 'o', subTypeConstructor: KalturaServerNode, subType: 'KalturaServerNode' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ServerNodeReportStatusAction.prototype.hostName;
    /** @type {?} */
    ServerNodeReportStatusAction.prototype.serverNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUFpQzs7OztJQUsvRSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUN6RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGUgfSBmcm9tICcuL0thbHR1cmFTZXJ2ZXJOb2RlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBob3N0TmFtZSA6IHN0cmluZztcblx0c2VydmVyTm9kZT8gOiBLYWx0dXJhU2VydmVyTm9kZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NlcnZlck5vZGUnIGFjdGlvbiAncmVwb3J0U3RhdHVzJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIHNlcnZlciBub2RlIHN0YXR1c1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXJ2ZXJOb2RlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJOb2RlUmVwb3J0U3RhdHVzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNlcnZlck5vZGU+IHtcblxuICAgIGhvc3ROYW1lIDogc3RyaW5nO1xuXHRzZXJ2ZXJOb2RlIDogS2FsdHVyYVNlcnZlck5vZGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlcnZlck5vZGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlcnZlck5vZGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlcm5vZGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnRTdGF0dXMnIH0sXG5cdFx0XHRcdGhvc3ROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlck5vZGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXJ2ZXJOb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=