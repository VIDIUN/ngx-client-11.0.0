/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaContextDataResultArgs() { }
/** @type {?|undefined} */
KalturaContextDataResultArgs.prototype.messages;
/** @type {?|undefined} */
KalturaContextDataResultArgs.prototype.actions;
var KalturaContextDataResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaContextDataResult, _super);
    function KalturaContextDataResult(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.messages === 'undefined')
            _this.messages = [];
        if (typeof _this.actions === 'undefined')
            _this.actions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaContextDataResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaContextDataResult' },
            messages: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            actions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' }
        });
        return result;
    };
    return KalturaContextDataResult;
}(KalturaObjectBase));
export { KalturaContextDataResult };
if (false) {
    /** @type {?} */
    KalturaContextDataResult.prototype.messages;
    /** @type {?} */
    KalturaContextDataResult.prototype.actions;
}
typesMappingStorage['KalturaContextDataResult'] = KalturaContextDataResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udGV4dERhdGFSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0FBUWxGLElBQUE7SUFBOEMsb0RBQWlCO0lBSzNELGtDQUFZLElBQW9DO1FBQWhELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUN4RDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDeEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0FwQ0w7RUFZOEMsaUJBQWlCLEVBeUI5RCxDQUFBO0FBekJELG9DQXlCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhUnVsZUFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb250ZXh0RGF0YVJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBtZXNzYWdlcz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdGFjdGlvbnM/IDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbWVzc2FnZXMgOiBLYWx0dXJhU3RyaW5nW107XG5cdGFjdGlvbnMgOiBLYWx0dXJhUnVsZUFjdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udGV4dERhdGFSZXN1bHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZXNzYWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWVzc2FnZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuYWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb250ZXh0RGF0YVJlc3VsdCcgfSxcblx0XHRcdFx0bWVzc2FnZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0YWN0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJ1bGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVJ1bGVBY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb250ZXh0RGF0YVJlc3VsdCddID0gS2FsdHVyYUNvbnRleHREYXRhUmVzdWx0OyJdfQ==