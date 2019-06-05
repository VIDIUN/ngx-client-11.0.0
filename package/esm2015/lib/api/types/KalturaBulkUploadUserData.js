/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData } from './KalturaBulkUploadObjectData';
/**
 * @record
 */
export function KalturaBulkUploadUserDataArgs() { }
export class KalturaBulkUploadUserData extends KalturaBulkUploadObjectData {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadUserData' }
        });
        return result;
    }
}
typesMappingStorage['KalturaBulkUploadUserData'] = KalturaBulkUploadUserData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFPN0csTUFBTSxnQ0FBaUMsU0FBUSwyQkFBMkI7Ozs7SUFJdEUsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDckUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEsIEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkVXNlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkVXNlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YSddID0gS2FsdHVyYUJ1bGtVcGxvYWRVc2VyRGF0YTsiXX0=