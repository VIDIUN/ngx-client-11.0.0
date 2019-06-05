/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchOrderByArgs() { }
/** @type {?|undefined} */
KalturaESearchOrderByArgs.prototype.orderItems;
var KalturaESearchOrderBy = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchOrderBy, _super);
    function KalturaESearchOrderBy(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.orderItems === 'undefined')
            _this.orderItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchOrderBy.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchOrderBy' },
            orderItems: { type: 'a', subTypeConstructor: KalturaESearchOrderByItem, subType: 'KalturaESearchOrderByItem' }
        });
        return result;
    };
    return KalturaESearchOrderBy;
}(KalturaObjectBase));
export { KalturaESearchOrderBy };
if (false) {
    /** @type {?} */
    KalturaESearchOrderBy.prototype.orderItems;
}
typesMappingStorage['KalturaESearchOrderBy'] = KalturaESearchOrderBy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hPcmRlckJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaE9yZGVyQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBT2xGLElBQUE7SUFBMkMsaURBQWlCO0lBSXhELCtCQUFZLElBQWlDO1FBQTdDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O0tBQ3BFOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDekcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0EvQkw7RUFVMkMsaUJBQWlCLEVBc0IzRCxDQUFBO0FBdEJELGlDQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0gfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoT3JkZXJCeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBvcmRlckl0ZW1zPyA6IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hPcmRlckJ5IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgb3JkZXJJdGVtcyA6IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hPcmRlckJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3JkZXJJdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3JkZXJJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoT3JkZXJCeScgfSxcblx0XHRcdFx0b3JkZXJJdGVtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaE9yZGVyQnknXSA9IEthbHR1cmFFU2VhcmNoT3JkZXJCeTsiXX0=