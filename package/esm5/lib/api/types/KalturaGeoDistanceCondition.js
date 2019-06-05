/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaGeoDistanceConditionArgs() { }
/** @type {?|undefined} */
KalturaGeoDistanceConditionArgs.prototype.geoCoderType;
var KalturaGeoDistanceCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGeoDistanceCondition, _super);
    function KalturaGeoDistanceCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGeoDistanceCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGeoDistanceCondition' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    };
    return KalturaGeoDistanceCondition;
}(KalturaMatchCondition));
export { KalturaGeoDistanceCondition };
if (false) {
    /** @type {?} */
    KalturaGeoDistanceCondition.prototype.geoCoderType;
}
typesMappingStorage['KalturaGeoDistanceCondition'] = KalturaGeoDistanceCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlb0Rpc3RhbmNlQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VvRGlzdGFuY2VDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLElBQUE7SUFBaUQsdURBQXFCO0lBSWxFLHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDaEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0E5Qkw7RUFVaUQscUJBQXFCLEVBcUJyRSxDQUFBO0FBckJELHVDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW9Db2RlclR5cGUgfSBmcm9tICcuL0thbHR1cmFHZW9Db2RlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1hdGNoQ29uZGl0aW9uLCBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhTWF0Y2hDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW9EaXN0YW5jZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB7XG4gICAgZ2VvQ29kZXJUeXBlPyA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW9EaXN0YW5jZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbiB7XG5cbiAgICBnZW9Db2RlclR5cGUgOiBLYWx0dXJhR2VvQ29kZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR2VvRGlzdGFuY2VDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlb0Rpc3RhbmNlQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRnZW9Db2RlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VvQ29kZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFHZW9Db2RlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW9EaXN0YW5jZUNvbmRpdGlvbiddID0gS2FsdHVyYUdlb0Rpc3RhbmNlQ29uZGl0aW9uOyJdfQ==