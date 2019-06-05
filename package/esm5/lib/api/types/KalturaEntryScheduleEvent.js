/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
/**
 * @record
 */
export function KalturaEntryScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.templateEntryId;
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaEntryScheduleEventArgs.prototype.categoryIds;
var KalturaEntryScheduleEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryScheduleEvent, _super);
    function KalturaEntryScheduleEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryScheduleEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryScheduleEvent' },
            templateEntryId: { type: 's' },
            entryIds: { type: 's' },
            categoryIds: { type: 's' }
        });
        return result;
    };
    return KalturaEntryScheduleEvent;
}(KalturaScheduleEvent));
export { KalturaEntryScheduleEvent };
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.templateEntryId;
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.entryIds;
    /** @type {?} */
    KalturaEntryScheduleEvent.prototype.categoryIds;
}
typesMappingStorage['KalturaEntryScheduleEvent'] = KalturaEntryScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU3hGLElBQUE7SUFBK0MscURBQW9CO0lBTS9ELG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0FuQ0w7RUFXK0Msb0JBQW9CLEVBeUJsRSxDQUFBO0FBekJELHFDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudCwgS2FsdHVyYVNjaGVkdWxlRXZlbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnRBcmdzIHtcbiAgICB0ZW1wbGF0ZUVudHJ5SWQ/IDogc3RyaW5nO1xuXHRlbnRyeUlkcz8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudCBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50IHtcblxuICAgIHRlbXBsYXRlRW50cnlJZCA6IHN0cmluZztcblx0ZW50cnlJZHMgOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQnIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50J10gPSBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50OyJdfQ==