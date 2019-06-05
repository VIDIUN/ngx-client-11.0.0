/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbAssetSetContentActionArgs() { }
/** @type {?} */
ThumbAssetSetContentActionArgs.prototype.id;
/** @type {?} */
ThumbAssetSetContentActionArgs.prototype.contentResource;
/**
 * Build request payload for service 'thumbAsset' action 'setContent'.
 *
 * Usage: Update content of thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbAsset' action 'setContent'.
 *
 * Usage: Update content of thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
ThumbAssetSetContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbAssetSetContentAction, _super);
    function ThumbAssetSetContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaThumbAsset', responseConstructor: KalturaThumbAsset }) || this;
    }
    /**
     * @return {?}
     */
    ThumbAssetSetContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'setContent' },
            id: { type: 's' },
            contentResource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' }
        });
        return result;
    };
    return ThumbAssetSetContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbAsset' action 'setContent'.
 *
 * Usage: Update content of thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export { ThumbAssetSetContentAction };
if (false) {
    /** @type {?} */
    ThumbAssetSetContentAction.prototype.id;
    /** @type {?} */
    ThumbAssetSetContentAction.prototype.contentResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNldENvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iQXNzZXRTZXRDb250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQWlDO0lBSzdFLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0EzQ0w7RUFvQmdELGNBQWMsRUF3QjdELENBQUE7Ozs7Ozs7OztBQXhCRCxzQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iQXNzZXQgfSBmcm9tICcuL0thbHR1cmFUaHVtYkFzc2V0JztcblxuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBUaHVtYkFzc2V0U2V0Q29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0Y29udGVudFJlc291cmNlIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RodW1iQXNzZXQnIGFjdGlvbiAnc2V0Q29udGVudCcuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBjb250ZW50IG9mIHRodW1ibmFpbCBhc3NldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFUaHVtYkFzc2V0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYkFzc2V0U2V0Q29udGVudEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFUaHVtYkFzc2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0Y29udGVudFJlc291cmNlIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUaHVtYkFzc2V0U2V0Q29udGVudEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVRodW1iQXNzZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iQXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3RodW1iYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXRDb250ZW50JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50UmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRlbnRSZXNvdXJjZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19