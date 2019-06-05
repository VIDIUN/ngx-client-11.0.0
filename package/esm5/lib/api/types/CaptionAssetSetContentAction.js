/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetSetContentActionArgs() { }
/** @type {?} */
CaptionAssetSetContentActionArgs.prototype.id;
/** @type {?} */
CaptionAssetSetContentActionArgs.prototype.contentResource;
/**
 * Build request payload for service 'captionAsset' action 'setContent'.
 *
 * Usage: Update content of caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAsset' action 'setContent'.
 *
 * Usage: Update content of caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
CaptionAssetSetContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetSetContentAction, _super);
    function CaptionAssetSetContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionAsset', responseConstructor: KalturaCaptionAsset }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetSetContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'setContent' },
            id: { type: 's' },
            contentResource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' }
        });
        return result;
    };
    return CaptionAssetSetContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAsset' action 'setContent'.
 *
 * Usage: Update content of caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetSetContentAction };
if (false) {
    /** @type {?} */
    CaptionAssetSetContentAction.prototype.id;
    /** @type {?} */
    CaptionAssetSetContentAction.prototype.contentResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0U2V0Q29udGVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvbkFzc2V0U2V0Q29udGVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUFtQztJQUtqRixzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRyxtQkFBbUIsRUFBRyxDQUFDO0tBQzFIOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0EzQ0w7RUFvQmtELGNBQWMsRUF3Qi9ELENBQUE7Ozs7Ozs7OztBQXhCRCx3Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldCB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldCc7XG5cbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFDb250ZW50UmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvbkFzc2V0U2V0Q29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0Y29udGVudFJlc291cmNlIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhcHRpb25Bc3NldCcgYWN0aW9uICdzZXRDb250ZW50Jy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGNvbnRlbnQgb2YgY2FwdGlvbiBhc3NldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uQXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhcHRpb25Bc3NldFNldENvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ2FwdGlvbkFzc2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0Y29udGVudFJlc291cmNlIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXB0aW9uQXNzZXRTZXRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhcHRpb25fY2FwdGlvbmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2V0Q29udGVudCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudFJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGVudFJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250ZW50UmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==