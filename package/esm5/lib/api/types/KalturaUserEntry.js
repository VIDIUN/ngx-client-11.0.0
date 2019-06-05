/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUserEntryArgs() { }
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.userId;
/** @type {?|undefined} */
KalturaUserEntryArgs.prototype.extendedStatus;
var KalturaUserEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserEntry, _super);
    function KalturaUserEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserEntry' },
            id: { type: 'n', readOnly: true },
            entryId: { type: 's' },
            userId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaUserEntryStatus, subType: 'KalturaUserEntryStatus' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaUserEntryType, subType: 'KalturaUserEntryType' },
            extendedStatus: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' }
        });
        return result;
    };
    return KalturaUserEntry;
}(KalturaObjectBase));
export { KalturaUserEntry };
if (false) {
    /** @type {?} */
    KalturaUserEntry.prototype.id;
    /** @type {?} */
    KalturaUserEntry.prototype.entryId;
    /** @type {?} */
    KalturaUserEntry.prototype.userId;
    /** @type {?} */
    KalturaUserEntry.prototype.partnerId;
    /** @type {?} */
    KalturaUserEntry.prototype.status;
    /** @type {?} */
    KalturaUserEntry.prototype.createdAt;
    /** @type {?} */
    KalturaUserEntry.prototype.updatedAt;
    /** @type {?} */
    KalturaUserEntry.prototype.type;
    /** @type {?} */
    KalturaUserEntry.prototype.extendedStatus;
}
typesMappingStorage['KalturaUserEntry'] = KalturaUserEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLElBQUE7SUFBc0MsNENBQWlCO0lBWW5ELDBCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxSCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDcEgsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7U0FDeEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQkFsREw7RUFjc0MsaUJBQWlCLEVBcUN0RCxDQUFBO0FBckNELDRCQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnlUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0dXNlcklkPyA6IHN0cmluZztcblx0ZXh0ZW5kZWRTdGF0dXM/IDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlckVudHJ5IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhVXNlckVudHJ5U3RhdHVzO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB0eXBlIDogS2FsdHVyYVVzZXJFbnRyeVR5cGU7XG5cdGV4dGVuZGVkU3RhdHVzIDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXNlckVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyRW50cnknIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlckVudHJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlTdGF0dXMnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlUeXBlJyB9LFxuXHRcdFx0XHRleHRlbmRlZFN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyRW50cnknXSA9IEthbHR1cmFVc2VyRW50cnk7Il19