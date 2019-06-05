/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCountryRestrictionType } from './KalturaCountryRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaCountryRestrictionArgs() { }
/** @type {?|undefined} */
KalturaCountryRestrictionArgs.prototype.countryRestrictionType;
/** @type {?|undefined} */
KalturaCountryRestrictionArgs.prototype.countryList;
export class KalturaCountryRestriction extends KalturaBaseRestriction {
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
            objectType: { type: 'c', default: 'KalturaCountryRestriction' },
            countryRestrictionType: { type: 'en', subTypeConstructor: KalturaCountryRestrictionType, subType: 'KalturaCountryRestrictionType' },
            countryList: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCountryRestriction.prototype.countryRestrictionType;
    /** @type {?} */
    KalturaCountryRestriction.prototype.countryList;
}
typesMappingStorage['KalturaCountryRestriction'] = KalturaCountryRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBUTlGLE1BQU0sZ0NBQWlDLFNBQVEsc0JBQXNCOzs7O0lBS2pFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkksV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VSZXN0cmljdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXN0cmljdGlvbkFyZ3Mge1xuICAgIGNvdW50cnlSZXN0cmljdGlvblR5cGU/IDogS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvblR5cGU7XG5cdGNvdW50cnlMaXN0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbiBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb24ge1xuXG4gICAgY291bnRyeVJlc3RyaWN0aW9uVHlwZSA6IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb25UeXBlO1xuXHRjb3VudHJ5TGlzdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ291bnRyeVJlc3RyaWN0aW9uJyB9LFxuXHRcdFx0XHRjb3VudHJ5UmVzdHJpY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvdW50cnlSZXN0cmljdGlvblR5cGUnIH0sXG5cdFx0XHRcdGNvdW50cnlMaXN0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb24nXSA9IEthbHR1cmFDb3VudHJ5UmVzdHJpY3Rpb247Il19