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
export function KalturaUrlTokenizerVnptArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerVnptArgs.prototype.tokenizationFormat;
/** @type {?|undefined} */
KalturaUrlTokenizerVnptArgs.prototype.shouldIncludeClientIp;
var KalturaUrlTokenizerVnpt = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerVnpt, _super);
    function KalturaUrlTokenizerVnpt(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerVnpt.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerVnpt' },
            tokenizationFormat: { type: 'n' },
            shouldIncludeClientIp: { type: 'b' }
        });
        return result;
    };
    return KalturaUrlTokenizerVnpt;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerVnpt };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerVnpt.prototype.tokenizationFormat;
    /** @type {?} */
    KalturaUrlTokenizerVnpt.prototype.shouldIncludeClientIp;
}
typesMappingStorage['KalturaUrlTokenizerVnpt'] = KalturaUrlTokenizerVnpt;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplclZucHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJWbnB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBUXJGLElBQUE7SUFBNkMsbURBQW1CO0lBSzVELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQWhDTDtFQVU2QyxtQkFBbUIsRUF1Qi9ELENBQUE7QUF2QkQsbUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXJsVG9rZW5pemVyLCBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVVybFRva2VuaXplcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVybFRva2VuaXplclZucHRBcmdzICBleHRlbmRzIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIHtcbiAgICB0b2tlbml6YXRpb25Gb3JtYXQ/IDogbnVtYmVyO1xuXHRzaG91bGRJbmNsdWRlQ2xpZW50SXA/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVybFRva2VuaXplclZucHQgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyIHtcblxuICAgIHRva2VuaXphdGlvbkZvcm1hdCA6IG51bWJlcjtcblx0c2hvdWxkSW5jbHVkZUNsaWVudElwIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFRva2VuaXplclZucHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVybFRva2VuaXplclZucHQnIH0sXG5cdFx0XHRcdHRva2VuaXphdGlvbkZvcm1hdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaG91bGRJbmNsdWRlQ2xpZW50SXAgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVybFRva2VuaXplclZucHQnXSA9IEthbHR1cmFVcmxUb2tlbml6ZXJWbnB0OyJdfQ==