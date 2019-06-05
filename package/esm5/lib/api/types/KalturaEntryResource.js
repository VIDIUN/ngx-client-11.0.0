/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaEntryResourceArgs() { }
/** @type {?|undefined} */
KalturaEntryResourceArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaEntryResourceArgs.prototype.flavorParamsId;
var KalturaEntryResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryResource, _super);
    function KalturaEntryResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryResource' },
            entryId: { type: 's' },
            flavorParamsId: { type: 'n' }
        });
        return result;
    };
    return KalturaEntryResource;
}(KalturaContentResource));
export { KalturaEntryResource };
if (false) {
    /** @type {?} */
    KalturaEntryResource.prototype.entryId;
    /** @type {?} */
    KalturaEntryResource.prototype.flavorParamsId;
}
typesMappingStorage['KalturaEntryResource'] = KalturaEntryResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5UmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBUTlGLElBQUE7SUFBMEMsZ0RBQXNCO0lBSzVELDhCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBaENMO0VBVTBDLHNCQUFzQixFQXVCL0QsQ0FBQTtBQXZCRCxnQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlSZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeVJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5UmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5UmVzb3VyY2UnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5UmVzb3VyY2UnXSA9IEthbHR1cmFFbnRyeVJlc291cmNlOyJdfQ==