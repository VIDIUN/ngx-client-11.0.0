/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaRule extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.actions === 'undefined')
            this.actions = [];
        if (typeof this.conditions === 'undefined')
            this.conditions = [];
        if (typeof this.contexts === 'undefined')
            this.contexts = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJ1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRixNQUFNLGtCQUFtQixTQUFRLGlCQUFpQjs7OztJQVk5QyxZQUFZLElBQXVCO1FBRS9CLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQzFEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEUsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUMvRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNoRyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM5RyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDOUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFDb25kaXRpb24gfSBmcm9tICcuL0thbHR1cmFDb25kaXRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRleHRUeXBlSG9sZGVyIH0gZnJvbSAnLi9LYWx0dXJhQ29udGV4dFR5cGVIb2xkZXInO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJ1bGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRydWxlRGF0YT8gOiBzdHJpbmc7XG5cdG1lc3NhZ2U/IDogc3RyaW5nO1xuXHRjb2RlPyA6IHN0cmluZztcblx0YWN0aW9ucz8gOiBLYWx0dXJhUnVsZUFjdGlvbltdO1xuXHRjb25kaXRpb25zPyA6IEthbHR1cmFDb25kaXRpb25bXTtcblx0Y29udGV4dHM/IDogS2FsdHVyYUNvbnRleHRUeXBlSG9sZGVyW107XG5cdHN0b3BQcm9jZXNzaW5nPyA6IGJvb2xlYW47XG5cdGZvcmNlQWRtaW5WYWxpZGF0aW9uPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSdWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJ1bGVEYXRhIDogc3RyaW5nO1xuXHRtZXNzYWdlIDogc3RyaW5nO1xuXHRjb2RlIDogc3RyaW5nO1xuXHRhY3Rpb25zIDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcblx0Y29uZGl0aW9ucyA6IEthbHR1cmFDb25kaXRpb25bXTtcblx0Y29udGV4dHMgOiBLYWx0dXJhQ29udGV4dFR5cGVIb2xkZXJbXTtcblx0c3RvcFByb2Nlc3NpbmcgOiBib29sZWFuO1xuXHRmb3JjZUFkbWluVmFsaWRhdGlvbiA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSdWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWN0aW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5jb25kaXRpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5jb25kaXRpb25zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmNvbnRleHRzID09PSAndW5kZWZpbmVkJykgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSdWxlJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRydWxlRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXNzYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvZGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWN0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJ1bGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVJ1bGVBY3Rpb24nIH0sXG5cdFx0XHRcdGNvbmRpdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb25kaXRpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUNvbmRpdGlvbicgfSxcblx0XHRcdFx0Y29udGV4dHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250ZXh0VHlwZUhvbGRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGV4dFR5cGVIb2xkZXInIH0sXG5cdFx0XHRcdHN0b3BQcm9jZXNzaW5nIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGZvcmNlQWRtaW5WYWxpZGF0aW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUnVsZSddID0gS2FsdHVyYVJ1bGU7Il19