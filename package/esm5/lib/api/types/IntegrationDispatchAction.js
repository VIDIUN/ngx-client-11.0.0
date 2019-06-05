/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaIntegrationJobData } from './KalturaIntegrationJobData';
import { KalturaBatchJobObjectType } from './KalturaBatchJobObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function IntegrationDispatchActionArgs() { }
/** @type {?} */
IntegrationDispatchActionArgs.prototype.data;
/** @type {?} */
IntegrationDispatchActionArgs.prototype.objectType;
/** @type {?} */
IntegrationDispatchActionArgs.prototype.objectId;
/**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
IntegrationDispatchAction = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationDispatchAction, _super);
    function IntegrationDispatchAction(data) {
        return _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    IntegrationDispatchAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'integration_integration' },
            action: { type: 'c', default: 'dispatch' },
            data: { type: 'o', subTypeConstructor: KalturaIntegrationJobData, subType: 'KalturaIntegrationJobData' },
            objectType: { type: 'es', subTypeConstructor: KalturaBatchJobObjectType, subType: 'KalturaBatchJobObjectType' },
            objectId: { type: 's' }
        });
        return result;
    };
    return IntegrationDispatchAction;
}(KalturaRequest));
/**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { IntegrationDispatchAction };
if (false) {
    /** @type {?} */
    IntegrationDispatchAction.prototype.data;
    /** @type {?} */
    IntegrationDispatchAction.prototype.objectType;
    /** @type {?} */
    IntegrationDispatchAction.prototype.objectId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFzQjtJQU1qRSxtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUN6RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDNUcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDbkgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQS9DTDtFQXNCK0MsY0FBYyxFQTBCNUQsQ0FBQTs7Ozs7Ozs7O0FBMUJELHFDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVncmF0aW9uRGlzcGF0Y2hBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZGF0YSA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGE7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhQmF0Y2hKb2JPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ludGVncmF0aW9uJyBhY3Rpb24gJ2Rpc3BhdGNoJy5cbiAqXG4gKiBVc2FnZTogRGlzcGF0Y2ggaW50ZWdyYXRpb24gdGFza1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PG51bWJlcj4ge1xuXG4gICAgZGF0YSA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGE7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhQmF0Y2hKb2JPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBJbnRlZ3JhdGlvbkRpc3BhdGNoQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbnRlZ3JhdGlvbl9pbnRlZ3JhdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Rpc3BhdGNoJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdyYXRpb25Kb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYk9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==