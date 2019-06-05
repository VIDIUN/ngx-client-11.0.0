/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaMetadataFieldArgs() { }
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMetadataFieldArgs.prototype.profileSystemName;
var KalturaMetadataField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataField, _super);
    function KalturaMetadataField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataField' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    };
    return KalturaMetadataField;
}(KalturaStringField));
export { KalturaMetadataField };
if (false) {
    /** @type {?} */
    KalturaMetadataField.prototype.xPath;
    /** @type {?} */
    KalturaMetadataField.prototype.profileId;
    /** @type {?} */
    KalturaMetadataField.prototype.profileSystemName;
}
typesMappingStorage['KalturaMetadataField'] = KalturaMetadataField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhRmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZXRhZGF0YUZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUEwQyxnREFBa0I7SUFNeEQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBbkNMO0VBVzBDLGtCQUFrQixFQXlCM0QsQ0FBQTtBQXpCRCxnQ0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ0ZpZWxkLCBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YUZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIHtcbiAgICB4UGF0aD8gOiBzdHJpbmc7XG5cdHByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHByb2ZpbGVTeXN0ZW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhRmllbGQgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGQge1xuXG4gICAgeFBhdGggOiBzdHJpbmc7XG5cdHByb2ZpbGVJZCA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YUZpZWxkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZXRhZGF0YUZpZWxkJyB9LFxuXHRcdFx0XHR4UGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvZmlsZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldGFkYXRhRmllbGQnXSA9IEthbHR1cmFNZXRhZGF0YUZpZWxkOyJdfQ==