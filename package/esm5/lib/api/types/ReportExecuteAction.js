/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportResponse } from './KalturaReportResponse';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportExecuteActionArgs() { }
/** @type {?} */
ReportExecuteActionArgs.prototype.id;
/** @type {?|undefined} */
ReportExecuteActionArgs.prototype.params;
/**
 * Build request payload for service 'report' action 'execute'.
 *
 *
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'report' action 'execute'.
 *
 *
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
ReportExecuteAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportExecuteAction, _super);
    function ReportExecuteAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaReportResponse', responseConstructor: KalturaReportResponse }) || this;
        if (typeof _this.params === 'undefined')
            _this.params = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ReportExecuteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'execute' },
            id: { type: 'n' },
            params: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return ReportExecuteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'execute'.
 *
 *
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
export { ReportExecuteAction };
if (false) {
    /** @type {?} */
    ReportExecuteAction.prototype.id;
    /** @type {?} */
    ReportExecuteAction.prototype.params;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0RXhlY3V0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUmVwb3J0RXhlY3V0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBcUM7SUFLMUUsNkJBQVksSUFBOEI7UUFBMUMsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDLFNBRTlIO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztLQUM1RDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDNUMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkE1Q0w7RUFvQnlDLGNBQWMsRUF5QnRELENBQUE7Ozs7Ozs7OztBQXpCRCwrQkF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRFeGVjdXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRwYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXBvcnQnIGFjdGlvbiAnZXhlY3V0ZScuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVJlcG9ydFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnRFeGVjdXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydFJlc3BvbnNlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0cGFyYW1zIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0RXhlY3V0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRSZXNwb25zZSAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcG9ydCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4ZWN1dGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19