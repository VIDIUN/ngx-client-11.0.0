/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function BusinessProcessCaseServeDiagramActionArgs() { }
/** @type {?} */
BusinessProcessCaseServeDiagramActionArgs.prototype.objectType;
/** @type {?} */
BusinessProcessCaseServeDiagramActionArgs.prototype.objectId;
/** @type {?} */
BusinessProcessCaseServeDiagramActionArgs.prototype.businessProcessStartNotificationTemplateId;
/**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class BusinessProcessCaseServeDiagramAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'businessprocessnotification_businessprocesscase' },
            action: { type: 'c', default: 'serveDiagram' },
            objectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            objectId: { type: 's' },
            businessProcessStartNotificationTemplateId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.objectType;
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.objectId;
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.businessProcessStartNotificationTemplateId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JyRixNQUFNLDRDQUE2QyxTQUFRLGtCQUFrQjs7OztJQU16RSxZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpREFBaUQsRUFBRTtZQUNqRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDL0ksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwwQ0FBMEMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEQsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgb2JqZWN0VHlwZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2J1c2luZXNzUHJvY2Vzc0Nhc2UnIGFjdGlvbiAnc2VydmVEaWFncmFtJy5cbiAqXG4gKiBVc2FnZTogU2VydmVyIGJ1c2luZXNzLXByb2Nlc3MgY2FzZSBkaWFncmFtXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1Byb2Nlc3NDYXNlU2VydmVEaWFncmFtQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIG9iamVjdFR5cGUgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRidXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidXNpbmVzc3Byb2Nlc3Nub3RpZmljYXRpb25fYnVzaW5lc3Nwcm9jZXNzY2FzZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlRGlhZ3JhbScgfSxcblx0XHRcdFx0b2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=