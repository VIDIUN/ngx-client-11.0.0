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
export function KalturaUrlTokenizerKsArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerKsArgs.prototype.usePath;
/** @type {?|undefined} */
KalturaUrlTokenizerKsArgs.prototype.additionalUris;
var KalturaUrlTokenizerKs = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizerKs, _super);
    function KalturaUrlTokenizerKs(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizerKs.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizerKs' },
            usePath: { type: 'b' },
            additionalUris: { type: 's' }
        });
        return result;
    };
    return KalturaUrlTokenizerKs;
}(KalturaUrlTokenizer));
export { KalturaUrlTokenizerKs };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerKs.prototype.usePath;
    /** @type {?} */
    KalturaUrlTokenizerKs.prototype.additionalUris;
}
typesMappingStorage['KalturaUrlTokenizerKs'] = KalturaUrlTokenizerKs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplcktzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXJsVG9rZW5pemVyS3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFRckYsSUFBQTtJQUEyQyxpREFBbUI7SUFLMUQsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FoQ0w7RUFVMkMsbUJBQW1CLEVBdUI3RCxDQUFBO0FBdkJELGlDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFRva2VuaXplciwgS2FsdHVyYVVybFRva2VuaXplckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVcmxUb2tlbml6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcmxUb2tlbml6ZXJLc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplckFyZ3Mge1xuICAgIHVzZVBhdGg/IDogYm9vbGVhbjtcblx0YWRkaXRpb25hbFVyaXM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXJsVG9rZW5pemVyS3MgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyIHtcblxuICAgIHVzZVBhdGggOiBib29sZWFuO1xuXHRhZGRpdGlvbmFsVXJpcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFRva2VuaXplcktzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxUb2tlbml6ZXJLcycgfSxcblx0XHRcdFx0dXNlUGF0aCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhZGRpdGlvbmFsVXJpcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXJsVG9rZW5pemVyS3MnXSA9IEthbHR1cmFVcmxUb2tlbml6ZXJLczsiXX0=