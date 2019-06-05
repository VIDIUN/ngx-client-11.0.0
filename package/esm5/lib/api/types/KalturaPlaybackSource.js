/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlaybackSourceArgs() { }
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.deliveryProfileId;
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.format;
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.protocols;
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.flavorIds;
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.url;
/** @type {?|undefined} */
KalturaPlaybackSourceArgs.prototype.drm;
var KalturaPlaybackSource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaybackSource, _super);
    function KalturaPlaybackSource(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.drm === 'undefined')
            _this.drm = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPlaybackSource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaybackSource' },
            deliveryProfileId: { type: 's' },
            format: { type: 's' },
            protocols: { type: 's' },
            flavorIds: { type: 's' },
            url: { type: 's' },
            drm: { type: 'a', subTypeConstructor: KalturaDrmPlaybackPluginData, subType: 'KalturaDrmPlaybackPluginData' }
        });
        return result;
    };
    return KalturaPlaybackSource;
}(KalturaObjectBase));
export { KalturaPlaybackSource };
if (false) {
    /** @type {?} */
    KalturaPlaybackSource.prototype.deliveryProfileId;
    /** @type {?} */
    KalturaPlaybackSource.prototype.format;
    /** @type {?} */
    KalturaPlaybackSource.prototype.protocols;
    /** @type {?} */
    KalturaPlaybackSource.prototype.flavorIds;
    /** @type {?} */
    KalturaPlaybackSource.prototype.url;
    /** @type {?} */
    KalturaPlaybackSource.prototype.drm;
}
typesMappingStorage['KalturaPlaybackSource'] = KalturaPlaybackSource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXliYWNrU291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWJhY2tTb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRixJQUFBO0lBQTJDLGlEQUFpQjtJQVN4RCwrQkFBWSxJQUFpQztRQUE3QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOztLQUN0RDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBOUNMO0VBZTJDLGlCQUFpQixFQWdDM0QsQ0FBQTtBQWhDRCxpQ0FnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSB9IGZyb20gJy4vS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXliYWNrU291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGRlbGl2ZXJ5UHJvZmlsZUlkPyA6IHN0cmluZztcblx0Zm9ybWF0PyA6IHN0cmluZztcblx0cHJvdG9jb2xzPyA6IHN0cmluZztcblx0Zmxhdm9ySWRzPyA6IHN0cmluZztcblx0dXJsPyA6IHN0cmluZztcblx0ZHJtPyA6IEthbHR1cmFEcm1QbGF5YmFja1BsdWdpbkRhdGFbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXliYWNrU291cmNlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZGVsaXZlcnlQcm9maWxlSWQgOiBzdHJpbmc7XG5cdGZvcm1hdCA6IHN0cmluZztcblx0cHJvdG9jb2xzIDogc3RyaW5nO1xuXHRmbGF2b3JJZHMgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblx0ZHJtIDogS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheWJhY2tTb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kcm0gPT09ICd1bmRlZmluZWQnKSB0aGlzLmRybSA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5YmFja1NvdXJjZScgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcm9maWxlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3RvY29scyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRybSA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVBsYXliYWNrUGx1Z2luRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUGxheWJhY2tQbHVnaW5EYXRhJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWJhY2tTb3VyY2UnXSA9IEthbHR1cmFQbGF5YmFja1NvdXJjZTsiXX0=