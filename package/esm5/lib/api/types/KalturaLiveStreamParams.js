/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStreamParamsArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.bitrate;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.flavorId;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.width;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.height;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.codec;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.frameRate;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.keyFrameInterval;
/** @type {?|undefined} */
KalturaLiveStreamParamsArgs.prototype.language;
var KalturaLiveStreamParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamParams, _super);
    function KalturaLiveStreamParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamParams' },
            bitrate: { type: 'n' },
            flavorId: { type: 's' },
            width: { type: 'n' },
            height: { type: 'n' },
            codec: { type: 's' },
            frameRate: { type: 'n' },
            keyFrameInterval: { type: 'n' },
            language: { type: 's' }
        });
        return result;
    };
    return KalturaLiveStreamParams;
}(KalturaObjectBase));
export { KalturaLiveStreamParams };
if (false) {
    /** @type {?} */
    KalturaLiveStreamParams.prototype.bitrate;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.flavorId;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.width;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.height;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.codec;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.frameRate;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.keyFrameInterval;
    /** @type {?} */
    KalturaLiveStreamParams.prototype.language;
}
typesMappingStorage['KalturaLiveStreamParams'] = KalturaLiveStreamParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlU3RyZWFtUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xGLElBQUE7SUFBNkMsbURBQWlCO0lBVzFELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0FsREw7RUFnQjZDLGlCQUFpQixFQW1DN0QsQ0FBQTtBQW5DRCxtQ0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0cmVhbVBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBiaXRyYXRlPyA6IG51bWJlcjtcblx0Zmxhdm9ySWQ/IDogc3RyaW5nO1xuXHR3aWR0aD8gOiBudW1iZXI7XG5cdGhlaWdodD8gOiBudW1iZXI7XG5cdGNvZGVjPyA6IHN0cmluZztcblx0ZnJhbWVSYXRlPyA6IG51bWJlcjtcblx0a2V5RnJhbWVJbnRlcnZhbD8gOiBudW1iZXI7XG5cdGxhbmd1YWdlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBiaXRyYXRlIDogbnVtYmVyO1xuXHRmbGF2b3JJZCA6IHN0cmluZztcblx0d2lkdGggOiBudW1iZXI7XG5cdGhlaWdodCA6IG51bWJlcjtcblx0Y29kZWMgOiBzdHJpbmc7XG5cdGZyYW1lUmF0ZSA6IG51bWJlcjtcblx0a2V5RnJhbWVJbnRlcnZhbCA6IG51bWJlcjtcblx0bGFuZ3VhZ2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlU3RyZWFtUGFyYW1zJyB9LFxuXHRcdFx0XHRiaXRyYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZsYXZvcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb2RlYyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmcmFtZVJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0a2V5RnJhbWVJbnRlcnZhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbVBhcmFtcyddID0gS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXM7Il19