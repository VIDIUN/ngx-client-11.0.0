/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionDistributionCaptionInfo } from './KalturaDailymotionDistributionCaptionInfo';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaDailymotionDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaDailymotionDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
/** @type {?|undefined} */
KalturaDailymotionDistributionJobProviderDataArgs.prototype.accessControlGeoBlockingOperation;
/** @type {?|undefined} */
KalturaDailymotionDistributionJobProviderDataArgs.prototype.accessControlGeoBlockingCountryList;
/** @type {?|undefined} */
KalturaDailymotionDistributionJobProviderDataArgs.prototype.captionsInfo;
var KalturaDailymotionDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDailymotionDistributionJobProviderData, _super);
    function KalturaDailymotionDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.captionsInfo === 'undefined')
            _this.captionsInfo = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDailymotionDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            accessControlGeoBlockingOperation: { type: 's' },
            accessControlGeoBlockingCountryList: { type: 's' },
            captionsInfo: { type: 'a', subTypeConstructor: KalturaDailymotionDistributionCaptionInfo, subType: 'KalturaDailymotionDistributionCaptionInfo' }
        });
        return result;
    };
    return KalturaDailymotionDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaDailymotionDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaDailymotionDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaDailymotionDistributionJobProviderData.prototype.accessControlGeoBlockingOperation;
    /** @type {?} */
    KalturaDailymotionDistributionJobProviderData.prototype.accessControlGeoBlockingCountryList;
    /** @type {?} */
    KalturaDailymotionDistributionJobProviderData.prototype.captionsInfo;
}
typesMappingStorage['KalturaDailymotionDistributionJobProviderData'] = KalturaDailymotionDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXRLLElBQUE7SUFBbUUseUVBQThDO0lBTzdHLHVEQUFZLElBQXlEO1FBQXJFLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7O0tBQ3hFOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGlDQUFpQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsRCxtQ0FBbUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7U0FDM0ksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REF4Q0w7RUFhbUUsOENBQThDLEVBNEJoSCxDQUFBO0FBNUJELHlEQTRCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvIH0gZnJvbSAnLi9LYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25DYXB0aW9uSW5mbyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgdmlkZW9Bc3NldEZpbGVQYXRoPyA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbEdlb0Jsb2NraW5nT3BlcmF0aW9uPyA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbEdlb0Jsb2NraW5nQ291bnRyeUxpc3Q/IDogc3RyaW5nO1xuXHRjYXB0aW9uc0luZm8/IDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm9bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdGFjY2Vzc0NvbnRyb2xHZW9CbG9ja2luZ09wZXJhdGlvbiA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbEdlb0Jsb2NraW5nQ291bnRyeUxpc3QgOiBzdHJpbmc7XG5cdGNhcHRpb25zSW5mbyA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkNhcHRpb25JbmZvW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhcHRpb25zSW5mbyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY2FwdGlvbnNJbmZvID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR2aWRlb0Fzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbEdlb0Jsb2NraW5nT3BlcmF0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjY2Vzc0NvbnRyb2xHZW9CbG9ja2luZ0NvdW50cnlMaXN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25zSW5mbyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8sIHN1YlR5cGUgOiAnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uQ2FwdGlvbkluZm8nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==