/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ExternalMediaGetActionArgs() { }
/** @type {?} */
ExternalMediaGetActionArgs.prototype.id;
/**
 * Build request payload for service 'externalMedia' action 'get'.
 *
 * Usage: Get external media entry by ID
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'externalMedia' action 'get'.
 *
 * Usage: Get external media entry by ID
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
ExternalMediaGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalMediaGetAction, _super);
    function ExternalMediaGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaExternalMediaEntry', responseConstructor: KalturaExternalMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    ExternalMediaGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'externalmedia_externalmedia' },
            action: { type: 'c', default: 'get' },
            id: { type: 's' }
        });
        return result;
    };
    return ExternalMediaGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'externalMedia' action 'get'.
 *
 * Usage: Get external media entry by ID
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { ExternalMediaGetAction };
if (false) {
    /** @type {?} */
    ExternalMediaGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZXJuYWxNZWRpYUdldEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXh0ZXJuYWxNZWRpYUdldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBeUM7SUFJakYsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUcseUJBQXlCLEVBQUcsQ0FBQztLQUN0STs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQzdFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F2Q0w7RUFrQjRDLGNBQWMsRUFzQnpELENBQUE7Ozs7Ozs7OztBQXRCRCxrQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsTWVkaWFHZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdleHRlcm5hbE1lZGlhJyBhY3Rpb24gJ2dldCcuXG4gKlxuICogVXNhZ2U6IEdldCBleHRlcm5hbCBtZWRpYSBlbnRyeSBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsTWVkaWFHZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFeHRlcm5hbE1lZGlhR2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4dGVybmFsbWVkaWFfZXh0ZXJuYWxtZWRpYScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19