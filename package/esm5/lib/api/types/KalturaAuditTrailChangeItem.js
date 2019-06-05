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
export function KalturaAuditTrailChangeItemArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.descriptor;
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.oldValue;
/** @type {?|undefined} */
KalturaAuditTrailChangeItemArgs.prototype.newValue;
var KalturaAuditTrailChangeItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailChangeItem, _super);
    function KalturaAuditTrailChangeItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailChangeItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeItem' },
            descriptor: { type: 's' },
            oldValue: { type: 's' },
            newValue: { type: 's' }
        });
        return result;
    };
    return KalturaAuditTrailChangeItem;
}(KalturaObjectBase));
export { KalturaAuditTrailChangeItem };
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.descriptor;
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.oldValue;
    /** @type {?} */
    KalturaAuditTrailChangeItem.prototype.newValue;
}
typesMappingStorage['KalturaAuditTrailChangeItem'] = KalturaAuditTrailChangeItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQWlELHVEQUFpQjtJQU05RCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBbkNMO0VBV2lELGlCQUFpQixFQXlCakUsQ0FBQTtBQXpCRCx1Q0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBkZXNjcmlwdG9yPyA6IHN0cmluZztcblx0b2xkVmFsdWU/IDogc3RyaW5nO1xuXHRuZXdWYWx1ZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGRlc2NyaXB0b3IgOiBzdHJpbmc7XG5cdG9sZFZhbHVlIDogc3RyaW5nO1xuXHRuZXdWYWx1ZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbScgfSxcblx0XHRcdFx0ZGVzY3JpcHRvciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvbGRWYWx1ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdWYWx1ZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0nXSA9IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbTsiXX0=