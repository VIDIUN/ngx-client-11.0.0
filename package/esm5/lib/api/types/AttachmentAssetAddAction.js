/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AttachmentAssetAddActionArgs() { }
/** @type {?} */
AttachmentAssetAddActionArgs.prototype.entryId;
/** @type {?} */
AttachmentAssetAddActionArgs.prototype.attachmentAsset;
/**
 * Build request payload for service 'attachmentAsset' action 'add'.
 *
 * Usage: Add attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'attachmentAsset' action 'add'.
 *
 * Usage: Add attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
AttachmentAssetAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentAssetAddAction, _super);
    function AttachmentAssetAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAttachmentAsset', responseConstructor: KalturaAttachmentAsset }) || this;
    }
    /**
     * @return {?}
     */
    AttachmentAssetAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'attachment_attachmentasset' },
            action: { type: 'c', default: 'add' },
            entryId: { type: 's' },
            attachmentAsset: { type: 'o', subTypeConstructor: KalturaAttachmentAsset, subType: 'KalturaAttachmentAsset' }
        });
        return result;
    };
    return AttachmentAssetAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'attachmentAsset' action 'add'.
 *
 * Usage: Add attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export { AttachmentAssetAddAction };
if (false) {
    /** @type {?} */
    AttachmentAssetAddAction.prototype.entryId;
    /** @type {?} */
    AttachmentAssetAddAction.prototype.attachmentAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudEFzc2V0QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9BdHRhY2htZW50QXNzZXRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBc0M7SUFLaEYsa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBMUNMO0VBbUI4QyxjQUFjLEVBd0IzRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsb0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdHRhY2htZW50QXNzZXQgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50QXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBdHRhY2htZW50QXNzZXRBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0YXR0YWNobWVudEFzc2V0IDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2F0dGFjaG1lbnRBc3NldCcgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgYXR0YWNobWVudCBhc3NldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFBdHRhY2htZW50QXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRBc3NldEFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFBdHRhY2htZW50QXNzZXQ+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGF0dGFjaG1lbnRBc3NldCA6IEthbHR1cmFBdHRhY2htZW50QXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQXR0YWNobWVudEFzc2V0QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRhY2htZW50QXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2F0dGFjaG1lbnRfYXR0YWNobWVudGFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF0dGFjaG1lbnRBc3NldCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=