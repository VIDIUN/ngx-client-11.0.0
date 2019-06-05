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
export function ServerNodeMarkOfflineActionArgs() { }
/** @type {?} */
ServerNodeMarkOfflineActionArgs.prototype.serverNodeId;
/**
 * Build request payload for service 'serverNode' action 'markOffline'.
 *
 * Usage: Mark server node offline
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'serverNode' action 'markOffline'.
 *
 * Usage: Mark server node offline
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
ServerNodeMarkOfflineAction = /** @class */ (function (_super) {
    tslib_1.__extends(ServerNodeMarkOfflineAction, _super);
    function ServerNodeMarkOfflineAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaServerNode', responseConstructor: KalturaServerNode }) || this;
    }
    /**
     * @return {?}
     */
    ServerNodeMarkOfflineAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'servernode' },
            action: { type: 'c', default: 'markOffline' },
            serverNodeId: { type: 's' }
        });
        return result;
    };
    return ServerNodeMarkOfflineAction;
}(KalturaRequest));
/**
 * Build request payload for service 'serverNode' action 'markOffline'.
 *
 * Usage: Mark server node offline
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export { ServerNodeMarkOfflineAction };
if (false) {
    /** @type {?} */
    ServerNodeMarkOfflineAction.prototype.serverNodeId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTm9kZU1hcmtPZmZsaW5lQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZXJ2ZXJOb2RlTWFya09mZmxpbmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBaUQsdURBQWlDO0lBSTlFLHFDQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0F2Q0w7RUFrQmlELGNBQWMsRUFzQjlELENBQUE7Ozs7Ozs7OztBQXRCRCx1Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlcnZlck5vZGUgfSBmcm9tICcuL0thbHR1cmFTZXJ2ZXJOb2RlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyTm9kZU1hcmtPZmZsaW5lQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNlcnZlck5vZGVJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NlcnZlck5vZGUnIGFjdGlvbiAnbWFya09mZmxpbmUnLlxuICpcbiAqIFVzYWdlOiBNYXJrIHNlcnZlciBub2RlIG9mZmxpbmVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2VydmVyTm9kZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyTm9kZU1hcmtPZmZsaW5lQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNlcnZlck5vZGU+IHtcblxuICAgIHNlcnZlck5vZGVJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXJ2ZXJOb2RlTWFya09mZmxpbmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXJ2ZXJOb2RlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXJ2ZXJub2RlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWFya09mZmxpbmUnIH0sXG5cdFx0XHRcdHNlcnZlck5vZGVJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=