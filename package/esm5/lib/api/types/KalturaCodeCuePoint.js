/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaCodeCuePointArgs() { }
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.code;
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.description;
/** @type {?|undefined} */
KalturaCodeCuePointArgs.prototype.endTime;
var KalturaCodeCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCodeCuePoint, _super);
    function KalturaCodeCuePoint(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCodeCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCodeCuePoint' },
            code: { type: 's' },
            description: { type: 's' },
            endTime: { type: 'n' },
            duration: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaCodeCuePoint;
}(KalturaCuePoint));
export { KalturaCodeCuePoint };
if (false) {
    /** @type {?} */
    KalturaCodeCuePoint.prototype.code;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.description;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.endTime;
    /** @type {?} */
    KalturaCodeCuePoint.prototype.duration;
}
typesMappingStorage['KalturaCodeCuePoint'] = KalturaCodeCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvZGVDdWVQb2ludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvZGVDdWVQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQVN6RSxJQUFBO0lBQXlDLCtDQUFlO0lBT3BELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQ2pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBckNMO0VBV3lDLGVBQWUsRUEyQnZELENBQUE7QUEzQkQsK0JBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50LCBLYWx0dXJhQ3VlUG9pbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb2RlQ3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEFyZ3Mge1xuICAgIGNvZGU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGVuZFRpbWU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29kZUN1ZVBvaW50IGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50IHtcblxuICAgIGNvZGUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXHRyZWFkb25seSBkdXJhdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvZGVDdWVQb2ludEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29kZUN1ZVBvaW50JyB9LFxuXHRcdFx0XHRjb2RlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29kZUN1ZVBvaW50J10gPSBLYWx0dXJhQ29kZUN1ZVBvaW50OyJdfQ==