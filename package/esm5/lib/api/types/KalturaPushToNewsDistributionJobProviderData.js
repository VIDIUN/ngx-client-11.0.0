/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaPushToNewsDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaPushToNewsDistributionJobProviderDataArgs.prototype.currentVersion;
/** @type {?|undefined} */
KalturaPushToNewsDistributionJobProviderDataArgs.prototype.bodyParamContent;
var KalturaPushToNewsDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPushToNewsDistributionJobProviderData, _super);
    function KalturaPushToNewsDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPushToNewsDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushToNewsDistributionJobProviderData' },
            currentVersion: { type: 'n' },
            bodyParamContent: { type: 's' }
        });
        return result;
    };
    return KalturaPushToNewsDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaPushToNewsDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaPushToNewsDistributionJobProviderData.prototype.currentVersion;
    /** @type {?} */
    KalturaPushToNewsDistributionJobProviderData.prototype.bodyParamContent;
}
typesMappingStorage['KalturaPushToNewsDistributionJobProviderData'] = KalturaPushToNewsDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBc0QsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7O0FBUXRLLElBQUE7SUFBa0Usd0VBQThDO0lBSzVHLHNEQUFZLElBQXdEO2VBRWhFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDakcsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1REFoQ0w7RUFVa0UsOENBQThDLEVBdUIvRyxDQUFBO0FBdkJELHdEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhDQUE4QyxDQUFDLEdBQUcsNENBQTRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgY3VycmVudFZlcnNpb24/IDogbnVtYmVyO1xuXHRib2R5UGFyYW1Db250ZW50PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIGN1cnJlbnRWZXJzaW9uIDogbnVtYmVyO1xuXHRib2R5UGFyYW1Db250ZW50IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0Y3VycmVudFZlcnNpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Ym9keVBhcmFtQ29udGVudCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19