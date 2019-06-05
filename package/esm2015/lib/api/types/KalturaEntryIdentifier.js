/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryIdentifierField } from './KalturaEntryIdentifierField';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
/**
 * @record
 */
export function KalturaEntryIdentifierArgs() { }
/** @type {?|undefined} */
KalturaEntryIdentifierArgs.prototype.identifier;
export class KalturaEntryIdentifier extends KalturaObjectIdentifier {
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
            objectType: { type: 'c', default: 'KalturaEntryIdentifier' },
            identifier: { type: 'es', subTypeConstructor: KalturaEntryIdentifierField, subType: 'KalturaEntryIdentifierField' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryIdentifier.prototype.identifier;
}
typesMappingStorage['KalturaEntryIdentifier'] = KalturaEntryIdentifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5SWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5SWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU9qRyxNQUFNLDZCQUE4QixTQUFRLHVCQUF1Qjs7OztJQUkvRCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUM5RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQgfSBmcm9tICcuL0thbHR1cmFFbnRyeUlkZW50aWZpZXJGaWVsZCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciwgS2FsdHVyYU9iamVjdElkZW50aWZpZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0SWRlbnRpZmllcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5SWRlbnRpZmllckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdElkZW50aWZpZXJBcmdzIHtcbiAgICBpZGVudGlmaWVyPyA6IEthbHR1cmFFbnRyeUlkZW50aWZpZXJGaWVsZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5SWRlbnRpZmllciBleHRlbmRzIEthbHR1cmFPYmplY3RJZGVudGlmaWVyIHtcblxuICAgIGlkZW50aWZpZXIgOiBLYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeUlkZW50aWZpZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5SWRlbnRpZmllcicgfSxcblx0XHRcdFx0aWRlbnRpZmllciA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeUlkZW50aWZpZXJGaWVsZCwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeUlkZW50aWZpZXInXSA9IEthbHR1cmFFbnRyeUlkZW50aWZpZXI7Il19