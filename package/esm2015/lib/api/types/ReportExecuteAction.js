/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ReportExecuteAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaReportResponse', responseConstructor: KalturaReportResponse });
        if (typeof this.params === 'undefined')
            this.params = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'execute' },
            id: { type: 'n' },
            params: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ReportExecuteAction.prototype.id;
    /** @type {?} */
    ReportExecuteAction.prototype.params;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0RXhlY3V0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUmVwb3J0RXhlY3V0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sMEJBQTJCLFNBQVEsY0FBcUM7Ozs7SUFLMUUsWUFBWSxJQUE4QjtRQUV0QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUcscUJBQXFCLEVBQUcsQ0FBQyxDQUFDO1FBQzVILEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUM1RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUNqRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRFeGVjdXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRwYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXBvcnQnIGFjdGlvbiAnZXhlY3V0ZScuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVJlcG9ydFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnRFeGVjdXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydFJlc3BvbnNlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0cGFyYW1zIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0RXhlY3V0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRSZXNwb25zZSAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcG9ydCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4ZWN1dGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19