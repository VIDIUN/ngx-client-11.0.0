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
var /**
 * Build request payload for service 'serverNode' action 'reportStatus'.
 *
 * Usage: Update server node status
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
ServerNodeReportStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(ServerNodeReportStatusAction, _super);
    function ServerNodeReportStatusAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaServerNode', responseConstructor: KalturaServerNode }) || this;
    }
    /**
     * @return {?}
     */
    ServerNodeReportStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'servernode' },
            action: { type: 'c', default: 'reportStatus' },
            hostName: { type: 's' },
            serverNode: { type: 'o', subTypeConstructor: KalturaServerNode, subType: 'KalturaServerNode' }
        });
        return result;
    };
    return ServerNodeReportStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'serverNode' action 'reportStatus'.
 *
 * Usage: Update server node status
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export { ServerNodeReportStatusAction };
if (false) {
    /** @type {?} */
    ServerNodeReportStatusAction.prototype.hostName;
    /** @type {?} */
    ServerNodeReportStatusAction.prototype.serverNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUFpQztJQUsvRSxzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQ3pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBbUJrRCxjQUFjLEVBd0IvRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsd0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXJ2ZXJOb2RlIH0gZnJvbSAnLi9LYWx0dXJhU2VydmVyTm9kZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlck5vZGVSZXBvcnRTdGF0dXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaG9zdE5hbWUgOiBzdHJpbmc7XG5cdHNlcnZlck5vZGU/IDogS2FsdHVyYVNlcnZlck5vZGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZXJ2ZXJOb2RlJyBhY3Rpb24gJ3JlcG9ydFN0YXR1cycuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBzZXJ2ZXIgbm9kZSBzdGF0dXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2VydmVyTm9kZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyTm9kZVJlcG9ydFN0YXR1c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZXJ2ZXJOb2RlPiB7XG5cbiAgICBob3N0TmFtZSA6IHN0cmluZztcblx0c2VydmVyTm9kZSA6IEthbHR1cmFTZXJ2ZXJOb2RlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlcnZlck5vZGVSZXBvcnRTdGF0dXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXJ2ZXJOb2RlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXJ2ZXJub2RlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVwb3J0U3RhdHVzJyB9LFxuXHRcdFx0XHRob3N0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJOb2RlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VydmVyTm9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VydmVyTm9kZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19