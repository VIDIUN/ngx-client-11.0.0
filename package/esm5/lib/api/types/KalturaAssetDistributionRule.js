/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetDistributionCondition } from './KalturaAssetDistributionCondition';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAssetDistributionRuleArgs() { }
/** @type {?|undefined} */
KalturaAssetDistributionRuleArgs.prototype.validationError;
/** @type {?|undefined} */
KalturaAssetDistributionRuleArgs.prototype.assetDistributionConditions;
var KalturaAssetDistributionRule = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetDistributionRule, _super);
    function KalturaAssetDistributionRule(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.assetDistributionConditions === 'undefined')
            _this.assetDistributionConditions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAssetDistributionRule.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetDistributionRule' },
            validationError: { type: 's' },
            assetDistributionConditions: { type: 'a', subTypeConstructor: KalturaAssetDistributionCondition, subType: 'KalturaAssetDistributionCondition' }
        });
        return result;
    };
    return KalturaAssetDistributionRule;
}(KalturaObjectBase));
export { KalturaAssetDistributionRule };
if (false) {
    /** @type {?} */
    KalturaAssetDistributionRule.prototype.validationError;
    /** @type {?} */
    KalturaAssetDistributionRule.prototype.assetDistributionConditions;
}
typesMappingStorage['KalturaAssetDistributionRule'] = KalturaAssetDistributionRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixJQUFBO0lBQWtELHdEQUFpQjtJQUsvRCxzQ0FBWSxJQUF3QztRQUFwRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsMkJBQTJCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLDJCQUEyQixHQUFHLEVBQUUsQ0FBQzs7S0FDdEc7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7U0FDMUksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0FsQ0w7RUFXa0QsaUJBQWlCLEVBd0JsRSxDQUFBO0FBeEJELHdDQXdCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblJ1bGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgdmFsaWRhdGlvbkVycm9yPyA6IHN0cmluZztcblx0YXNzZXREaXN0cmlidXRpb25Db25kaXRpb25zPyA6IEthbHR1cmFBc3NldERpc3RyaWJ1dGlvbkNvbmRpdGlvbltdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25SdWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdmFsaWRhdGlvbkVycm9yIDogc3RyaW5nO1xuXHRhc3NldERpc3RyaWJ1dGlvbkNvbmRpdGlvbnMgOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb25bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYXNzZXREaXN0cmlidXRpb25Db25kaXRpb25zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZScgfSxcblx0XHRcdFx0dmFsaWRhdGlvbkVycm9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFBc3NldERpc3RyaWJ1dGlvbkNvbmRpdGlvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZSddID0gS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUnVsZTsiXX0=