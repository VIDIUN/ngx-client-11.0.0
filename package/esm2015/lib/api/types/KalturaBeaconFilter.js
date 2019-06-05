/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaBeaconBaseFilter } from './KalturaBeaconBaseFilter';
/**
 * @record
 */
export function KalturaBeaconFilterArgs() { }
/** @type {?|undefined} */
KalturaBeaconFilterArgs.prototype.indexTypeEqual;
export class KalturaBeaconFilter extends KalturaBeaconBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaBeaconFilter' },
            indexTypeEqual: { type: 'es', subTypeConstructor: KalturaBeaconIndexType, subType: 'KalturaBeaconIndexType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBeaconFilter.prototype.indexTypeEqual;
}
typesMappingStorage['KalturaBeaconFilter'] = KalturaBeaconFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbkZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJlYWNvbkZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU9qRyxNQUFNLDBCQUEyQixTQUFRLHVCQUF1Qjs7OztJQUk1RCxZQUFZLElBQStCO1FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN4RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmVhY29uSW5kZXhUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uSW5kZXhUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCZWFjb25CYXNlRmlsdGVyLCBLYWx0dXJhQmVhY29uQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCZWFjb25CYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmVhY29uRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmVhY29uQmFzZUZpbHRlckFyZ3Mge1xuICAgIGluZGV4VHlwZUVxdWFsPyA6IEthbHR1cmFCZWFjb25JbmRleFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCZWFjb25GaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQmVhY29uQmFzZUZpbHRlciB7XG5cbiAgICBpbmRleFR5cGVFcXVhbCA6IEthbHR1cmFCZWFjb25JbmRleFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCZWFjb25GaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJlYWNvbkZpbHRlcicgfSxcblx0XHRcdFx0aW5kZXhUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmVhY29uSW5kZXhUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCZWFjb25JbmRleFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCZWFjb25GaWx0ZXInXSA9IEthbHR1cmFCZWFjb25GaWx0ZXI7Il19