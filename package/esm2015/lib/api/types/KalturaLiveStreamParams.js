/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveStreamParams extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlU3RyZWFtUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsTUFBTSw4QkFBK0IsU0FBUSxpQkFBaUI7Ozs7SUFXMUQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYml0cmF0ZT8gOiBudW1iZXI7XG5cdGZsYXZvcklkPyA6IHN0cmluZztcblx0d2lkdGg/IDogbnVtYmVyO1xuXHRoZWlnaHQ/IDogbnVtYmVyO1xuXHRjb2RlYz8gOiBzdHJpbmc7XG5cdGZyYW1lUmF0ZT8gOiBudW1iZXI7XG5cdGtleUZyYW1lSW50ZXJ2YWw/IDogbnVtYmVyO1xuXHRsYW5ndWFnZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgYml0cmF0ZSA6IG51bWJlcjtcblx0Zmxhdm9ySWQgOiBzdHJpbmc7XG5cdHdpZHRoIDogbnVtYmVyO1xuXHRoZWlnaHQgOiBudW1iZXI7XG5cdGNvZGVjIDogc3RyaW5nO1xuXHRmcmFtZVJhdGUgOiBudW1iZXI7XG5cdGtleUZyYW1lSW50ZXJ2YWwgOiBudW1iZXI7XG5cdGxhbmd1YWdlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVN0cmVhbVBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbVBhcmFtcycgfSxcblx0XHRcdFx0Yml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoZWlnaHQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29kZWMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnJhbWVSYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGtleUZyYW1lSW50ZXJ2YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1QYXJhbXMnXSA9IEthbHR1cmFMaXZlU3RyZWFtUGFyYW1zOyJdfQ==