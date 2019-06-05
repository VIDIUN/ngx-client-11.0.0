/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaResponseProfileCacheRecalculateResultsArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateResultsArgs.prototype.lastObjectKey;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateResultsArgs.prototype.recalculated;
var KalturaResponseProfileCacheRecalculateResults = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfileCacheRecalculateResults, _super);
    function KalturaResponseProfileCacheRecalculateResults(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfileCacheRecalculateResults.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaResponseProfileCacheRecalculateResults' },
            lastObjectKey: { type: 's' },
            recalculated: { type: 'n' }
        });
        return result;
    };
    return KalturaResponseProfileCacheRecalculateResults;
}(KalturaObjectBase));
export { KalturaResponseProfileCacheRecalculateResults };
if (false) {
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateResults.prototype.lastObjectKey;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateResults.prototype.recalculated;
}
typesMappingStorage['KalturaResponseProfileCacheRecalculateResults'] = KalturaResponseProfileCacheRecalculateResults;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUFtRSx5RUFBaUI7SUFLaEYsdURBQVksSUFBeUQ7ZUFFakUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQ0FBK0MsRUFBRTtZQUNsRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REFoQ0w7RUFVbUUsaUJBQWlCLEVBdUJuRixDQUFBO0FBdkJELHlEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlUmVzdWx0c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBsYXN0T2JqZWN0S2V5PyA6IHN0cmluZztcblx0cmVjYWxjdWxhdGVkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbGFzdE9iamVjdEtleSA6IHN0cmluZztcblx0cmVjYWxjdWxhdGVkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzJyB9LFxuXHRcdFx0XHRsYXN0T2JqZWN0S2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlY2FsY3VsYXRlZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMnXSA9IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlUmVzdWx0czsiXX0=