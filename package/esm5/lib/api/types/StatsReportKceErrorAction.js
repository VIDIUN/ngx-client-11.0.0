/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCEError } from './KalturaCEError';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StatsReportKceErrorActionArgs() { }
/** @type {?} */
StatsReportKceErrorActionArgs.prototype.kalturaCEError;
/**
 * Build request payload for service 'stats' action 'reportKceError'.
 *
 *
 *
 * Server response type:         KalturaCEError
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'stats' action 'reportKceError'.
 *
 *
 *
 * Server response type:         KalturaCEError
 * Server failure response type: KalturaAPIException
 */
StatsReportKceErrorAction = /** @class */ (function (_super) {
    tslib_1.__extends(StatsReportKceErrorAction, _super);
    function StatsReportKceErrorAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCEError', responseConstructor: KalturaCEError }) || this;
    }
    /**
     * @return {?}
     */
    StatsReportKceErrorAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'stats' },
            action: { type: 'c', default: 'reportKceError' },
            kalturaCEError: { type: 'o', subTypeConstructor: KalturaCEError, subType: 'KalturaCEError' }
        });
        return result;
    };
    return StatsReportKceErrorAction;
}(KalturaRequest));
/**
 * Build request payload for service 'stats' action 'reportKceError'.
 *
 *
 *
 * Server response type:         KalturaCEError
 * Server failure response type: KalturaAPIException
 */
export { StatsReportKceErrorAction };
if (false) {
    /** @type {?} */
    StatsReportKceErrorAction.prototype.kalturaCEError;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNSZXBvcnRLY2VFcnJvckFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU3RhdHNSZXBvcnRLY2VFcnJvckFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBK0MscURBQThCO0lBSXpFLG1DQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGdCQUFnQixFQUFFLG1CQUFtQixFQUFHLGNBQWMsRUFBRyxDQUFDO0tBQ2hIOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ25ELGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsY0FBYyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtTQUN2RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQXZDTDtFQWtCK0MsY0FBYyxFQXNCNUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELHFDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ0VFcnJvciB9IGZyb20gJy4vS2FsdHVyYUNFRXJyb3InO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0c1JlcG9ydEtjZUVycm9yQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGthbHR1cmFDRUVycm9yIDogS2FsdHVyYUNFRXJyb3I7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzdGF0cycgYWN0aW9uICdyZXBvcnRLY2VFcnJvcicuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNFRXJyb3JcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRzUmVwb3J0S2NlRXJyb3JBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ0VFcnJvcj4ge1xuXG4gICAga2FsdHVyYUNFRXJyb3IgOiBLYWx0dXJhQ0VFcnJvcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTdGF0c1JlcG9ydEtjZUVycm9yQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ0VFcnJvcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ0VFcnJvciAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhdHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnRLY2VFcnJvcicgfSxcblx0XHRcdFx0a2FsdHVyYUNFRXJyb3IgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDRUVycm9yLCBzdWJUeXBlIDogJ0thbHR1cmFDRUVycm9yJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=