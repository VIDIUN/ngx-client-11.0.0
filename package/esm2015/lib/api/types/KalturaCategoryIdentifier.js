/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryIdentifierField } from './KalturaCategoryIdentifierField';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
/**
 * @record
 */
export function KalturaCategoryIdentifierArgs() { }
/** @type {?|undefined} */
KalturaCategoryIdentifierArgs.prototype.identifier;
export class KalturaCategoryIdentifier extends KalturaObjectIdentifier {
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
            objectType: { type: 'c', default: 'KalturaCategoryIdentifier' },
            identifier: { type: 'es', subTypeConstructor: KalturaCategoryIdentifierField, subType: 'KalturaCategoryIdentifierField' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryIdentifier.prototype.identifier;
}
typesMappingStorage['KalturaCategoryIdentifier'] = KalturaCategoryIdentifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU9qRyxNQUFNLGdDQUFpQyxTQUFRLHVCQUF1Qjs7OztJQUlsRSxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNwSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeUlkZW50aWZpZXJGaWVsZCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciwgS2FsdHVyYU9iamVjdElkZW50aWZpZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0SWRlbnRpZmllcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdElkZW50aWZpZXJBcmdzIHtcbiAgICBpZGVudGlmaWVyPyA6IEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXJGaWVsZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllciBleHRlbmRzIEthbHR1cmFPYmplY3RJZGVudGlmaWVyIHtcblxuICAgIGlkZW50aWZpZXIgOiBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllcicgfSxcblx0XHRcdFx0aWRlbnRpZmllciA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXJGaWVsZCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeUlkZW50aWZpZXInXSA9IEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXI7Il19