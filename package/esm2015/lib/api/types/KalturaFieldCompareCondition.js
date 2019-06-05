/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerField } from './KalturaIntegerField';
import { KalturaCompareCondition } from './KalturaCompareCondition';
/**
 * @record
 */
export function KalturaFieldCompareConditionArgs() { }
/** @type {?|undefined} */
KalturaFieldCompareConditionArgs.prototype.field;
export class KalturaFieldCompareCondition extends KalturaCompareCondition {
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
            objectType: { type: 'c', default: 'KalturaFieldCompareCondition' },
            field: { type: 'o', subTypeConstructor: KalturaIntegerField, subType: 'KalturaIntegerField' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFieldCompareCondition.prototype.field;
}
typesMappingStorage['KalturaFieldCompareCondition'] = KalturaFieldCompareCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU9qRyxNQUFNLG1DQUFvQyxTQUFRLHVCQUF1Qjs7OztJQUlyRSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdlckZpZWxkIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdlckZpZWxkJztcbmltcG9ydCB7IEthbHR1cmFDb21wYXJlQ29uZGl0aW9uLCBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb21wYXJlQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmllbGRDb21wYXJlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbkFyZ3Mge1xuICAgIGZpZWxkPyA6IEthbHR1cmFJbnRlZ2VyRmllbGQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGaWVsZENvbXBhcmVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbiB7XG5cbiAgICBmaWVsZCA6IEthbHR1cmFJbnRlZ2VyRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWVsZENvbXBhcmVDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0ZmllbGQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbnRlZ2VyRmllbGQsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVnZXJGaWVsZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbiddID0gS2FsdHVyYUZpZWxkQ29tcGFyZUNvbmRpdGlvbjsiXX0=