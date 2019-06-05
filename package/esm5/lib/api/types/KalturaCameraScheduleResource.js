/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
/**
 * @record
 */
export function KalturaCameraScheduleResourceArgs() { }
/** @type {?|undefined} */
KalturaCameraScheduleResourceArgs.prototype.streamUrl;
var KalturaCameraScheduleResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCameraScheduleResource, _super);
    function KalturaCameraScheduleResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCameraScheduleResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCameraScheduleResource' },
            streamUrl: { type: 's' }
        });
        return result;
    };
    return KalturaCameraScheduleResource;
}(KalturaScheduleResource));
export { KalturaCameraScheduleResource };
if (false) {
    /** @type {?} */
    KalturaCameraScheduleResource.prototype.streamUrl;
}
typesMappingStorage['KalturaCameraScheduleResource'] = KalturaCameraScheduleResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhbWVyYVNjaGVkdWxlUmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYW1lcmFTY2hlZHVsZVJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU9qRyxJQUFBO0lBQW1ELHlEQUF1QjtJQUl0RSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0E3Qkw7RUFTbUQsdUJBQXVCLEVBcUJ6RSxDQUFBO0FBckJELHlDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZVJlc291cmNlLCBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZVJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FtZXJhU2NoZWR1bGVSZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VBcmdzIHtcbiAgICBzdHJlYW1Vcmw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FtZXJhU2NoZWR1bGVSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlIHtcblxuICAgIHN0cmVhbVVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhbWVyYVNjaGVkdWxlUmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhbWVyYVNjaGVkdWxlUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHN0cmVhbVVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2FtZXJhU2NoZWR1bGVSZXNvdXJjZSddID0gS2FsdHVyYUNhbWVyYVNjaGVkdWxlUmVzb3VyY2U7Il19