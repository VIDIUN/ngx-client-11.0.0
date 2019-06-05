/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemBaseFilter } from './KalturaApiParameterPermissionItemBaseFilter';
/**
 * @record
 */
export function KalturaApiParameterPermissionItemFilterArgs() { }
export class KalturaApiParameterPermissionItemFilter extends KalturaApiParameterPermissionItemBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaApiParameterPermissionItemFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaApiParameterPermissionItemFilter'] = KalturaApiParameterPermissionItemFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1GaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkNBQTJDLEVBQW1ELE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBTzdKLE1BQU0sOENBQStDLFNBQVEsMkNBQTJDOzs7O0lBSXBHLFlBQVksSUFBbUQ7UUFFM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlciwgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1GaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1CYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1GaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1GaWx0ZXInXSA9IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUZpbHRlcjsiXX0=