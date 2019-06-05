/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaMatchMetadataConditionArgs() { }
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMatchMetadataConditionArgs.prototype.profileSystemName;
var KalturaMatchMetadataCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMatchMetadataCondition, _super);
    function KalturaMatchMetadataCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMatchMetadataCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMatchMetadataCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    };
    return KalturaMatchMetadataCondition;
}(KalturaMatchCondition));
export { KalturaMatchMetadataCondition };
if (false) {
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.xPath;
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.profileId;
    /** @type {?} */
    KalturaMatchMetadataCondition.prototype.profileSystemName;
}
typesMappingStorage['KalturaMatchMetadataCondition'] = KalturaMatchMetadataCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTM0YsSUFBQTtJQUFtRCx5REFBcUI7SUFNcEUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBbkNMO0VBV21ELHFCQUFxQixFQXlCdkUsQ0FBQTtBQXpCRCx5Q0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1hdGNoQ29uZGl0aW9uLCBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhTWF0Y2hDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIHtcbiAgICB4UGF0aD8gOiBzdHJpbmc7XG5cdHByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHByb2ZpbGVTeXN0ZW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhTWF0Y2hDb25kaXRpb24ge1xuXG4gICAgeFBhdGggOiBzdHJpbmc7XG5cdHByb2ZpbGVJZCA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHR4UGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvZmlsZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1hdGNoTWV0YWRhdGFDb25kaXRpb24nXSA9IEthbHR1cmFNYXRjaE1ldGFkYXRhQ29uZGl0aW9uOyJdfQ==