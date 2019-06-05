/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemFilter } from './KalturaPermissionItemFilter';
/**
 * @record
 */
export function KalturaApiParameterPermissionItemBaseFilterArgs() { }
export class KalturaApiParameterPermissionItemBaseFilter extends KalturaPermissionItemFilter {
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
            objectType: { type: 'c', default: 'KalturaApiParameterPermissionItemBaseFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaApiParameterPermissionItemBaseFilter'] = KalturaApiParameterPermissionItemBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFPN0csTUFBTSxrREFBbUQsU0FBUSwyQkFBMkI7Ozs7SUFJeEYsWUFBWSxJQUF1RDtRQUUvRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsNkNBQTZDLENBQUMsR0FBRywyQ0FBMkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGVybWlzc2lvbkl0ZW1GaWx0ZXIsIEthbHR1cmFQZXJtaXNzaW9uSXRlbUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uSXRlbUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVBlcm1pc3Npb25JdGVtRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUGVybWlzc2lvbkl0ZW1GaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlciddID0gS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlcjsiXX0=