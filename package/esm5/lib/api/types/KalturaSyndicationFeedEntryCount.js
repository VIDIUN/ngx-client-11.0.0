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
export function KalturaSyndicationFeedEntryCountArgs() { }
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.totalEntryCount;
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.actualEntryCount;
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.requireTranscodingCount;
var KalturaSyndicationFeedEntryCount = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSyndicationFeedEntryCount, _super);
    function KalturaSyndicationFeedEntryCount(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSyndicationFeedEntryCount.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSyndicationFeedEntryCount' },
            totalEntryCount: { type: 'n' },
            actualEntryCount: { type: 'n' },
            requireTranscodingCount: { type: 'n' }
        });
        return result;
    };
    return KalturaSyndicationFeedEntryCount;
}(KalturaObjectBase));
export { KalturaSyndicationFeedEntryCount };
if (false) {
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.totalEntryCount;
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.actualEntryCount;
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.requireTranscodingCount;
}
typesMappingStorage['KalturaSyndicationFeedEntryCount'] = KalturaSyndicationFeedEntryCount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUFzRCw0REFBaUI7SUFNbkUsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0FuQ0w7RUFXc0QsaUJBQWlCLEVBeUJ0RSxDQUFBO0FBekJELDRDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgdG90YWxFbnRyeUNvdW50PyA6IG51bWJlcjtcblx0YWN0dWFsRW50cnlDb3VudD8gOiBudW1iZXI7XG5cdHJlcXVpcmVUcmFuc2NvZGluZ0NvdW50PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB0b3RhbEVudHJ5Q291bnQgOiBudW1iZXI7XG5cdGFjdHVhbEVudHJ5Q291bnQgOiBudW1iZXI7XG5cdHJlcXVpcmVUcmFuc2NvZGluZ0NvdW50IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudCcgfSxcblx0XHRcdFx0dG90YWxFbnRyeUNvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjdHVhbEVudHJ5Q291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVxdWlyZVRyYW5zY29kaW5nQ291bnQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQnXSA9IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50OyJdfQ==