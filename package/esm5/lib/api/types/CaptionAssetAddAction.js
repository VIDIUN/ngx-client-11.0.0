/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetAddActionArgs() { }
/** @type {?} */
CaptionAssetAddActionArgs.prototype.entryId;
/** @type {?} */
CaptionAssetAddActionArgs.prototype.captionAsset;
/**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
CaptionAssetAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetAddAction, _super);
    function CaptionAssetAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionAsset', responseConstructor: KalturaCaptionAsset }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'add' },
            entryId: { type: 's' },
            captionAsset: { type: 'o', subTypeConstructor: KalturaCaptionAsset, subType: 'KalturaCaptionAsset' }
        });
        return result;
    };
    return CaptionAssetAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetAddAction };
if (false) {
    /** @type {?} */
    CaptionAssetAddAction.prototype.entryId;
    /** @type {?} */
    CaptionAssetAddAction.prototype.captionAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXB0aW9uQXNzZXRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBbUM7SUFLMUUsK0JBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUcsbUJBQW1CLEVBQUcsQ0FBQztLQUMxSDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQy9GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBMUNMO0VBbUIyQyxjQUFjLEVBd0J4RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsaUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXQgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uQXNzZXRBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y2FwdGlvbkFzc2V0IDogS2FsdHVyYUNhcHRpb25Bc3NldDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhcHRpb25Bc3NldCcgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgY2FwdGlvbiBhc3NldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uQXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhcHRpb25Bc3NldEFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDYXB0aW9uQXNzZXQ+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldCA6IEthbHR1cmFDYXB0aW9uQXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2FwdGlvbkFzc2V0QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhcHRpb25fY2FwdGlvbmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=