/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaAccessControlListResponseArgs() { }
export class KalturaAccessControlListResponse extends KalturaListResponse {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.objects === 'undefined')
            this.objects = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaAccessControl, subType: 'KalturaAccessControl' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlListResponse.prototype.objects;
}
typesMappingStorage['KalturaAccessControlListResponse'] = KalturaAccessControlListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaXN0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sTGlzdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7OztBQU9yRixNQUFNLHVDQUF3QyxTQUFRLG1CQUFtQjs7OztJQUlyRSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUM5RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUM3RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbCB9IGZyb20gJy4vS2FsdHVyYUFjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUxpc3RSZXNwb25zZSwgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXN0UmVzcG9uc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sTGlzdFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaXN0UmVzcG9uc2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3RzID09PSAndW5kZWZpbmVkJykgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2wsIHN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2wnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbExpc3RSZXNwb25zZTsiXX0=