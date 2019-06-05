/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BulkGetActionArgs() { }
/** @type {?} */
BulkGetActionArgs.prototype.id;
/**
 * Build request payload for service 'bulk' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'bulk' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
BulkGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(BulkGetAction, _super);
    function BulkGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    BulkGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'bulkupload_bulk' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return BulkGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'bulk' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { BulkGetAction };
if (false) {
    /** @type {?} */
    BulkGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVsa0dldEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQnVsa0dldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFtQyx5Q0FBaUM7SUFJaEUsdUJBQVksSUFBd0I7ZUFFaEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3QkF2Q0w7RUFrQm1DLGNBQWMsRUFzQmhELENBQUE7Ozs7Ozs7OztBQXRCRCx5QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWQgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVsa0dldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2J1bGsnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IGJ1bGsgdXBsb2FkIGJhdGNoIGpvYiBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdWxrVXBsb2FkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWxrR2V0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJ1bGtHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidWxrdXBsb2FkX2J1bGsnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==