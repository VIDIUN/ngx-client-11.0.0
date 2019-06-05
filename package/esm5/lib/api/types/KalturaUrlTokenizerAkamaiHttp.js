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
export function KalturaUrlTokenizerAkamaiHttpArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiHttpArgs.prototype.paramName;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiHttpArgs.prototype.rootDir;
var KalturaUrlTokenizerAkamaiHttp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerAkamaiHttp, _super);
    function KalturaUrlTokenizerAkamaiHttp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerAkamaiHttp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerAkamaiHttp' },
            paramName: { type: 's' },
            rootDir: { type: 's' }
        });
        return result;
    };
    return KalturaUrlTokenizerAkamaiHttp;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerAkamaiHttp };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerAkamaiHttp.prototype.paramName;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiHttp.prototype.rootDir;
}
typesMappingStorage['KalturaUrlTokenizerAkamaiHttp'] = KalturaUrlTokenizerAkamaiHttp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBUXJGLElBQUE7SUFBbUQseURBQW1CO0lBS2xFLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0FoQ0w7RUFVbUQsbUJBQW1CLEVBdUJyRSxDQUFBO0FBdkJELHlDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFRva2VuaXplciwgS2FsdHVyYVVybFRva2VuaXplckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVcmxUb2tlbml6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB7XG4gICAgcGFyYW1OYW1lPyA6IHN0cmluZztcblx0cm9vdERpcj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplciB7XG5cbiAgICBwYXJhbU5hbWUgOiBzdHJpbmc7XG5cdHJvb3REaXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlIdHRwJyB9LFxuXHRcdFx0XHRwYXJhbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9vdERpciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpSHR0cCddID0gS2FsdHVyYVVybFRva2VuaXplckFrYW1haUh0dHA7Il19