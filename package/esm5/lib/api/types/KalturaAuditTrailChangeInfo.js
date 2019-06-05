/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
/**
 * @record
 */
export function KalturaAuditTrailChangeInfoArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeInfoArgs.prototype.changedItems;
var KalturaAuditTrailChangeInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailChangeInfo, _super);
    function KalturaAuditTrailChangeInfo(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.changedItems === 'undefined')
            _this.changedItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailChangeInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeInfo' },
            changedItems: { type: 'a', subTypeConstructor: KalturaAuditTrailChangeItem, subType: 'KalturaAuditTrailChangeItem' }
        });
        return result;
    };
    return KalturaAuditTrailChangeInfo;
}(KalturaAuditTrailInfo));
export { KalturaAuditTrailChangeInfo };
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeInfo.prototype.changedItems;
}
typesMappingStorage['KalturaAuditTrailChangeInfo'] = KalturaAuditTrailChangeInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJbmZvLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLElBQUE7SUFBaUQsdURBQXFCO0lBSWxFLHFDQUFZLElBQXVDO1FBQW5ELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7O0tBQ3hFOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7U0FDL0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0EvQkw7RUFVaUQscUJBQXFCLEVBc0JyRSxDQUFBO0FBdEJELHVDQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsSW5mbywgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvQXJncyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxJbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm9BcmdzICBleHRlbmRzIEthbHR1cmFBdWRpdFRyYWlsSW5mb0FyZ3Mge1xuICAgIGNoYW5nZWRJdGVtcz8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW1bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJbmZvIGV4dGVuZHMgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvIHtcblxuICAgIGNoYW5nZWRJdGVtcyA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGFuZ2VkSXRlbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNoYW5nZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSW5mbycgfSxcblx0XHRcdFx0Y2hhbmdlZEl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0sIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUluZm8nXSA9IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSW5mbzsiXX0=