/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
/**
 * @record
 */
export function KalturaUrlTokenizerAkamaiRtmpArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtmpArgs.prototype.profile;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtmpArgs.prototype.type;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtmpArgs.prototype.aifp;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtmpArgs.prototype.usePrefix;
var KalturaUrlTokenizerAkamaiRtmp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerAkamaiRtmp, _super);
    function KalturaUrlTokenizerAkamaiRtmp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerAkamaiRtmp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerAkamaiRtmp' },
            profile: { type: 's' },
            type: { type: 's' },
            aifp: { type: 's' },
            usePrefix: { type: 'b' }
        });
        return result;
    };
    return KalturaUrlTokenizerAkamaiRtmp;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerAkamaiRtmp };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtmp.prototype.profile;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtmp.prototype.type;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtmp.prototype.aifp;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtmp.prototype.usePrefix;
}
typesMappingStorage['KalturaUrlTokenizerAkamaiRtmp'] = KalturaUrlTokenizerAkamaiRtmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0bXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdG1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVyRixJQUFBO0lBQW1ELHlEQUFtQjtJQU9sRSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0F0Q0w7RUFZbUQsbUJBQW1CLEVBMkJyRSxDQUFBO0FBM0JELHlDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcmxUb2tlbml6ZXIsIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpUnRtcEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplckFyZ3Mge1xuICAgIHByb2ZpbGU/IDogc3RyaW5nO1xuXHR0eXBlPyA6IHN0cmluZztcblx0YWlmcD8gOiBzdHJpbmc7XG5cdHVzZVByZWZpeD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpUnRtcCBleHRlbmRzIEthbHR1cmFVcmxUb2tlbml6ZXIge1xuXG4gICAgcHJvZmlsZSA6IHN0cmluZztcblx0dHlwZSA6IHN0cmluZztcblx0YWlmcCA6IHN0cmluZztcblx0dXNlUHJlZml4IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0bXBBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0bXAnIH0sXG5cdFx0XHRcdHByb2ZpbGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhaWZwIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZVByZWZpeCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpUnRtcCddID0gS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0bXA7Il19