/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ReportGetCsvFromStringParamsActionArgs() { }
/** @type {?} */
ReportGetCsvFromStringParamsActionArgs.prototype.id;
/** @type {?|undefined} */
ReportGetCsvFromStringParamsActionArgs.prototype.params;
/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
ReportGetCsvFromStringParamsAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetCsvFromStringParamsAction, _super);
    function ReportGetCsvFromStringParamsAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    ReportGetCsvFromStringParamsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getCsvFromStringParams' },
            id: { type: 'n' },
            params: { type: 's' }
        });
        return result;
    };
    return ReportGetCsvFromStringParamsAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { ReportGetCsvFromStringParamsAction };
if (false) {
    /** @type {?} */
    ReportGetCsvFromStringParamsAction.prototype.id;
    /** @type {?} */
    ReportGetCsvFromStringParamsAction.prototype.params;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0Q3N2RnJvbVN0cmluZ1BhcmFtc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUmVwb3J0R2V0Q3N2RnJvbVN0cmluZ1BhcmFtc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckY7Ozs7Ozs7O0FBQUE7SUFBd0QsOERBQWtCO0lBS3RFLDRDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkNBMUNMO0VBbUJ3RCxrQkFBa0IsRUF3QnpFLENBQUE7Ozs7Ozs7OztBQXhCRCw4Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRDc3ZGcm9tU3RyaW5nUGFyYW1zQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0cGFyYW1zPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3JlcG9ydCcgYWN0aW9uICdnZXRDc3ZGcm9tU3RyaW5nUGFyYW1zJy5cbiAqXG4gKiBVc2FnZTogUmV0dXJucyByZXBvcnQgQ1NWIGZpbGUgZXhlY3V0ZWQgYnkgc3RyaW5nIHBhcmFtcyB3aXRoIHRoZSBmb2xsb3dpbmcgY29udmVudGlvbjogcGFyYW0xPXZhbHVlMTtwYXJhbTI9dmFsdWUyXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvcnRHZXRDc3ZGcm9tU3RyaW5nUGFyYW1zQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRwYXJhbXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0R2V0Q3N2RnJvbVN0cmluZ1BhcmFtc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRDc3ZGcm9tU3RyaW5nUGFyYW1zJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJhbXMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19