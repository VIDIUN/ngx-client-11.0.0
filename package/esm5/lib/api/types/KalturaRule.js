/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaCondition } from './KalturaCondition';
import { KalturaContextTypeHolder } from './KalturaContextTypeHolder';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaRuleArgs() { }
/** @type {?|undefined} */
KalturaRuleArgs.prototype.description;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.ruleData;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.message;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.code;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.actions;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.conditions;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.contexts;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.stopProcessing;
/** @type {?|undefined} */
KalturaRuleArgs.prototype.forceAdminValidation;
var KalturaRule = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRule, _super);
    function KalturaRule(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.actions === 'undefined')
            _this.actions = [];
        if (typeof _this.conditions === 'undefined')
            _this.conditions = [];
        if (typeof _this.contexts === 'undefined')
            _this.contexts = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaRule.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRule' },
            description: { type: 's' },
            ruleData: { type: 's' },
            message: { type: 's' },
            code: { type: 's' },
            actions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' },
            conditions: { type: 'a', subTypeConstructor: KalturaCondition, subType: 'KalturaCondition' },
            contexts: { type: 'a', subTypeConstructor: KalturaContextTypeHolder, subType: 'KalturaContextTypeHolder' },
            stopProcessing: { type: 'b' },
            forceAdminValidation: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaRule;
}(KalturaObjectBase));
export { KalturaRule };
if (false) {
    /** @type {?} */
    KalturaRule.prototype.description;
    /** @type {?} */
    KalturaRule.prototype.ruleData;
    /** @type {?} */
    KalturaRule.prototype.message;
    /** @type {?} */
    KalturaRule.prototype.code;
    /** @type {?} */
    KalturaRule.prototype.actions;
    /** @type {?} */
    KalturaRule.prototype.conditions;
    /** @type {?} */
    KalturaRule.prototype.contexts;
    /** @type {?} */
    KalturaRule.prototype.stopProcessing;
    /** @type {?} */
    KalturaRule.prototype.forceAdminValidation;
}
typesMappingStorage['KalturaRule'] = KalturaRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJ1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbEYsSUFBQTtJQUFpQyx1Q0FBaUI7SUFZOUMscUJBQVksSUFBdUI7UUFBbkMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtRQUhHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztLQUMxRDs7OztJQUVTLGtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQy9GLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2hHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzlHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUM5RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NCQTVETDtFQXFCaUMsaUJBQWlCLEVBd0NqRCxDQUFBO0FBeENELHVCQXdDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhUnVsZUFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQ29uZGl0aW9uJztcbmltcG9ydCB7IEthbHR1cmFDb250ZXh0VHlwZUhvbGRlciB9IGZyb20gJy4vS2FsdHVyYUNvbnRleHRUeXBlSG9sZGVyJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSdWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0cnVsZURhdGE/IDogc3RyaW5nO1xuXHRtZXNzYWdlPyA6IHN0cmluZztcblx0Y29kZT8gOiBzdHJpbmc7XG5cdGFjdGlvbnM/IDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcblx0Y29uZGl0aW9ucz8gOiBLYWx0dXJhQ29uZGl0aW9uW107XG5cdGNvbnRleHRzPyA6IEthbHR1cmFDb250ZXh0VHlwZUhvbGRlcltdO1xuXHRzdG9wUHJvY2Vzc2luZz8gOiBib29sZWFuO1xuXHRmb3JjZUFkbWluVmFsaWRhdGlvbj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUnVsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRydWxlRGF0YSA6IHN0cmluZztcblx0bWVzc2FnZSA6IHN0cmluZztcblx0Y29kZSA6IHN0cmluZztcblx0YWN0aW9ucyA6IEthbHR1cmFSdWxlQWN0aW9uW107XG5cdGNvbmRpdGlvbnMgOiBLYWx0dXJhQ29uZGl0aW9uW107XG5cdGNvbnRleHRzIDogS2FsdHVyYUNvbnRleHRUeXBlSG9sZGVyW107XG5cdHN0b3BQcm9jZXNzaW5nIDogYm9vbGVhbjtcblx0Zm9yY2VBZG1pblZhbGlkYXRpb24gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUnVsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjdGlvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFjdGlvbnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuY29uZGl0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29uZGl0aW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5jb250ZXh0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUnVsZScgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cnVsZURhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVzc2FnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb2RlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSdWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFSdWxlQWN0aW9uJyB9LFxuXHRcdFx0XHRjb25kaXRpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29uZGl0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFDb25kaXRpb24nIH0sXG5cdFx0XHRcdGNvbnRleHRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGV4dFR5cGVIb2xkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRleHRUeXBlSG9sZGVyJyB9LFxuXHRcdFx0XHRzdG9wUHJvY2Vzc2luZyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRmb3JjZUFkbWluVmFsaWRhdGlvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJ1bGUnXSA9IEthbHR1cmFSdWxlOyJdfQ==