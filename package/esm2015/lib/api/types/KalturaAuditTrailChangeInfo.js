/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
/**
 * @record
 */
export function KalturaAuditTrailChangeInfoArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeInfoArgs.prototype.changedItems;
export class KalturaAuditTrailChangeInfo extends KalturaAuditTrailInfo {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.changedItems === 'undefined')
            this.changedItems = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeInfo' },
            changedItems: { type: 'a', subTypeConstructor: KalturaAuditTrailChangeItem, subType: 'KalturaAuditTrailChangeItem' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeInfo.prototype.changedItems;
}
typesMappingStorage['KalturaAuditTrailChangeInfo'] = KalturaAuditTrailChangeInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFPM0YsTUFBTSxrQ0FBbUMsU0FBUSxxQkFBcUI7Ozs7SUFJbEUsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7S0FDeEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQy9HLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsSW5mbywgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvQXJncyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxJbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm9BcmdzICBleHRlbmRzIEthbHR1cmFBdWRpdFRyYWlsSW5mb0FyZ3Mge1xuICAgIGNoYW5nZWRJdGVtcz8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW1bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJbmZvIGV4dGVuZHMgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvIHtcblxuICAgIGNoYW5nZWRJdGVtcyA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGFuZ2VkSXRlbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNoYW5nZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSW5mbycgfSxcblx0XHRcdFx0Y2hhbmdlZEl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0sIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm8nXSA9IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSW5mbzsiXX0=