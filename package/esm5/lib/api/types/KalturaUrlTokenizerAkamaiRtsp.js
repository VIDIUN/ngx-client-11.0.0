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
export function KalturaUrlTokenizerAkamaiRtspArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtspArgs.prototype.host;
/** @type {?|undefined} */
KalturaUrlTokenizerAkamaiRtspArgs.prototype.cpcode;
var KalturaUrlTokenizerAkamaiRtsp = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerAkamaiRtsp, _super);
    function KalturaUrlTokenizerAkamaiRtsp(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerAkamaiRtsp.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerAkamaiRtsp' },
            host: { type: 's' },
            cpcode: { type: 'n' }
        });
        return result;
    };
    return KalturaUrlTokenizerAkamaiRtsp;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerAkamaiRtsp };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtsp.prototype.host;
    /** @type {?} */
    KalturaUrlTokenizerAkamaiRtsp.prototype.cpcode;
}
typesMappingStorage['KalturaUrlTokenizerAkamaiRtsp'] = KalturaUrlTokenizerAkamaiRtsp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0c3AuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdHNwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBUXJGLElBQUE7SUFBbUQseURBQW1CO0lBS2xFLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0FoQ0w7RUFVbUQsbUJBQW1CLEVBdUJyRSxDQUFBO0FBdkJELHlDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFRva2VuaXplciwgS2FsdHVyYVVybFRva2VuaXplckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVcmxUb2tlbml6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdHNwQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB7XG4gICAgaG9zdD8gOiBzdHJpbmc7XG5cdGNwY29kZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdHNwIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplciB7XG5cbiAgICBob3N0IDogc3RyaW5nO1xuXHRjcGNvZGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdHNwQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxUb2tlbml6ZXJBa2FtYWlSdHNwJyB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNwY29kZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyQWthbWFpUnRzcCddID0gS2FsdHVyYVVybFRva2VuaXplckFrYW1haVJ0c3A7Il19