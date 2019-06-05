/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaFileSyncResourceArgs() { }
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.fileSyncObjectType;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.objectSubType;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.version;
export class KalturaFileSyncResource extends KalturaContentResource {
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
            objectType: { type: 'c', default: 'KalturaFileSyncResource' },
            fileSyncObjectType: { type: 'n' },
            objectSubType: { type: 'n' },
            objectId: { type: 's' },
            version: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFileSyncResource.prototype.fileSyncObjectType;
    /** @type {?} */
    KalturaFileSyncResource.prototype.objectSubType;
    /** @type {?} */
    KalturaFileSyncResource.prototype.objectId;
    /** @type {?} */
    KalturaFileSyncResource.prototype.version;
}
typesMappingStorage['KalturaFileSyncResource'] = KalturaFileSyncResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWxlU3luY1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTlGLE1BQU0sOEJBQStCLFNBQVEsc0JBQXNCOzs7O0lBTy9ELFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmlsZVN5bmNSZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIGZpbGVTeW5jT2JqZWN0VHlwZT8gOiBudW1iZXI7XG5cdG9iamVjdFN1YlR5cGU/IDogbnVtYmVyO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdHZlcnNpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZVN5bmNSZXNvdXJjZSBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2Uge1xuXG4gICAgZmlsZVN5bmNPYmplY3RUeXBlIDogbnVtYmVyO1xuXHRvYmplY3RTdWJUeXBlIDogbnVtYmVyO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0dmVyc2lvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2UnIH0sXG5cdFx0XHRcdGZpbGVTeW5jT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RTdWJUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2UnXSA9IEthbHR1cmFGaWxlU3luY1Jlc291cmNlOyJdfQ==