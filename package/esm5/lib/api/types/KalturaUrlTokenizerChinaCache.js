/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaChinaCacheAlgorithmType } from './KalturaChinaCacheAlgorithmType';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
/**
 * @record
 */
export function KalturaUrlTokenizerChinaCacheArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerChinaCacheArgs.prototype.algorithmId;
/** @type {?|undefined} */
KalturaUrlTokenizerChinaCacheArgs.prototype.keyId;
var KalturaUrlTokenizerChinaCache = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerChinaCache, _super);
    function KalturaUrlTokenizerChinaCache(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerChinaCache.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerChinaCache' },
            algorithmId: { type: 'en', subTypeConstructor: KalturaChinaCacheAlgorithmType, subType: 'KalturaChinaCacheAlgorithmType' },
            keyId: { type: 'n' }
        });
        return result;
    };
    return KalturaUrlTokenizerChinaCache;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerChinaCache };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerChinaCache.prototype.algorithmId;
    /** @type {?} */
    KalturaUrlTokenizerChinaCache.prototype.keyId;
}
typesMappingStorage['KalturaUrlTokenizerChinaCache'] = KalturaUrlTokenizerChinaCache;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckNoaW5hQ2FjaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBUXJGLElBQUE7SUFBbUQseURBQW1CO0lBS2xFLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDOUgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBakNMO0VBV21ELG1CQUFtQixFQXVCckUsQ0FBQTtBQXZCRCx5Q0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDaGluYUNhY2hlQWxnb3JpdGhtVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNoaW5hQ2FjaGVBbGdvcml0aG1UeXBlJztcbmltcG9ydCB7IEthbHR1cmFVcmxUb2tlbml6ZXIsIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplckFyZ3Mge1xuICAgIGFsZ29yaXRobUlkPyA6IEthbHR1cmFDaGluYUNhY2hlQWxnb3JpdGhtVHlwZTtcblx0a2V5SWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZSBleHRlbmRzIEthbHR1cmFVcmxUb2tlbml6ZXIge1xuXG4gICAgYWxnb3JpdGhtSWQgOiBLYWx0dXJhQ2hpbmFDYWNoZUFsZ29yaXRobVR5cGU7XG5cdGtleUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZScgfSxcblx0XHRcdFx0YWxnb3JpdGhtSWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2hpbmFDYWNoZUFsZ29yaXRobVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNoaW5hQ2FjaGVBbGdvcml0aG1UeXBlJyB9LFxuXHRcdFx0XHRrZXlJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZSddID0gS2FsdHVyYVVybFRva2VuaXplckNoaW5hQ2FjaGU7Il19