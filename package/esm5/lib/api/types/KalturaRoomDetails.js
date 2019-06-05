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
export function KalturaRoomDetailsArgs() { }
/** @type {?|undefined} */
KalturaRoomDetailsArgs.prototype.serverUrl;
/** @type {?|undefined} */
KalturaRoomDetailsArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaRoomDetailsArgs.prototype.token;
var KalturaRoomDetails = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRoomDetails, _super);
    function KalturaRoomDetails(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRoomDetails.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRoomDetails' },
            serverUrl: { type: 's' },
            entryId: { type: 's' },
            token: { type: 's' }
        });
        return result;
    };
    return KalturaRoomDetails;
}(KalturaObjectBase));
export { KalturaRoomDetails };
if (false) {
    /** @type {?} */
    KalturaRoomDetails.prototype.serverUrl;
    /** @type {?} */
    KalturaRoomDetails.prototype.entryId;
    /** @type {?} */
    KalturaRoomDetails.prototype.token;
}
typesMappingStorage['KalturaRoomDetails'] = KalturaRoomDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJvb21EZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUm9vbURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQXdDLDhDQUFpQjtJQU1yRCw0QkFBWSxJQUE4QjtlQUV0QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkFuQ0w7RUFXd0MsaUJBQWlCLEVBeUJ4RCxDQUFBO0FBekJELDhCQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJvb21EZXRhaWxzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNlcnZlclVybD8gOiBzdHJpbmc7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR0b2tlbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSb29tRGV0YWlscyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHNlcnZlclVybCA6IHN0cmluZztcblx0ZW50cnlJZCA6IHN0cmluZztcblx0dG9rZW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSb29tRGV0YWlsc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUm9vbURldGFpbHMnIH0sXG5cdFx0XHRcdHNlcnZlclVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSb29tRGV0YWlscyddID0gS2FsdHVyYVJvb21EZXRhaWxzOyJdfQ==