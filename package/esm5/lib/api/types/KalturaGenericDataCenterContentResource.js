/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
/**
 * @record
 */
export function KalturaGenericDataCenterContentResourceArgs() { }
var KalturaGenericDataCenterContentResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDataCenterContentResource, _super);
    function KalturaGenericDataCenterContentResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDataCenterContentResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDataCenterContentResource' }
        });
        return result;
    };
    return KalturaGenericDataCenterContentResource;
}(KalturaDataCenterContentResource));
export { KalturaGenericDataCenterContentResource };
typesMappingStorage['KalturaGenericDataCenterContentResource'] = KalturaGenericDataCenterContentResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUF3QyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU81SCxJQUFBO0lBQTZELG1FQUFnQztJQUl6RixpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELGdDQUFnQyxFQW9CNUYsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLCBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnXSA9IEthbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZTsiXX0=