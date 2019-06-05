/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryAddContentActionArgs() { }
/** @type {?} */
BaseEntryAddContentActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryAddContentActionArgs.prototype.resource;
/**
 * Build request payload for service 'baseEntry' action 'addContent'.
 *
 * Usage: Attach content resource to entry in status NO_MEDIA
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'addContent'.
 *
 * Usage: Attach content resource to entry in status NO_MEDIA
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
BaseEntryAddContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryAddContentAction, _super);
    function BaseEntryAddContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryAddContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'addContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaResource, subType: 'KalturaResource' }
        });
        return result;
    };
    return BaseEntryAddContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'addContent'.
 *
 * Usage: Attach content resource to entry in status NO_MEDIA
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryAddContentAction };
if (false) {
    /** @type {?} */
    BaseEntryAddContentAction.prototype.entryId;
    /** @type {?} */
    BaseEntryAddContentAction.prototype.resource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5QWRkQ29udGVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmFzZUVudHJ5QWRkQ29udGVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBZ0M7SUFLM0UsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDbkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0EzQ0w7RUFvQitDLGNBQWMsRUF3QjVELENBQUE7Ozs7Ozs7OztBQXhCRCxxQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYVJlc291cmNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VFbnRyeUFkZENvbnRlbnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2UgOiBLYWx0dXJhUmVzb3VyY2U7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAnYWRkQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IEF0dGFjaCBjb250ZW50IHJlc291cmNlIHRvIGVudHJ5IGluIHN0YXR1cyBOT19NRURJQVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeUFkZENvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlBZGRDb250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Jhc2VlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZENvbnRlbnQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==