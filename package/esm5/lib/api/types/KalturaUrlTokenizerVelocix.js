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
export function KalturaUrlTokenizerVelocixArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerVelocixArgs.prototype.hdsPaths;
/** @type {?|undefined} */
KalturaUrlTokenizerVelocixArgs.prototype.paramName;
/** @type {?|undefined} */
KalturaUrlTokenizerVelocixArgs.prototype.authPrefix;
var KalturaUrlTokenizerVelocix = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerVelocix, _super);
    function KalturaUrlTokenizerVelocix(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerVelocix.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerVelocix' },
            hdsPaths: { type: 's' },
            paramName: { type: 's' },
            authPrefix: { type: 's' }
        });
        return result;
    };
    return KalturaUrlTokenizerVelocix;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerVelocix };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerVelocix.prototype.hdsPaths;
    /** @type {?} */
    KalturaUrlTokenizerVelocix.prototype.paramName;
    /** @type {?} */
    KalturaUrlTokenizerVelocix.prototype.authPrefix;
}
typesMappingStorage['KalturaUrlTokenizerVelocix'] = KalturaUrlTokenizerVelocix;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplclZlbG9jaXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJWZWxvY2l4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTckYsSUFBQTtJQUFnRCxzREFBbUI7SUFNL0Qsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQW5DTDtFQVdnRCxtQkFBbUIsRUF5QmxFLENBQUE7QUF6QkQsc0NBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcmxUb2tlbml6ZXIsIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsVG9rZW5pemVyVmVsb2NpeEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplckFyZ3Mge1xuICAgIGhkc1BhdGhzPyA6IHN0cmluZztcblx0cGFyYW1OYW1lPyA6IHN0cmluZztcblx0YXV0aFByZWZpeD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxUb2tlbml6ZXJWZWxvY2l4IGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplciB7XG5cbiAgICBoZHNQYXRocyA6IHN0cmluZztcblx0cGFyYW1OYW1lIDogc3RyaW5nO1xuXHRhdXRoUHJlZml4IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXJsVG9rZW5pemVyVmVsb2NpeEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXJsVG9rZW5pemVyVmVsb2NpeCcgfSxcblx0XHRcdFx0aGRzUGF0aHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyYW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1dGhQcmVmaXggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVybFRva2VuaXplclZlbG9jaXgnXSA9IEthbHR1cmFVcmxUb2tlbml6ZXJWZWxvY2l4OyJdfQ==