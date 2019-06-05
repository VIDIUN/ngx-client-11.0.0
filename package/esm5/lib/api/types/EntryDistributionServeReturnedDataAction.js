/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function EntryDistributionServeReturnedDataActionArgs() { }
/** @type {?} */
EntryDistributionServeReturnedDataActionArgs.prototype.id;
/** @type {?} */
EntryDistributionServeReturnedDataActionArgs.prototype.actionType;
/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
EntryDistributionServeReturnedDataAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionServeReturnedDataAction, _super);
    function EntryDistributionServeReturnedDataAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionServeReturnedDataAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'serveReturnedData' },
            id: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' }
        });
        return result;
    };
    return EntryDistributionServeReturnedDataAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionServeReturnedDataAction };
if (false) {
    /** @type {?} */
    EntryDistributionServeReturnedDataAction.prototype.id;
    /** @type {?} */
    EntryDistributionServeReturnedDataAction.prototype.actionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckY7Ozs7Ozs7O0FBQUE7SUFBOEQsb0VBQWtCO0lBSzVFLGtEQUFZLElBQW1EO2VBRTNELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDdkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUMxRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQTNDTDtFQW9COEQsa0JBQWtCLEVBd0IvRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsb0RBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeURpc3RyaWJ1dGlvblNlcnZlUmV0dXJuZWREYXRhQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0YWN0aW9uVHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlbnRyeURpc3RyaWJ1dGlvbicgYWN0aW9uICdzZXJ2ZVJldHVybmVkRGF0YScuXG4gKlxuICogVXNhZ2U6IFNlcnZlcyBlbnRyeSBkaXN0cmlidXRpb24gcmV0dXJuZWQgZGF0YVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHsgdXJsOiBzdHJpbmcgfVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0YWN0aW9uVHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2VudHJ5ZGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVSZXR1cm5lZERhdGEnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjdGlvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==