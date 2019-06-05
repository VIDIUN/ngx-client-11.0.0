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
export function AttachmentAssetUpdateActionArgs() { }
/** @type {?} */
AttachmentAssetUpdateActionArgs.prototype.id;
/** @type {?} */
AttachmentAssetUpdateActionArgs.prototype.attachmentAsset;
/**
 * Build request payload for service 'attachmentAsset' action 'update'.
 *
 * Usage: Update attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'attachmentAsset' action 'update'.
 *
 * Usage: Update attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
AttachmentAssetUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentAssetUpdateAction, _super);
    function AttachmentAssetUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAttachmentAsset', responseConstructor: KalturaAttachmentAsset }) || this;
    }
    /**
     * @return {?}
     */
    AttachmentAssetUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'attachment_attachmentasset' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            attachmentAsset: { type: 'o', subTypeConstructor: KalturaAttachmentAsset, subType: 'KalturaAttachmentAsset' }
        });
        return result;
    };
    return AttachmentAssetUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'attachmentAsset' action 'update'.
 *
 * Usage: Update attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export { AttachmentAssetUpdateAction };
if (false) {
    /** @type {?} */
    AttachmentAssetUpdateAction.prototype.id;
    /** @type {?} */
    AttachmentAssetUpdateAction.prototype.attachmentAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudEFzc2V0VXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9BdHRhY2htZW50QXNzZXRVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0M7SUFLbkYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBMUNMO0VBbUJpRCxjQUFjLEVBd0I5RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsdUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdHRhY2htZW50QXNzZXQgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50QXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBdHRhY2htZW50QXNzZXRVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdGF0dGFjaG1lbnRBc3NldCA6IEthbHR1cmFBdHRhY2htZW50QXNzZXQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhdHRhY2htZW50QXNzZXQnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGF0dGFjaG1lbnQgYXNzZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQXR0YWNobWVudEFzc2V0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50QXNzZXRVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQXR0YWNobWVudEFzc2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0YXR0YWNobWVudEFzc2V0IDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBdHRhY2htZW50QXNzZXRVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFBdHRhY2htZW50QXNzZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYXR0YWNobWVudF9hdHRhY2htZW50YXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF0dGFjaG1lbnRBc3NldCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=