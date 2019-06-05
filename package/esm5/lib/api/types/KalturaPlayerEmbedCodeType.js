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
export function KalturaPlayerEmbedCodeTypeArgs() { }
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.id;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.label;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.entryOnly;
/** @type {?|undefined} */
KalturaPlayerEmbedCodeTypeArgs.prototype.minVersion;
var KalturaPlayerEmbedCodeType = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayerEmbedCodeType, _super);
    function KalturaPlayerEmbedCodeType(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayerEmbedCodeType.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayerEmbedCodeType' },
            id: { type: 's' },
            label: { type: 's' },
            entryOnly: { type: 'b' },
            minVersion: { type: 's' }
        });
        return result;
    };
    return KalturaPlayerEmbedCodeType;
}(KalturaObjectBase));
export { KalturaPlayerEmbedCodeType };
if (false) {
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.id;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.label;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.entryOnly;
    /** @type {?} */
    KalturaPlayerEmbedCodeType.prototype.minVersion;
}
typesMappingStorage['KalturaPlayerEmbedCodeType'] = KalturaPlayerEmbedCodeType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQWdELHNEQUFpQjtJQU83RCxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0F0Q0w7RUFZZ0QsaUJBQWlCLEVBMkJoRSxDQUFBO0FBM0JELHNDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBpZD8gOiBzdHJpbmc7XG5cdGxhYmVsPyA6IHN0cmluZztcblx0ZW50cnlPbmx5PyA6IGJvb2xlYW47XG5cdG1pblZlcnNpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRsYWJlbCA6IHN0cmluZztcblx0ZW50cnlPbmx5IDogYm9vbGVhbjtcblx0bWluVmVyc2lvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhYmVsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5T25seSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRtaW5WZXJzaW9uIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlJ10gPSBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZTsiXX0=