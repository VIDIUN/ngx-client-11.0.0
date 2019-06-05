/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
BusinessProcessCaseServeDiagramAction = /** @class */ (function (_super) {
    tslib_1.__extends(BusinessProcessCaseServeDiagramAction, _super);
    function BusinessProcessCaseServeDiagramAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    BusinessProcessCaseServeDiagramAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'businessprocessnotification_businessprocesscase' },
            action: { type: 'c', default: 'serveDiagram' },
            objectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            objectId: { type: 's' },
            businessProcessStartNotificationTemplateId: { type: 'n' }
        });
        return result;
    };
    return BusinessProcessCaseServeDiagramAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { BusinessProcessCaseServeDiagramAction };
if (false) {
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.objectType;
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.objectId;
    /** @type {?} */
    BusinessProcessCaseServeDiagramAction.prototype.businessProcessStartNotificationTemplateId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQnVzaW5lc3NQcm9jZXNzQ2FzZVNlcnZlRGlhZ3JhbUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCckY7Ozs7Ozs7O0FBQUE7SUFBMkQsaUVBQWtCO0lBTXpFLCtDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaURBQWlELEVBQUU7WUFDakcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQy9JLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsMENBQTBDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xELENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBOUNMO0VBcUIyRCxrQkFBa0IsRUEwQjVFLENBQUE7Ozs7Ozs7OztBQTFCRCxpREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCdXNpbmVzc1Byb2Nlc3NDYXNlU2VydmVEaWFncmFtQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBvYmplY3RUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYnVzaW5lc3NQcm9jZXNzQ2FzZScgYWN0aW9uICdzZXJ2ZURpYWdyYW0nLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXIgYnVzaW5lc3MtcHJvY2VzcyBjYXNlIGRpYWdyYW1cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUHJvY2Vzc0Nhc2VTZXJ2ZURpYWdyYW1BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgb2JqZWN0VHlwZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCdXNpbmVzc1Byb2Nlc3NDYXNlU2VydmVEaWFncmFtQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2J1c2luZXNzcHJvY2Vzc25vdGlmaWNhdGlvbl9idXNpbmVzc3Byb2Nlc3NjYXNlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVEaWFncmFtJyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==