/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObject } from './KalturaObject';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaClipConcatJobDataArgs() { }
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaClipConcatJobDataArgs.prototype.operationAttributes;
var KalturaClipConcatJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaClipConcatJobData, _super);
    function KalturaClipConcatJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.operationAttributes === 'undefined')
            _this.operationAttributes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaClipConcatJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClipConcatJobData' },
            partnerId: { type: 'n' },
            priority: { type: 'n' },
            operationAttributes: { type: 'a', subTypeConstructor: KalturaObject, subType: 'KalturaObject' }
        });
        return result;
    };
    return KalturaClipConcatJobData;
}(KalturaJobData));
export { KalturaClipConcatJobData };
if (false) {
    /** @type {?} */
    KalturaClipConcatJobData.prototype.partnerId;
    /** @type {?} */
    KalturaClipConcatJobData.prototype.priority;
    /** @type {?} */
    KalturaClipConcatJobData.prototype.operationAttributes;
}
typesMappingStorage['KalturaClipConcatJobData'] = KalturaClipConcatJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2xpcENvbmNhdEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0FBU3RFLElBQUE7SUFBOEMsb0RBQWM7SUFNeEQsa0NBQVksSUFBb0M7UUFBaEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7O0tBQ3RGOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtTQUMxRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQXJDTDtFQVk4QyxjQUFjLEVBMEIzRCxDQUFBO0FBMUJELG9DQTBCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0IH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0JztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2xpcENvbmNhdEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0cHJpb3JpdHk/IDogbnVtYmVyO1xuXHRvcGVyYXRpb25BdHRyaWJ1dGVzPyA6IEthbHR1cmFPYmplY3RbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgcGFydG5lcklkIDogbnVtYmVyO1xuXHRwcmlvcml0eSA6IG51bWJlcjtcblx0b3BlcmF0aW9uQXR0cmlidXRlcyA6IEthbHR1cmFPYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDbGlwQ29uY2F0Sm9iRGF0YScgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW9yaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG9wZXJhdGlvbkF0dHJpYnV0ZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPYmplY3QsIHN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNsaXBDb25jYXRKb2JEYXRhJ10gPSBLYWx0dXJhQ2xpcENvbmNhdEpvYkRhdGE7Il19