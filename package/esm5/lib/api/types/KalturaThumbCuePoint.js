/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaThumbCuePointArgs() { }
/** @type {?|undefined} */
KalturaThumbCuePointArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaThumbCuePointArgs.prototype.description;
/** @type {?|undefined} */
KalturaThumbCuePointArgs.prototype.title;
/** @type {?|undefined} */
KalturaThumbCuePointArgs.prototype.subType;
var KalturaThumbCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbCuePoint, _super);
    function KalturaThumbCuePoint(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbCuePoint' },
            assetId: { type: 's' },
            description: { type: 's' },
            title: { type: 's' },
            subType: { type: 'en', subTypeConstructor: KalturaThumbCuePointSubType, subType: 'KalturaThumbCuePointSubType' }
        });
        return result;
    };
    return KalturaThumbCuePoint;
}(KalturaCuePoint));
export { KalturaThumbCuePoint };
if (false) {
    /** @type {?} */
    KalturaThumbCuePoint.prototype.assetId;
    /** @type {?} */
    KalturaThumbCuePoint.prototype.description;
    /** @type {?} */
    KalturaThumbCuePoint.prototype.title;
    /** @type {?} */
    KalturaThumbCuePoint.prototype.subType;
}
typesMappingStorage['KalturaThumbCuePoint'] = KalturaThumbCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQ3VlUG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUaHVtYkN1ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVekUsSUFBQTtJQUEwQyxnREFBZTtJQU9yRCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBdkNMO0VBYTBDLGVBQWUsRUEyQnhELENBQUE7QUEzQkQsZ0NBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50LCBLYWx0dXJhQ3VlUG9pbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUaHVtYkN1ZVBvaW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRBcmdzIHtcbiAgICBhc3NldElkPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0aXRsZT8gOiBzdHJpbmc7XG5cdHN1YlR5cGU/IDogS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJDdWVQb2ludCBleHRlbmRzIEthbHR1cmFDdWVQb2ludCB7XG5cbiAgICBhc3NldElkIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGl0bGUgOiBzdHJpbmc7XG5cdHN1YlR5cGUgOiBLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYkN1ZVBvaW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUaHVtYkN1ZVBvaW50JyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN1YlR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJDdWVQb2ludFN1YlR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVRodW1iQ3VlUG9pbnRTdWJUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGh1bWJDdWVQb2ludCddID0gS2FsdHVyYVRodW1iQ3VlUG9pbnQ7Il19