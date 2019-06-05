/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { of as observableOf } from 'rxjs';
import { buildUrl, createEndpoint, prepareParameters } from './utils';
var KalturaFileRequestAdapter = /** @class */ (function () {
    function KalturaFileRequestAdapter() {
    }
    /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    KalturaFileRequestAdapter.prototype.transmit = /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    function (request, clientOptions, defaultRequestOptions) {
        /** @type {?} */
        var parameters = prepareParameters(request, clientOptions, defaultRequestOptions);
        /** @type {?} */
        var endpointUrl = createEndpoint(request, clientOptions, parameters['service'], parameters['action']);
        delete parameters['service'];
        delete parameters['action'];
        return observableOf({ url: buildUrl(endpointUrl, parameters) });
    };
    return KalturaFileRequestAdapter;
}());
export { KalturaFileRequestAdapter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1maWxlLXJlcXVlc3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hZGFwdGVycy9rYWx0dXJhLWZpbGUtcmVxdWVzdC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUd0RCxPQUFPLEVBQUUsUUFBUSxFQUFtQixjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJdkYsSUFBQTs7Ozs7Ozs7O0lBRVcsNENBQVE7Ozs7OztjQUFDLE9BQTJCLEVBQUUsYUFBbUMsRUFBRSxxQkFBNEM7O1FBQzFILElBQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7UUFDcEYsSUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUM7O29DQWhCdEU7SUFrQkMsQ0FBQTtBQVZELHFDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge29mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMsIEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuaW1wb3J0IHsgYnVpbGRVcmwsIGNyZWF0ZUNsaWVudFRhZywgY3JlYXRlRW5kcG9pbnQsIHByZXBhcmVQYXJhbWV0ZXJzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBLYWx0dXJhQ2xpZW50T3B0aW9ucyB9IGZyb20gJy4uL2thbHR1cmEtY2xpZW50LW9wdGlvbnMnO1xuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZVJlcXVlc3RBZGFwdGVyIHtcblxuICAgIHB1YmxpYyB0cmFuc21pdChyZXF1ZXN0OiBLYWx0dXJhRmlsZVJlcXVlc3QsIGNsaWVudE9wdGlvbnM6IEthbHR1cmFDbGllbnRPcHRpb25zLCBkZWZhdWx0UmVxdWVzdE9wdGlvbnM6IEthbHR1cmFSZXF1ZXN0T3B0aW9ucyk6IE9ic2VydmFibGU8eyB1cmw6IHN0cmluZyB9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBwcmVwYXJlUGFyYW1ldGVycyhyZXF1ZXN0LCBjbGllbnRPcHRpb25zLCBkZWZhdWx0UmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGNyZWF0ZUVuZHBvaW50KHJlcXVlc3QsIGNsaWVudE9wdGlvbnMsIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXSwgcGFyYW1ldGVyc1snYWN0aW9uJ10pO1xuICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1snc2VydmljZSddO1xuICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1snYWN0aW9uJ107XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZih7dXJsOiBidWlsZFVybChlbmRwb2ludFVybCwgcGFyYW1ldGVycyl9KTtcbiAgICB9XG59XG4iXX0=