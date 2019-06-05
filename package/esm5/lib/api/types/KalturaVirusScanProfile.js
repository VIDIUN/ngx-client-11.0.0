/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaVirusScanProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVirusScanProfile, _super);
    function KalturaVirusScanProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVirusScanProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaVirusScanProfile;
}(KalturaObjectBase));
export { KalturaVirusScanProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLElBQUE7SUFBNkMsbURBQWlCO0lBWTFELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdkgsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDckgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDN0csZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXJETDtFQWlCNkMsaUJBQWlCLEVBcUM3RCxDQUFBO0FBckNELG1DQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUgfSBmcm9tICcuL0thbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzRm91bmRBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFWaXJ1c0ZvdW5kQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c3RhdHVzPyA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzO1xuXHRlbmdpbmVUeXBlPyA6IEthbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlO1xuXHRlbnRyeUZpbHRlcj8gOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyO1xuXHRhY3Rpb25JZkluZmVjdGVkPyA6IEthbHR1cmFWaXJ1c0ZvdW5kQWN0aW9uO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN0YXR1cyA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzO1xuXHRlbmdpbmVUeXBlIDogS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGU7XG5cdGVudHJ5RmlsdGVyIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0YWN0aW9uSWZJbmZlY3RlZCA6IEthbHR1cmFWaXJ1c0ZvdW5kQWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVmlydXNTY2FuUHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRlbmdpbmVUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUnIH0sXG5cdFx0XHRcdGVudHJ5RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdGFjdGlvbklmSW5mZWN0ZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNGb3VuZEFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNGb3VuZEFjdGlvbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUnXSA9IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlOyJdfQ==