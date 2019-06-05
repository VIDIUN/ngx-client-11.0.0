/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
/**
 * @record
 */
export function KalturaPlayableEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.lastPlayedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.lastPlayedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationLessThan;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationGreaterThan;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationLessThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationTypeMatchOr;
var KalturaPlayableEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayableEntryBaseFilter, _super);
    function KalturaPlayableEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayableEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayableEntryBaseFilter' },
            lastPlayedAtGreaterThanOrEqual: { type: 'd' },
            lastPlayedAtLessThanOrEqual: { type: 'd' },
            durationLessThan: { type: 'n' },
            durationGreaterThan: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationTypeMatchOr: { type: 's' }
        });
        return result;
    };
    return KalturaPlayableEntryBaseFilter;
}(KalturaBaseEntryFilter));
export { KalturaPlayableEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.lastPlayedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.lastPlayedAtLessThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationLessThan;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationGreaterThan;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationLessThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationTypeMatchOr;
}
typesMappingStorage['KalturaPlayableEntryBaseFilter'] = KalturaPlayableEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTlGLElBQUE7SUFBb0QsMERBQXNCO0lBVXRFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBL0NMO0VBZW9ELHNCQUFzQixFQWlDekUsQ0FBQTtBQWpDRCwwQ0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncyB7XG4gICAgbGFzdFBsYXllZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGxhc3RQbGF5ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRkdXJhdGlvbkxlc3NUaGFuPyA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbj8gOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRkdXJhdGlvblR5cGVNYXRjaE9yPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUZpbHRlciB7XG5cbiAgICBsYXN0UGxheWVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRsYXN0UGxheWVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRkdXJhdGlvbkxlc3NUaGFuIDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuIDogbnVtYmVyO1xuXHRkdXJhdGlvbkxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGR1cmF0aW9uVHlwZU1hdGNoT3IgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5YWJsZUVudHJ5QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGxhc3RQbGF5ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRsYXN0UGxheWVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0ZHVyYXRpb25MZXNzVGhhbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkdyZWF0ZXJUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uVHlwZU1hdGNoT3IgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXI7Il19