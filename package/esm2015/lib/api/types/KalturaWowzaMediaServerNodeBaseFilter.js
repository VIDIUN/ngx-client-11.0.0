/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaServerNodeFilter } from './KalturaMediaServerNodeFilter';
/**
 * @record
 */
export function KalturaWowzaMediaServerNodeBaseFilterArgs() { }
export class KalturaWowzaMediaServerNodeBaseFilter extends KalturaMediaServerNodeFilter {
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
            objectType: { type: 'c', default: 'KalturaWowzaMediaServerNodeBaseFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaWowzaMediaServerNodeBaseFilter'] = KalturaWowzaMediaServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBb0MsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFPaEgsTUFBTSw0Q0FBNkMsU0FBUSw0QkFBNEI7Ozs7SUFJbkYsWUFBWSxJQUFpRDtRQUV6RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFTZXJ2ZXJOb2RlRmlsdGVyLCBLYWx0dXJhTWVkaWFTZXJ2ZXJOb2RlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYU1lZGlhU2VydmVyTm9kZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVCYXNlRmlsdGVyOyJdfQ==