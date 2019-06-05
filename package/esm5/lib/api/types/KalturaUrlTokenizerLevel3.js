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
export function KalturaUrlTokenizerLevel3Args() { }
/** @type {?|undefined} */
KalturaUrlTokenizerLevel3Args.prototype.paramName;
/** @type {?|undefined} */
KalturaUrlTokenizerLevel3Args.prototype.expiryName;
/** @type {?|undefined} */
KalturaUrlTokenizerLevel3Args.prototype.gen;
var KalturaUrlTokenizerLevel3 = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerLevel3, _super);
    function KalturaUrlTokenizerLevel3(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerLevel3.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerLevel3' },
            paramName: { type: 's' },
            expiryName: { type: 's' },
            gen: { type: 's' }
        });
        return result;
    };
    return KalturaUrlTokenizerLevel3;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerLevel3 };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerLevel3.prototype.paramName;
    /** @type {?} */
    KalturaUrlTokenizerLevel3.prototype.expiryName;
    /** @type {?} */
    KalturaUrlTokenizerLevel3.prototype.gen;
}
typesMappingStorage['KalturaUrlTokenizerLevel3'] = KalturaUrlTokenizerLevel3;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckxldmVsMy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVybFRva2VuaXplckxldmVsMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7O0FBU3JGLElBQUE7SUFBK0MscURBQW1CO0lBTTlELG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQW5DTDtFQVcrQyxtQkFBbUIsRUF5QmpFLENBQUE7QUF6QkQscUNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVcmxUb2tlbml6ZXIsIEthbHR1cmFVcmxUb2tlbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsVG9rZW5pemVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXJsVG9rZW5pemVyTGV2ZWwzQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB7XG4gICAgcGFyYW1OYW1lPyA6IHN0cmluZztcblx0ZXhwaXJ5TmFtZT8gOiBzdHJpbmc7XG5cdGdlbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxUb2tlbml6ZXJMZXZlbDMgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyIHtcblxuICAgIHBhcmFtTmFtZSA6IHN0cmluZztcblx0ZXhwaXJ5TmFtZSA6IHN0cmluZztcblx0Z2VuIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXJsVG9rZW5pemVyTGV2ZWwzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxUb2tlbml6ZXJMZXZlbDMnIH0sXG5cdFx0XHRcdHBhcmFtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHBpcnlOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGdlbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyTGV2ZWwzJ10gPSBLYWx0dXJhVXJsVG9rZW5pemVyTGV2ZWwzOyJdfQ==