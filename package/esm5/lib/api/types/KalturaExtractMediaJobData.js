/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaExtractMediaJobDataArgs() { }
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.calculateComplexity;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.extractId3Tags;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.destDataFilePath;
/** @type {?|undefined} */
KalturaExtractMediaJobDataArgs.prototype.detectGOP;
var KalturaExtractMediaJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExtractMediaJobData, _super);
    function KalturaExtractMediaJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExtractMediaJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExtractMediaJobData' },
            flavorAssetId: { type: 's' },
            calculateComplexity: { type: 'b' },
            extractId3Tags: { type: 'b' },
            destDataFilePath: { type: 's' },
            detectGOP: { type: 'n' }
        });
        return result;
    };
    return KalturaExtractMediaJobData;
}(KalturaConvartableJobData));
export { KalturaExtractMediaJobData };
if (false) {
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.calculateComplexity;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.extractId3Tags;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.destDataFilePath;
    /** @type {?} */
    KalturaExtractMediaJobData.prototype.detectGOP;
}
typesMappingStorage['KalturaExtractMediaJobData'] = KalturaExtractMediaJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFeHRyYWN0TWVkaWFKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV3ZHLElBQUE7SUFBZ0Qsc0RBQXlCO0lBUXJFLG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXpDTDtFQWFnRCx5QkFBeUIsRUE2QnhFLENBQUE7QUE3QkQsc0NBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhLCBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIHtcbiAgICBmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Y2FsY3VsYXRlQ29tcGxleGl0eT8gOiBib29sZWFuO1xuXHRleHRyYWN0SWQzVGFncz8gOiBib29sZWFuO1xuXHRkZXN0RGF0YUZpbGVQYXRoPyA6IHN0cmluZztcblx0ZGV0ZWN0R09QPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhIHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGNhbGN1bGF0ZUNvbXBsZXhpdHkgOiBib29sZWFuO1xuXHRleHRyYWN0SWQzVGFncyA6IGJvb2xlYW47XG5cdGRlc3REYXRhRmlsZVBhdGggOiBzdHJpbmc7XG5cdGRldGVjdEdPUCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGEnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FsY3VsYXRlQ29tcGxleGl0eSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRleHRyYWN0SWQzVGFncyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkZXN0RGF0YUZpbGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRldGVjdEdPUCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXh0cmFjdE1lZGlhSm9iRGF0YSddID0gS2FsdHVyYUV4dHJhY3RNZWRpYUpvYkRhdGE7Il19