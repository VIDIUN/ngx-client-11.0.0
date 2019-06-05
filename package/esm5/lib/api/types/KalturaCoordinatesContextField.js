/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaCoordinatesContextFieldArgs() { }
/** @type {?|undefined} */
KalturaCoordinatesContextFieldArgs.prototype.geoCoderType;
var KalturaCoordinatesContextField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCoordinatesContextField, _super);
    function KalturaCoordinatesContextField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCoordinatesContextField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCoordinatesContextField' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    };
    return KalturaCoordinatesContextField;
}(KalturaStringField));
export { KalturaCoordinatesContextField };
if (false) {
    /** @type {?} */
    KalturaCoordinatesContextField.prototype.geoCoderType;
}
typesMappingStorage['KalturaCoordinatesContextField'] = KalturaCoordinatesContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvb3JkaW5hdGVzQ29udGV4dEZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29vcmRpbmF0ZXNDb250ZXh0RmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBT2xGLElBQUE7SUFBb0QsMERBQWtCO0lBSWxFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDaEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0E5Qkw7RUFVb0Qsa0JBQWtCLEVBcUJyRSxDQUFBO0FBckJELDBDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW9Db2RlclR5cGUgfSBmcm9tICcuL0thbHR1cmFHZW9Db2RlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ0ZpZWxkLCBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb29yZGluYXRlc0NvbnRleHRGaWVsZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0cmluZ0ZpZWxkQXJncyB7XG4gICAgZ2VvQ29kZXJUeXBlPyA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb29yZGluYXRlc0NvbnRleHRGaWVsZCBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZCB7XG5cbiAgICBnZW9Db2RlclR5cGUgOiBLYWx0dXJhR2VvQ29kZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29vcmRpbmF0ZXNDb250ZXh0RmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvb3JkaW5hdGVzQ29udGV4dEZpZWxkJyB9LFxuXHRcdFx0XHRnZW9Db2RlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VvQ29kZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFHZW9Db2RlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb29yZGluYXRlc0NvbnRleHRGaWVsZCddID0gS2FsdHVyYUNvb3JkaW5hdGVzQ29udGV4dEZpZWxkOyJdfQ==