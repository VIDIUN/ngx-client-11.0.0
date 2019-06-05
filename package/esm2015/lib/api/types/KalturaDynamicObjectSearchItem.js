/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperator } from './KalturaSearchOperator';
/**
 * @record
 */
export function KalturaDynamicObjectSearchItemArgs() { }
/** @type {?|undefined} */
KalturaDynamicObjectSearchItemArgs.prototype.field;
export class KalturaDynamicObjectSearchItem extends KalturaSearchOperator {
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
            objectType: { type: 'c', default: 'KalturaDynamicObjectSearchItem' },
            field: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDynamicObjectSearchItem.prototype.field;
}
typesMappingStorage['KalturaDynamicObjectSearchItem'] = KalturaDynamicObjectSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFPM0YsTUFBTSxxQ0FBc0MsU0FBUSxxQkFBcUI7Ozs7SUFJckUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hPcGVyYXRvciwgS2FsdHVyYVNlYXJjaE9wZXJhdG9yQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaE9wZXJhdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hPcGVyYXRvckFyZ3Mge1xuICAgIGZpZWxkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtIGV4dGVuZHMgS2FsdHVyYVNlYXJjaE9wZXJhdG9yIHtcblxuICAgIGZpZWxkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUR5bmFtaWNPYmplY3RTZWFyY2hJdGVtJyB9LFxuXHRcdFx0XHRmaWVsZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHluYW1pY09iamVjdFNlYXJjaEl0ZW0nXSA9IEthbHR1cmFEeW5hbWljT2JqZWN0U2VhcmNoSXRlbTsiXX0=