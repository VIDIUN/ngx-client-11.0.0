/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaVirusScanProfileArgs() { }
/** @type {?|undefined} */
KalturaVirusScanProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaVirusScanProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaVirusScanProfileArgs.prototype.engineType;
/** @type {?|undefined} */
KalturaVirusScanProfileArgs.prototype.entryFilter;
/** @type {?|undefined} */
KalturaVirusScanProfileArgs.prototype.actionIfInfected;
export class KalturaVirusScanProfile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaVirusScanProfile' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaVirusScanProfileStatus, subType: 'KalturaVirusScanProfileStatus' },
            engineType: { type: 'es', subTypeConstructor: KalturaVirusScanEngineType, subType: 'KalturaVirusScanEngineType' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            actionIfInfected: { type: 'en', subTypeConstructor: KalturaVirusFoundAction, subType: 'KalturaVirusFoundAction' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaVirusScanProfile.prototype.id;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.createdAt;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.partnerId;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.name;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.status;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.engineType;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.entryFilter;
    /** @type {?} */
    KalturaVirusScanProfile.prototype.actionIfInfected;
}
typesMappingStorage['KalturaVirusScanProfile'] = KalturaVirusScanProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsTUFBTSw4QkFBK0IsU0FBUSxpQkFBaUI7Ozs7SUFZMUQsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkgsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDckgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDN0csZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c0ZvdW5kQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNGb3VuZEFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHN0YXR1cz8gOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cztcblx0ZW5naW5lVHlwZT8gOiBLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZTtcblx0ZW50cnlGaWx0ZXI/IDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0YWN0aW9uSWZJbmZlY3RlZD8gOiBLYWx0dXJhVmlydXNGb3VuZEFjdGlvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cztcblx0ZW5naW5lVHlwZSA6IEthbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlO1xuXHRlbnRyeUZpbHRlciA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7XG5cdGFjdGlvbklmSW5mZWN0ZWQgOiBLYWx0dXJhVmlydXNGb3VuZEFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0ZW5naW5lVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlJyB9LFxuXHRcdFx0XHRlbnRyeUZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHRhY3Rpb25JZkluZmVjdGVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzRm91bmRBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzRm91bmRBY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJ10gPSBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZTsiXX0=