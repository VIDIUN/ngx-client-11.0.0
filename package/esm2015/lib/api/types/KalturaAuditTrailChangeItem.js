/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAuditTrailChangeItemArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.descriptor;
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.oldValue;
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.newValue;
export class KalturaAuditTrailChangeItem extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeItem' },
            descriptor: { type: 's' },
            oldValue: { type: 's' },
            newValue: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.descriptor;
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.oldValue;
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.newValue;
}
typesMappingStorage['KalturaAuditTrailChangeItem'] = KalturaAuditTrailChangeItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLE1BQU0sa0NBQW1DLFNBQVEsaUJBQWlCOzs7O0lBTTlELFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGRlc2NyaXB0b3I/IDogc3RyaW5nO1xuXHRvbGRWYWx1ZT8gOiBzdHJpbmc7XG5cdG5ld1ZhbHVlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZGVzY3JpcHRvciA6IHN0cmluZztcblx0b2xkVmFsdWUgOiBzdHJpbmc7XG5cdG5ld1ZhbHVlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtJyB9LFxuXHRcdFx0XHRkZXNjcmlwdG9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9sZFZhbHVlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5ld1ZhbHVlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSddID0gS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtOyJdfQ==